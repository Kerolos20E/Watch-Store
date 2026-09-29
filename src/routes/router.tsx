import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import Watches from "../pages/Watchespage";
import WatchDetails from "../pages/WatchDetails";
import WatchesPage from "../pages/Watchespage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/watches",
    element: <Watches />,
  },
  {
    path: "/watchesdetails",
    element: <WatchDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/watches",
    element: <WatchesPage />,
  },
]);

export default router;
