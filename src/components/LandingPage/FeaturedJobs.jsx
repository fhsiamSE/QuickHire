import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

function FeaturedJobs() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const dragStateRef = useRef({ isDragging: false, startX: 0, currentX: 0 })
  const sliderRef = useRef(null)

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

  const handleMouseDown = (e) => {
    dragStateRef.current.isDragging = true
    dragStateRef.current.startX = e.clientX
    dragStateRef.current.currentX = e.clientX
    setIsDragging(true)
  }

  const handleMouseMove = (e) => {
    if (!dragStateRef.current.isDragging) return
    
    dragStateRef.current.currentX = e.clientX
    const diff = e.clientX - dragStateRef.current.startX
    setDragOffset(diff)
  }

  const handleMouseUp = (e) => {
    if (!dragStateRef.current.isDragging) return

    dragStateRef.current.isDragging = false
    setIsDragging(false)

    const diff = dragStateRef.current.startX - dragStateRef.current.currentX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentSlide(Math.min(currentSlide + 1, jobs.length - 1))
      } else if (diff < 0) {
        setCurrentSlide(Math.max(currentSlide - 1, 0))
      }
    }
    setDragOffset(0)
  }

  const handleTouchStart = (e) => {
    dragStateRef.current.isDragging = true
    dragStateRef.current.startX = e.touches[0].clientX
    dragStateRef.current.currentX = e.touches[0].clientX
    setIsDragging(true)
  }

  const handleTouchMove = (e) => {
    if (!dragStateRef.current.isDragging) return
    
    dragStateRef.current.currentX = e.touches[0].clientX
    const diff = e.touches[0].clientX - dragStateRef.current.startX
    setDragOffset(diff)
  }

  const handleTouchEnd = (e) => {
    if (!dragStateRef.current.isDragging) return
    
    dragStateRef.current.isDragging = false
    setIsDragging(false)
    
    const diff = dragStateRef.current.startX - dragStateRef.current.currentX
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < jobs.length - 1) {
        setCurrentSlide(currentSlide + 1)
      } else if (diff < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
      }
    }
    setDragOffset(0)
  }

  const JobCard = ({ job }) => (
    <div className="bg-white rounded-lg p-6 flex flex-col gap-4 border border-gray-200 hover:shadow-lg transition-shadow h-full">
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
  )

  const cardWidth = 100 / 1.5

  return (
    <section className="w-full opacity-100">
      <div className="px-6 md:px-32 pb-16 flex flex-col gap-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Featured <span className="text-blue-500">jobs</span>
          </h2>
          <Link to="/jobs" className="text-blue-500 text-sm font-medium hover:opacity-80 transition-opacity">
            Show all jobs →
          </Link>
        </div>

        {/* Desktop Grid - Hidden on md and below */}
        <div className="hidden lg:grid grid-cols-4 gap-12">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Mobile/Tablet Swipe Slider - Hidden on lg and above */}
        <div className="lg:hidden flex flex-col gap-6">
          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex gap-4 ${!isDragging ? 'transition-transform duration-300 ease-out' : ''}`}
              style={{
                transform: `translateX(calc(-${currentSlide * cardWidth}% + ${dragOffset}px))`
              }}
            >
              {jobs.map((job) => (
                <div key={job.id} className="flex-shrink-0" style={{ width: `${cardWidth}%` }}>
                  <JobCard job={job} />
                </div>
              ))}
            </div>
          </div>

          {/* Show all jobs link */}
          <div className="flex justify-left">
            <Link to="/jobs" className="text-blue-500 text-sm font-medium hover:opacity-80 transition-opacity">
              Show all jobs →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedJobs
