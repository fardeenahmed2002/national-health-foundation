import React from 'react'
import AboutHero from './AboutHero'
import TeamProfiles from './TeamProfiles'
import Testimonials from './Testimonials'
import OurStory from './OurStory'
import CoreValues from './CoreValues'
import Awards from './Awards'
import CallToAction from './CallToAction'
import ImpactStories from './ImpactStories'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <TeamProfiles />
      <Testimonials />
      <CoreValues />
      <Awards />
      <CallToAction />
      <ImpactStories />
      <Footer />
    </div>
  )
}

export default page
