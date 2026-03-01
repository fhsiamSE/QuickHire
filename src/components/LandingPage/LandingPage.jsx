import React from 'react'
import Header from './Header'
import JobSearch from './JobSearch'
import CompanysWeHelp from './CompanysWeHelp'
import Category from './Category'
import SignUpAds from './SignUpAds'

function LandingPage() {
  return (
    <div className='bg-white shadow-sm'>
      <Header />
      <JobSearch />
      <CompanysWeHelp />
      <Category />
      <SignUpAds />
    </div>
  )
}

export default LandingPage
