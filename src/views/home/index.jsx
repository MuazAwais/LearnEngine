import AboutUs from './aboutUs'
import HeroSection from './heroSection'
import PartnersCompanies from './partnersCompanies'
import InstructorsCard from './instructorsCard'
import CoursesCards from './coursesCards'
import courseCardData from '../../components/data/courseCardData'
const Home = () => {
  return (
    <div className='mt-[72px] flex flex-col gap-[130px]'>
        <HeroSection />
        <PartnersCompanies/>
        <AboutUs />
        <InstructorsCard />
        <CoursesCards cardData={courseCardData} />
    </div>
  )
}

export default Home
