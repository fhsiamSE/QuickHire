import React from 'react'
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
    <section className="w-full mx-auto pt-[72px] pr-[124px] pb-12 pl-[124px] opacity-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-5xl font-bold text-black">
          Explore by <span className="text-blue-500">category</span>
        </h2>
        <a href="#" className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
          Show all jobs <span>→</span>
        </a>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-4 gap-12">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-8 rounded-lg border border-gray-200 bg-white text-black transition-all duration-300 cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:shadow-lg"
          >
            {/* Icon */}
            <img src={category.icon} alt={category.name} className="w-12 h-12 mb-8" />

            {/* Category Name */}
            <h3 className="text-2xl text-gray-800 font-bold mb-2 group-hover:text-white">
              {category.name}
            </h3>

            {/* Jobs Count and Link */}
            <div className="flex items-center gap-2 text-gray-500 hover:text-blue-100">
              <span className="text-sm">{category.jobs} jobs available</span>
              <span className="text-lg">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Category
