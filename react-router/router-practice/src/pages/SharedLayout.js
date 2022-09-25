import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar"
const Home = () => {
  return (

    <>
    <StyledNavbar />
    <Navbar />
    <Outlet /> 
    <Footer />
    </>
  );
};
export default Home;
