import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import WatchesPage from "../pages/Watchespage";
import WatchDetails from "../pages/WatchDetails";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watches",
        element: <WatchesPage />,
      },
      {
        path: "/watchesdetails",
        element: <WatchDetails />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            // path: "/profile",
            // element: <Profiler />,
          },
        ],
      },
    ],
  },

  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
