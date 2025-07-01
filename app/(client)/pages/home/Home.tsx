import React from 'react'
import Hero from './Hero'
import KeyFeatures from './KeyFeatures'
import HowItWorks from './HowItWorks'
import WhoWeHelp from './WhoWeHelp'
import DonationCampaigns from './DonationCampaigns'
import LatestBlog from './LatestBlog'
import PartnersVolunteers from './PartnersVolunteers'
import CallToActionBanner from './CallToActionBanner'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <WhoWeHelp />
      <DonationCampaigns />
      <LatestBlog />
      <PartnersVolunteers />
      <CallToActionBanner />
      <Footer />
    </div>
  )
}

export default Home
