import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useJobs } from '../context/JobContext';
import { FiArrowLeft, FiMapPin, FiDollarSign, FiCalendar, FiCheckCircle } from 'react-icons/fi';

function JobDetail() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { getJobById, submitApplication } = useJobs();
  const job = getJobById(jobId);

  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSuccess, setApplicationSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resumeLink: '',
    coverNote: '',
  });

  const [errors, setErrors] = useState({});

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Job not found</h2>
          <button
            className="text-blue-600 hover:text-blue-700 font-medium"
            onClick={() => navigate('/jobs')}
          >
            Back to Job Listings
          </button>
        </div>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.resumeLink.trim()) {
      newErrors.resumeLink = 'Resume link is required';
    } else if (!/^https?:\/\/.+/.test(formData.resumeLink)) {
      newErrors.resumeLink = 'Please enter a valid URL';
    }

    if (!formData.coverNote.trim()) {
      newErrors.coverNote = 'Cover note is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      submitApplication(job.id, formData);
      setApplicationSuccess(true);
      setFormData({ name: '', email: '', resumeLink: '', coverNote: '' });
      setTimeout(() => {
        setShowApplicationForm(false);
        setApplicationSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-4"
            onClick={() => navigate('/jobs')}
          >
            <FiArrowLeft size={20} />
            Back to Jobs
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
          <p className="text-gray-600">{job.company}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Job Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <FiMapPin size={18} />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <p className="text-gray-900 font-semibold">{job.location}</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <FiDollarSign size={18} />
                  <span className="text-sm font-medium">Salary</span>
                </div>
                <p className="text-gray-900 font-semibold">{job.salary}</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <FiCalendar size={18} />
                  <span className="text-sm font-medium">Posted</span>
                </div>
                <p className="text-gray-900 font-semibold">{new Date(job.postedDate).toLocaleDateString()}</p>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
              <p className="text-gray-700 whitespace-pre-line mb-6">{job.description}</p>

              {job.requirements && (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="text-gray-700">{req}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Sidebar - Apply Now Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              {!showApplicationForm ? (
                <button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  onClick={() => setShowApplicationForm(true)}
                >
                  Apply Now
                </button>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Apply Now</h3>

                  {applicationSuccess ? (
                    <div className="text-center py-8">
                      <FiCheckCircle className="mx-auto text-green-500 mb-2" size={48} />
                      <p className="text-green-700 font-medium">Application submitted successfully!</p>
                      <p className="text-gray-600 text-sm mt-2">We'll review your application soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitApplication} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Your name"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      {/* Resume Link */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Resume Link (URL)
                        </label>
                        <input
                          type="url"
                          name="resumeLink"
                          value={formData.resumeLink}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                            errors.resumeLink ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="https://example.com/resume.pdf"
                        />
                        {errors.resumeLink && <p className="text-red-500 text-xs mt-1">{errors.resumeLink}</p>}
                      </div>

                      {/* Cover Note */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Cover Note
                        </label>
                        <textarea
                          name="coverNote"
                          value={formData.coverNote}
                          onChange={handleInputChange}
                          rows="4"
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                            errors.coverNote ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Tell us why you're interested in this role..."
                        />
                        {errors.coverNote && <p className="text-red-500 text-xs mt-1">{errors.coverNote}</p>}
                      </div>

                      <div className="flex gap-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowApplicationForm(false)}
                          className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
