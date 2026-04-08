import { Outlet } from "react-router";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ScrollTop from "../ScrollTop";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function Layout(){
    return <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <ScrollTop/>
    <Analytics />
    <SpeedInsights/>
    </>
}