import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import AboutUs from "./components/AboutUs";
import SupportTeam from "./components/SupportTeam";
import Solutions from "./components/Solutions";
import Stories from "./components/Stories";
import News from "./components/News";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Logos />
      <AboutUs />
      <SupportTeam />
      <Solutions />
       <Stories />
      <News />
    </div>
  );
}
