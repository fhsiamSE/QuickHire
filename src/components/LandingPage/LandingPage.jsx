import React from 'react'
import Header from './Header'
import JobSearch from './JobSearch'
import CompanysWeHelp from './CompanysWeHelp'
import Category from './Category'

function LandingPage() {
  return (
    <div className='bg-white shadow-sm'>
      <Header />
      <JobSearch />
      <CompanysWeHelp />
      <Category />

    </div>
  )
}

export default LandingPage
