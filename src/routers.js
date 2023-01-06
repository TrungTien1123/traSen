import {
    createBrowserRouter,
  } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Products from "./pages/Products";
import App from "./App";


const routers=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/news",
                element:<News/>
            },
            {
                path:"/products",
                element:<Products/>
            }

        ]
    },
    
])

export default routers;