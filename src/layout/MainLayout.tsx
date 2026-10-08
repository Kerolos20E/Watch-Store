import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navBar";
import Footer from "./footer/Footer";
export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
