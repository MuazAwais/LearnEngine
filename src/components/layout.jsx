
import Footer from "./shared/footer"
import Navbar from "./shared/navbar"


const Layout = ({ children }) => {
  return (
    <div className="w-full">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout