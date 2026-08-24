import {BrowserRouter, Routes,Route} from "react-router-dom"
import PublicRoutes from "./PublicRoutes";
import NotFound from "../pages/share-page/404-NotFound";
const AppRoutes = () => {
  return (
    <BrowserRouter> 
        <Routes>
          {PublicRoutes()}
        <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes