import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import PublicRoutes from "./PublicRoutes";
import NotFound from "../pages/share-page/404-NotFound";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {PublicRoutes()}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default AppRoutes;
