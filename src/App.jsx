import { createBrowserRouter, RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import ScrollToTop from './assets/components/ScrollToTop';

import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Product from "./assets/pages/Product";
import ErrorPage from "./assets/pages/ErrorPage";
import Payment from "./assets/components/payment";

const sheadyRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    )
  },
  {
    path: "/about",
    element: (
      <>
        <ScrollToTop />
        <About />
      </>
    )
  },
  {
    path: "/contact",
    element: (
      <>
        <ScrollToTop />
        <Contact />
      </>
    )
  },

  {
    path: "/payment",
    element: (
      <>
        <ScrollToTop />
        <Payment />
      </>
    )
  },
  {
    path: "/product",
    element: (
      <>
        <ScrollToTop />
        <Product />
      </>
    )
  },
  {
    path: "*",
    element: <ErrorPage />
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={sheadyRouter} />
      <ToastContainer />
    </>
  )
}