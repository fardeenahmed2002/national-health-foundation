
import Footer from "@/components/Footer"
import ApplySection from "./ApplySection"
import HowItWorksHero from "./HowItWorksHero"
import SupportSection from "./SupportSection"
import TrackSection from "./TrackSection "
import VerifySection from "./VerifySection "

const page = () => {
  return (
    <div>
      <HowItWorksHero />
      <ApplySection />
      <VerifySection />
      <SupportSection />
      <TrackSection />
      <Footer />
    </div>
  )
}

export default page
