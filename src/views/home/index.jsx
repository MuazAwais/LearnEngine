import AboutUs from './aboutUs'
import HeroSection from './heroSection'
import PartnersCompanies from './partnersCompanies'
import InstructorsCard from './instructorsCard'
import CoursesCards from './coursesCards'
import courseCardData from '../../components/data/courseCardData'
import ContectUs from './contectUs'
const Home = () => {
  return (
    <div className='mt-[72px] flex flex-col gap-[130px]'>
        <HeroSection />
        <PartnersCompanies/>
        <AboutUs />
        <InstructorsCard />
        <CoursesCards cardData={courseCardData} />
        <ContectUs />
    </div>
  )
}

export default Home
