import Footer from "./components/Footer"
import Header from "./components/Header"
import CaseStudies from "./pages/CaseStudies"
import ContactUsSection from "./pages/ContactUs"
import FAQPage from "./pages/FAQ"
import Home from "./pages/Home"
import ServicesPage from "./pages/Services"
import TeamSection from "./pages/TeamSection"
import TestimonialsSection from "./pages/TestimonialsSection"

function App() {

  return (
    <>
    <div className="px-[15px] md:px-[30px] xl:px-[60px]">
       <Header />
    </div>
    <div className="px-[15px] md:px-[30px] xl:px-[60px] flex flex-col gap-[60px]  xl:gap-[140px] mt-[30px]  xl:mt-[70px]">
     <Home />
     <ServicesPage />
     <CaseStudies />
     <FAQPage />
     <TeamSection />
     <TestimonialsSection />
     <ContactUsSection />
     <Footer />
    </div>
    </>
  )
}

export default App
