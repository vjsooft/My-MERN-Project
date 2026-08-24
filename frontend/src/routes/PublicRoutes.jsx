import {Route} from "react-router-dom"
import MainLayout from "../layouts/MainLayout";
import{Home, About, Services, Contact, Login, Signup} from './routeConfig';

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
