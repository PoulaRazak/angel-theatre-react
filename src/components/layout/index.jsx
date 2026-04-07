import { Outlet } from "react-router";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ScrollTop from "../ScrollTop";

export default function Layout(){
    return <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <ScrollTop/>
    </>
}