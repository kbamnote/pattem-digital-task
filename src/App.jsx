import { Route, Routes } from "react-router-dom"
import LandingPageMain from "./components/landingPage/LandingPageMain"
import ContactUs from "./components/contactUsPage/ContactUs"
import AboutPageMain from "./components/aboutPage/AboutPageMain"
import Jobs from "./components/jobsPage/Jobs"
import NotFoundPage from "./components/common/NotFoundPage"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"



function App() {
  

  return (
    <>
   <Routes>
 <Route path="/" element={<LandingPageMain/>} />
 <Route path="/contact" element={<ContactUs/>} />
 <Route path="/about" element={<AboutPageMain/>} />
  <Route path="/jobs" element={<Jobs/>} />
    <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
    <Route path="/*" element={<NotFoundPage/>} />
   </Routes>
    </>
  )
}

export default App
