import Lottie from 'lottie-react';
import { lazy, Suspense } from "react"
import { ROUTES } from './../constants/index';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoute from "./PublicRoute/PublicRoute";

import AppLoader from './../assets/loader.json';


const Routes = () => {
    const LandingPage = lazy(() => import('./../pages/Public/LandingPage/LandingPage'));



const router = createBrowserRouter([
      {
      path: ROUTES.ROOT,
      element: (
        <PublicRoute>
          <LandingPage/>
        </PublicRoute>
      )
    },

    
]);

 return (
    <Suspense
      fallback={
        <div className="loadingContainer">
          <Lottie animationData={AppLoader} loop={true} />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;