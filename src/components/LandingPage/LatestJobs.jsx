import React from 'react'

function LatestJobs() {
  const jobs = [
    {
      id: 1,
      icon: '🏢',
      iconBg: 'bg-teal-500',
      title: 'Social Media Assistant',
      company: 'Nomad',
      location: 'Paris, France',
      tags: ['Full-Time', 'Marketing', 'Design']
    },
    {
      id: 2,
      icon: '✦',
      iconBg: 'bg-cyan-500',
      title: 'Social Media Assistant',
      company: 'Netlify',
      location: 'Paris, France',
      tags: ['Full-Time', 'Marketing', 'Design']
    },
    {
      id: 3,
      icon: '📦',
      iconBg: 'bg-blue-600',
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Francisco, USA',
      tags: ['Full-Time', 'Marketing', 'Design']
    },
    {
      id: 4,
      icon: '🌐',
      iconBg: 'bg-blue-500',
      title: 'Brand Designer',
      company: 'Maze',
      location: 'San Francisco, USA',
      tags: ['Full-Time', 'Marketing', 'Design']
    },
    {
      id: 5,
      icon: '📖',
      iconBg: 'bg-cyan-400',
      title: 'Interactive Developer',
      company: 'Terraform',
      location: 'Hamburg, Germany',
      tags: ['Full-Time', 'Marketing', 'Design']
    },
    {
      id: 6,
      icon: '👤',
      iconBg: 'bg-cyan-500',
      title: 'Interactive Developer',
      company: 'Usability',
      location: 'Hamburg, Germany',
      tags: ['Full-Time', 'Marketing', 'Design']
    },
    {
      id: 7,
      icon: '📋',
      iconBg: 'bg-red-400',
      title: 'HR Manager',
      company: 'Packer',
      location: 'Lucern, Switzerland',
      tags: ['Full-Time', 'Marketing', 'Design']
    },
    {
      id: 8,
      icon: 'W',
      iconBg: 'bg-blue-600',
      title: 'HR Manager',
      company: 'Webflow',
      location: 'Lucern, Switzerland',
      tags: ['Full-Time', 'Marketing', 'Design']
    }
  ]

  return (
    <section className="w-full py-16 bg-gray-100 ">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Latest <span className="text-blue-500">jobs open</span>
          </h2>
          <div className='hidden xl:flex'>
            <a href="#" className="text-blue-500 text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-2">
            Show all jobs →
          </a>
          </div>
          
        </div>

        {/* Jobs List */}
        <div className="grid xl:grid-cols-2 gap-8 grid-cols-1 s">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex gap-6 items-start bg-white p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${job.iconBg} flex items-center justify-center text-white text-2xl font-bold`}>
                {job.icon}
              </div>

              {/* Content */}
              <div className="flex-grow">
                {/* Job Title */}
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {job.title}
                </h3>

                {/* Company and Location */}
                <p className="text-sm text-gray-600 mb-4">
                  {job.company} · {job.location}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-medium px-3 py-1 rounded-full border transition-colors ${
                        idx === 0
                          ? 'bg-teal-50 text-teal-600 border-teal-200'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-left xl:hidden">
            <a href="#" className="text-blue-500 text-sm font-medium hover:opacity-80 transition-opacity">
              Show all jobs →
            </a>
          </div>
      </div>
    </section>
  )
}

export default LatestJobs
