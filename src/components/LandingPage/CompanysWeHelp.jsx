import React from 'react'

function CompanysWeHelp() {
  const companies = [
    { name: 'Vodafone' },
    { name: 'Intel' },
    { name: 'Tesla' },
    { name: 'AMD' },
    { name: 'Talkit' }
  ]

  return (
    <section className="w-full opacity-100 flex items-center justify-center mx-auto">
      <div className="w-full pt-12 pr-[122px] pb-12 pl-[120px] flex flex-col justify-center gap-4">
        <p className="text-gray-400 text-xl font-medium m-0 tracking-wider">
          Companies we helped grow
        </p>
        <div className="flex gap-48 items-center justify-start flex-wrap">
          {companies.map((company, idx) => (
            <div className="flex items-center justify-center h-16 text-4xl font-medium text-gray-400"
              key={idx}
            >
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanysWeHelp
