import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Root() {
  return (
    <div className="container mx-auto">
      <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
