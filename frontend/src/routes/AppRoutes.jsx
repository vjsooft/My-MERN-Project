import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";   

const AppRoutes = () => {
  return (
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes