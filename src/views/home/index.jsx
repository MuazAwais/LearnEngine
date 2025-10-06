import AboutUs from './aboutUs'
import HeroSection from './heroSection'
import PartnersCompanies from './partnersCompanies'
import InstructorsCard from './instructorsCard'
import CoursesCards from './coursesCards'
import courseCardData from '../../components/data/courseCardData'
import ContectUs from './contectUs'
const Home = () => {
  return (
    <div className='mt-[72px] flex flex-col gap-[30px] sm:gap-[50px] md:gap-[70px] lg:gap-[90px] xl:gap-[110px]'>
        <HeroSection />
        <hr  className='md:hidden px-[30px]'/>
        <PartnersCompanies/>
        <AboutUs />
        <InstructorsCard />
        <CoursesCards cardData={courseCardData} />
        <ContectUs />
    </div>
  )
}

export default Home
