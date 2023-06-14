import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeContext";


const Main = () => {
    const location = useLocation();
    const {isDarkMode} = useContext(ThemeContext)
    const noHeaderFooter = location.pathname.includes('error');

    return (
        <div className={`${isDarkMode  ? "bg-[#0d1122] text-white" : "bg-white text-black"}`}>
            { noHeaderFooter || <Navbar />}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;

