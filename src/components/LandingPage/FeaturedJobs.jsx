import React from 'react'

function FeaturedJobs() {
  const jobs = [
    {
      id: 1,
      icon: '✉️',
      iconBg: 'bg-blue-600',
      title: 'Email Marketing',
      company: 'Revolut',
      location: 'Madrid, Spain',
      type: 'Full Time',
      description: 'Revolut is looking for Email Marketing to help team me...',
      tags: ['Marketing', 'Design']
    },
    {
      id: 2,
      icon: '📦',
      iconBg: 'bg-blue-500',
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Francisco, US',
      type: 'Full Time',
      description: 'Dropbox is looking for Brand Designer to help the team f...',
      tags: ['Design', 'Business']
    },
    {
      id: 3,
      icon: '♭',
      iconBg: 'bg-black',
      title: 'Email Marketing',
      company: 'Pitch',
      location: 'Berlin, Germany',
      type: 'Full Time',
      description: 'Pitch is looking for Customer Manager to join marketing t...',
      tags: ['Design', 'Business']
    },
    {
      id: 4,
      icon: '◉',
      iconBg: 'bg-green-500',
      title: 'Visual Designer',
      company: 'Blinklst',
      location: 'Granada, Spain',
      type: 'Full Time',
      description: 'Blinklst is looking for Visual Designer to help team deal...',
      tags: ['Design']
    },
    {
      id: 5,
      icon: '🔵',
      iconBg: 'bg-blue-600',
      title: 'Product Designer',
      company: 'ClassPass',
      location: 'Manchester, UK',
      type: 'Full Time',
      description: 'ClassPass is looking for Product Designer to help us...',
      tags: ['Marketing', 'Design']
    },
    {
      id: 6,
      icon: '🔷',
      iconBg: 'bg-teal-500',
      title: 'Lead Designer',
      company: 'Canva',
      location: 'Ontario, Canada',
      type: 'Full Time',
      description: 'Canva is looking for Lead Engineer to help develop m...',
      tags: ['Design', 'Business']
    },
    {
      id: 7,
      icon: '◎',
      iconBg: 'bg-gray-400',
      title: 'Brand Strategist',
      company: 'GoDaddy',
      location: 'Marseille, France',
      type: 'Full Time',
      description: 'GoDaddy is looking for Brand Strategist to join the team...',
      tags: ['Business']
    },
    {
      id: 8,
      icon: '🐦',
      iconBg: 'bg-blue-400',
      title: 'Data Analyst',
      company: 'Twitter',
      location: 'San Diego, US',
      type: 'Full Time',
      description: 'Twitter is looking for Data Analyst to help team deal...',
      tags: ['Technology']
    }
  ]

  const getTagColor = (tag) => {
    const colors = {
      'Marketing': 'bg-yellow-100 text-yellow-700',
      'Design': 'bg-teal-100 text-teal-700',
      'Business': 'bg-blue-100 text-blue-700',
      'Technology': 'bg-red-100 text-red-700'
    }
    return colors[tag] || 'bg-gray-100 text-gray-700'
  }

  return (
    <section className="w-full opacity-100">
      <div className="px-32 pb-16 flex flex-col gap-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
            Featured <span className="text-blue-500">jobs</span>
          </h2>
          <a href="#" className="text-blue-500 text-sm font-medium hover:opacity-80 transition-opacity">
            Show all jobs →
          </a>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-4 gap-12">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg p-6 flex flex-col gap-4 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start">
                <div className={`w-12 h-12 rounded-lg ${job.iconBg} flex items-center justify-center text-2xl text-white font-semibold`}>
                  {job.icon}
                </div>
                <span className="text-md text-blue-500 px-3 py-1 border border-blue-500">
                  {job.type}
                </span>
              </div>

              {/* Job Info */}
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-500">
                  {job.company} · <span className="text-gray-400">{job.location}</span>
                </p>
              </div>

              {/* Job Description */}
              <p className="text-sm text-gray-500 line-clamp-2">{job.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-2 py-1 rounded ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedJobs
