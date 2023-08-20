import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Products from "./../pages/Products/Products";
import About from "./../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/products',
            element:<Products></Products>
        },
        {
            path:'/about',
            element:<About></About>
        },
       {
             path:'/contact',
             element:<Contact></Contact>
           
         }, 
      ]
    },
  ]);

 
