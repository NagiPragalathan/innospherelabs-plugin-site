import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import AnimatedCursor from "react-animated-cursor"

export default function Home() {
  return (
    <>
      <AnimatedCursor
        innerSize={14}
        outerSize={28}
        color="145, 26, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Hero />
      <AboutUs />
      <Services />
    </>
  );
}
