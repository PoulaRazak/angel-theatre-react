import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "../components/layout"
import MainHome from "../pages/MainPage"
import OldShows from "../pages/OldShows"
import AboutUs from "../pages/Aboutus"
import WorkShops from "../pages/WorkShops"
import ShowDetails from "../pages/ShowDetails"

export default function AppRouter(){

    const routes = createBrowserRouter([
        {
            path:"/",
            element: <Layout/>,
            children:[
                {path:"/", element:<MainHome/>},
                {path:"/old-shows", element:<OldShows/>},
                {path:"/workshops", element:<WorkShops/>},
                {path:"/about-us", element:<AboutUs/>},
                {path:"/show-details/:id", element:<ShowDetails/>}
            ]
        }
    ])

    return <>
    <RouterProvider router={routes}/>
    </>
}