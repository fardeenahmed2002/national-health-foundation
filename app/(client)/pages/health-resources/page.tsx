import React from 'react'
import HealthHeroSection from './HealthHeroSection '
import FeaturedArticlesSection from './FeaturedArticlesSection'
import HealthResourcePage from './HealthResourcePage'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <div>
            <HealthHeroSection />
            <FeaturedArticlesSection />
            <HealthResourcePage />
            <Footer />
        </div>
    )
}

export default page
