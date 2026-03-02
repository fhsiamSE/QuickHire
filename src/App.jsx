import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import LandingPage from './components/LandingPage/LandingPage';
import JobListings from './pages/JobListings';
import JobDetail from './pages/JobDetail';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <Router>
      <JobProvider>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/jobs" element={<JobListings />} />
              <Route path="/job/:jobId" element={<JobDetail />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
        </div>
      </JobProvider>
    </Router>
  );
}
