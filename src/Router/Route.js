import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../Pages/About/About";
import Appiontment from "../Pages/Appiontment/Appiontment";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Ragister from "../Pages/Ragister/Ragister";
import Reviews from "../Pages/Reviews/Reviews";

 export const router = createBrowserRouter([
    {
     path:'/',
     element: <MainLayout></MainLayout>,
     children:[
        {
            path:'/',
            element : <Home></Home>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/reviwes',
            element:<Reviews></Reviews>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:"/appiontment",
            element:<Appiontment></Appiontment>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/ragister',
            element:<Ragister></Ragister>
        }  
     ]
    }
])