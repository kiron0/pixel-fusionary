import App from "@/App";
import NotFound from "@/components/not-found";
import About from "@/pages/about/about";
import Contact from "@/pages/contact/contact";
import Navbar from "@/pages/home/navbar/navbar";
import Services from "@/pages/services/services";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
          {
                    path: "/",
                    element: <App />,
          },
          {
                    path: "about",
                    element: <>
                              <Navbar />
                              <About />
                    </>,
          },
          {
                    path: "services",
                    element: <>
                              <Navbar />
                              <Services />
                    </>,
          },
          {
                    path: "contact",
                    element: <>
                              <Navbar />
                              <Contact />
                    </>,
          },
          {
                    path: "*",
                    element: <NotFound />,
          }
]);

export default router;