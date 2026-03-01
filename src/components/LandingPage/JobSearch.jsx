import React, { useState } from 'react'
import { FiSearch, FiMapPin } from 'react-icons/fi'
import JobSearchImage from "../../assets/JobSearchImage.png";

function JobSearch() {
  const [jobTitle, setJobTitle] = useState('')
  const [location, setLocation] = useState('Florence, Italy')

  const popularJobs = ['UI Designer', 'UX Researcher', 'Android', 'Admin']

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', jobTitle, 'in', location)
  }

  return (
    <div className="bg-gray-100 rounded-tl-lg  ">

      {/* Hero Section */}
     <section className="bg-gray-100 rounded-tl-lg ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20 ">
    
    <div className="grid lg:grid-cols-2 items-center gap-12 ">
      
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-700 mb-6 leading-tight">
          Discover <br />
          more than <br />
          <span className="text-blue-500">5000+ Jobs</span>
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Great platform for the job seeker that searching
          <br />
          for new career heights and passionate about startups.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-6 w-full xl:w-4xl xl:absolute">
          <div className="flex flex-col sm:flex-row gap-3 p-3 bg-white shadow-md">
            
            {/* Job Input */}
            <div className="flex-1 flex items-center gap-2 px-4 py-3">
              <FiSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Job title or keyword"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Location Select */}
            <div className="flex-1 flex items-center gap-2 px-4 py-3 border-t sm:border-t-0 sm:border-l">
              <FiMapPin className="text-gray-400" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700"
              >
                <option>Florence, Italy</option>
                <option>Milan, Italy</option>
                <option>Rome, Italy</option>
                <option>New York, USA</option>
                <option>San Francisco, USA</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 font-semibold rounded-lg transition"
            >
              Search my job
            </button>
          </div>
        </form>

        {/* Popular Searches */}
        <p className="text-gray-400 text-xl mt-32">
          Popular : {popularJobs.join(', ')}
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden lg:flex justify-end">
        <img
          src={JobSearchImage}
          alt="Hero"
          className="w-[99%] max-w-xl"
        />
      </div>

    </div>
  </div>
</section>
    </div>
  )
}

export default JobSearch
