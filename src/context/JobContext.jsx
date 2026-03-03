import React, { createContext, useState, useContext, useEffect } from 'react';

const JobContext = createContext();

// Correct API base URL
const API_URL = 'http://127.0.0.1:8000/api';

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all jobs from API
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/jobs`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      
      const data = await response.json();
      setJobs(data || []); // <-- fix here
      setError(null);
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const addJob = async (jobData) => {
    try {
      const response = await fetch(`${API_URL}/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-ADMIN-TOKEN': 'secret123', // if using admin middleware
        },
        body: JSON.stringify(jobData),
      });

      if (!response.ok) {
        throw new Error('Failed to create job');
      }

      const data = await response.json();
      setJobs([...jobs, data]); // data is already the job object
      return data;
    } catch (err) {
      console.error('Error creating job:', err);
      setError(err.message);
      throw err;
    }
  };

  const deleteJob = async (jobId) => {
    try {
      const response = await fetch(`${API_URL}/jobs/${jobId}`, {
        method: 'DELETE',
        headers: {
          'X-ADMIN-TOKEN': 'secret123', // if using admin middleware
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete job');
      }

      setJobs(jobs.filter(job => job.id !== jobId));
    } catch (err) {
      console.error('Error deleting job:', err);
      setError(err.message);
      throw err;
    }
  };

  const getJobById = (jobId) => jobs.find(job => job.id === parseInt(jobId));

  const submitApplication = async (jobId, applicationData) => {
    try {
      const response = await fetch(`${API_URL}/applications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          job_id: jobId,
          ...applicationData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      const data = await response.json();
      setApplications([...applications, data.data]);
      return data.data;
    } catch (err) {
      console.error('Error submitting application:', err);
      setError(err.message);
      throw err;
    }
  };

  return (
    <JobContext.Provider value={{
      jobs,
      applications,
      loading,
      error,
      addJob,
      deleteJob,
      getJobById,
      submitApplication,
      fetchJobs,
    }}>
      {children}
    </JobContext.Provider>
  );
};