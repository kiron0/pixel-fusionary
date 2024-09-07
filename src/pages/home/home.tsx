import ScrollToTop from "@/components/scroll-to-top";
import About from "./about";
import Banner from "./banner";
import Contact from "./contact";
import Feedback from "./feedback";
import Footer from "./footer";
import Navbar from "./navbar/navbar";
import Services from "./services";

export default function Home() {
          return (
                    <>
                              <Navbar />
                              <Banner />
                              <About />
                              <Services />
                              <Feedback />
                              <Contact />
                              <Footer />
                              <ScrollToTop />
                    </>
          )
}