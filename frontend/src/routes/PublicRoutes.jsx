import {Route} from "react-router-dom"
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/share-page/Home";
import About from "../pages/share-page/About";
import Services from "../pages/share-page/Services";
import Contact from "../pages/share-page/Contact";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";  
function PublicRoutes() {
  return (
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />      
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
         <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />  
      </Route>
  )
}

export default PublicRoutes
