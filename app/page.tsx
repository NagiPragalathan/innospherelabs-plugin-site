import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import OurPlugin from "./components/OurPlugin";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <OurPlugin />
      <Contact />
      <Footer />
    </>
  );
}
