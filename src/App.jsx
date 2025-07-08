import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Product from "./assets/pages/Product";
import ErrorPage from "./assets/pages/ErrorPage";

const sheadyRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/product", element: <Product /> },
  { path: "*", element: <ErrorPage /> },
]);

export default function App() {

  return (
    <>
      <RouterProvider router={sheadyRouter} />
    </>
  )
}