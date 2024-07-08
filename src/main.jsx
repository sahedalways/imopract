import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./ClientSide/Contact/Contact";
import Event from "./ClientSide/Event/Event";
import Membership from "./ClientSide/Membership/Membership";
import Service from "./ClientSide/Service/Service";
import "./index.css";
// import JoysCardOne from "./ClientSide/Service/SingleCardItem/JoysCardOne/JoysCardOne";
import About from "./ClientSide/About/About";
import Blog from "./ClientSide/Blog/Blog";
import InduvisulBlog from "./ClientSide/Blog/InduvisulBlog/InduvisulBlog";
import Home from "./ClientSide/Home/Home";
import NonEvents from "./ClientSide/NonEvents/NonEvents";
import PrivacyPolicy from "./ClientSide/PrivacyPolicy/PrivacyPolicy";
import TermsofUse from "./ClientSide/TermsOfUse/TermsofUse";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/event",
    element: <Event></Event>
  },
  {
    path: "/NonEvents",
    element: <NonEvents></NonEvents>
  },
  
  {
    path: "/contact",
    element: <Contact></Contact>
  },
  {
    path: "/membership",
    element: <Membership></Membership>
  },
  {
    path: "/service",
    element: <Service></Service>
  },
  // {
  //   path: "/joy-card-one",
  //   element: <JoysCardOne></JoysCardOne>
  // },

  {
    path: "/About",
    element: <About></About>
  },
  {
    path: "/blogs",
    element: <Blog></Blog>
  },
  {
    path: "/induvisual-blog",
    element: <InduvisulBlog></InduvisulBlog>
  },
   {
    path: "/terms-of-use",
    element: <TermsofUse></TermsofUse>
  },

     {
    path: "/privacy-policy",
    element: <PrivacyPolicy></PrivacyPolicy>
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);