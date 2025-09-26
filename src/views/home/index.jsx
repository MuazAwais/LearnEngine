import AboutUs from './aboutUs'
import HeroSection from './heroSection'
import PartnersCompanies from './partnersCompanies'

const Home = () => {
  return (
    <div className='mt-[72px] flex flex-col gap-[130px]'>
        <HeroSection />
        <PartnersCompanies/>
        <AboutUs />
    </div>
  )
}

export default Home
