import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Logos />
      <AboutUs />
    </div>
  );
}
