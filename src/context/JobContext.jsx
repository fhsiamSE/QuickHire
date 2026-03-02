import React, { createContext, useState, useContext } from 'react';

const JobContext = createContext();

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      category: 'Technology',
      salary: '$120,000 - $160,000',
      description: 'We are looking for an experienced Frontend Developer to join our dynamic team. You will work on modern web applications using React and TypeScript. Required skills: React, JavaScript, HTML/CSS, Experience with state management (Redux/Context), Strong problem-solving abilities.',
      requirements: ['5+ years of experience', 'React expertise', 'TypeScript', 'REST APIs', 'Git proficiency'],
      postedDate: new Date(2024, 0, 15),
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      category: 'Technology',
      salary: '$100,000 - $140,000',
      description: 'Join our fast-growing startup and help us build scalable web applications. We use Node.js, React, and MongoDB. You will have the opportunity to work on both frontend and backend systems.',
      requirements: ['3+ years of full-stack experience', 'Node.js knowledge', 'React', 'MongoDB or SQL', 'Problem-solving skills'],
      postedDate: new Date(2024, 0, 10),
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'InnovateCo',
      location: 'Boston, MA',
      category: 'Product',
      salary: '$110,000 - $150,000',
      description: 'We are seeking a strategic Product Manager to lead our product vision and roadmap. You will collaborate with engineering, design, and marketing teams to deliver exceptional products.',
      requirements: ['3+ years PM experience', 'Agile methodology', 'Data analysis', 'User research', 'Technical understanding'],
      postedDate: new Date(2024, 0, 5),
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      company: 'DesignStudio',
      location: 'Los Angeles, CA',
      category: 'Design',
      salary: '$90,000 - $130,000',
      description: 'Create beautiful and intuitive user interfaces for web and mobile applications. Work with our design team to establish design systems and best practices.',
      requirements: ['3+ years of design experience', 'Figma proficiency', 'UI/UX principles', 'Prototyping', 'Communication skills'],
      postedDate: new Date(2024, 0, 20),
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudSystems',
      location: 'Remote',
      category: 'Technology',
      salary: '$130,000 - $170,000',
      description: 'Build and maintain CI/CD pipelines and infrastructure. We use AWS, Docker, and Kubernetes. Help us scale our systems to support millions of users.',
      requirements: ['4+ years DevOps experience', 'AWS/Cloud expertise', 'Docker & Kubernetes', 'CI/CD tools', 'Infrastructure as Code'],
      postedDate: new Date(2024, 0, 12),
    },
    {
      id: 6,
      title: 'Data Analyst',
      company: 'DataInsights',
      location: 'Chicago, IL',
      category: 'Analytics',
      salary: '$80,000 - $120,000',
      description: 'Analyze large datasets and provide actionable insights. Use Python, SQL, and visualization tools to help the business make data-driven decisions.',
      requirements: ['2+ years analytics experience', 'SQL expertise', 'Python', 'Data visualization', 'Statistical knowledge'],
      postedDate: new Date(2024, 0, 18),
    },
  ]);

  const [applications, setApplications] = useState([]);

  const addJob = (jobData) => {
    const newJob = {
      ...jobData,
      id: Math.max(...jobs.map(j => j.id), 0) + 1,
      postedDate: new Date(),
    };
    setJobs([...jobs, newJob]);
    return newJob;
  };

  const deleteJob = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
  };

  const getJobById = (jobId) => {
    return jobs.find(job => job.id === parseInt(jobId));
  };

  const submitApplication = (jobId, applicationData) => {
    const newApplication = {
      id: applications.length + 1,
      jobId,
      ...applicationData,
      submittedDate: new Date(),
    };
    setApplications([...applications, newApplication]);
    return newApplication;
  };

  const value = {
    jobs,
    applications,
    addJob,
    deleteJob,
    getJobById,
    submitApplication,
  };

  return (
    <JobContext.Provider value={value}>
      {children}
    </JobContext.Provider>
  );
};
