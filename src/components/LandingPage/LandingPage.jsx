import React from 'react'
import Header from './Header'
import JobSearch from './JobSearch'
import CompanysWeHelp from './CompanysWeHelp'
import Category from './Category'
import FeaturedJobs from './FeaturedJobs'
import LatestJobs from './LatestJobs'
import SignUpAds from './SignUpAds'
import Footer from './Footer'

function LandingPage() {
  return (
    <div className='bg-white shadow-sm'>
      <Header />
      <JobSearch />
      <CompanysWeHelp />
      <Category />
      <SignUpAds />
      <FeaturedJobs />
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default LandingPage
