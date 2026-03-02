import React from 'react'
import { Link } from 'react-router-dom'
import Design from '../../assets/Logos/Design.png'
import Sales from '../../assets/Logos/Sales.jpg'
import Marketing from '../../assets/Logos/Marketing.png'
import Finance from '../../assets/Logos/Finance.png'
import Technology from '../../assets/Logos/Technology.png'
import Engineering from '../../assets/Logos/Engineering.png'
import Business from '../../assets/Logos/Business.png'
import HumanResource from '../../assets/Logos/HumanResource.png'

function Category() {
  const categories = [
    { id: 1, name: 'Design', jobs: 235, icon: Design },
    { id: 2, name: 'Sales', jobs: 758, icon: Sales },
    { id: 3, name: 'Marketing', jobs: 140, icon: Marketing },
    { id: 4, name: 'Finance', jobs: 325, icon: Finance },
    { id: 5, name: 'Technology', jobs: 438, icon: Technology },
    { id: 6, name: 'Engineering', jobs: 542, icon: Engineering },
    { id: 7, name: 'Business', jobs: 211, icon: Business },
    { id: 8, name: 'Human Resource', jobs: 348, icon: HumanResource }
  ]

  return (
    <section className="w-full mx-auto pt-12 md:pt-[72px] pr-6 md:pr-[124px] pb-12 md:pb-12 pl-6 md:pl-[124px] opacity-100 ">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4 ">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Explore by <span className="text-blue-500">category</span>
        </h2>
        <Link to="/jobs" className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm md:text-base">
          Show all jobs <span>→</span>
        </Link>
      </div>

      {/* Categories Grid - Desktop */}
      <div className="hidden md:grid grid-cols-4 gap-12 ">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-8 rounded-lg border border-gray-200 bg-white text-black transition-all duration-300 cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:shadow-lg"
          >
            {/* Icon */}
            <img src={category.icon} alt={category.name} className="w-12 h-12 mb-8" />

            {/* Category Name */}
            <h3 className="text-2xl text-gray-800 font-bold mb-2 md:text-xl hover:text-blue-100">
              {category.name}
            </h3>

            {/* Jobs Count and Link */}
            <div className="flex items-center gap-2 ">
              <span className="text-sm text-gray-500 ">{category.jobs} jobs available</span>
              <span className="text-2xl font-bold">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Categories List - Mobile */}
      <div className="md:hidden flex flex-col gap-0">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between py-4 px-4 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-4 flex-grow">
              {/* Icon */}
              <img src={category.icon} alt={category.name} className="w-8 h-8 flex-shrink-0" />

              {/* Content */}
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-900 ">
                  {category.name}
                </h3>
                <span className="text-xs text-gray-500">
                  {category.jobs} jobs available
                </span>
              </div>
            </div>

            {/* Arrow */}
            <span className="text-gray-400 text-lg ml-2">→</span>
          </div>
        ))}

        {/* Show all jobs link - Mobile */}
        <div className="py-4 px-4">
          <Link to="/jobs" className="text-blue-600 font-medium flex items-center gap-2 text-sm hover:gap-3 transition-all">
            Show all jobs <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Category
