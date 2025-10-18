import AboutUs from './aboutUs'
import HeroSection from './heroSection'
import PartnersCompanies from './partnersCompanies'
import InstructorsCard from './instructorsCard'
import CoursesCards from './coursesCards'
import courseCardData from '../../components/data/courseCardData'
import ContectUs from './contactUs'
import { Element, scroller } from 'react-scroll'
const Home = () => {
  return (
    <div className='mt-[72px] flex flex-col gap-[60px] sm:gap-[70px] md:gap-[80px] lg:gap-[90px] xl:gap-[110px]'>
        <Element name="home" className='section'>
        <HeroSection />
        </Element>
        <Element name="partners" className='section'>
        <PartnersCompanies/>
        </Element>
        <Element name="about" className='section'>
        <AboutUs />
        </Element>
        <Element name="instructors" className='section'>
        <InstructorsCard />
        </Element>
        <Element name="courses" className='section'>
        <CoursesCards cardData={courseCardData} />
        </Element>
        <Element name="contact" className='section'>
        <ContectUs />
        </Element>
    </div>
  )
}

export default Home
