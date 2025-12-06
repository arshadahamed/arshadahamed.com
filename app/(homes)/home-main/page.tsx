import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Facts from "@/components/common/Facts";
import Footer2 from "@/components/footers/Footer2";
import Projects from "@/components/homes/home-1/Projects";

import About from "@/components/homes/home-1/About";

import Education from "@/components/common/Education";
import Experiences from "@/components/homes/home-1/Experiences";
import Expertise from "@/components/homes/home-1/Expertise";

import Hero from "@/components/homes/home-1/Hero";
import MarqueeSlider from "@/components/homes/home-1/MarqueeSlider";
import ParallaxDivider from "@/components/homes/home-1/ParallaxDivider";
import ParallaxDivider2 from "@/components/homes/home-1/ParallaxDivider2";
import ParallaxDivider3 from "@/components/homes/home-1/ParallaxDivider3";

import TechStack from "@/components/homes/home-1/TechStack";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Arshad Ahamed | Full Stack Developer & Software Engineer",
  description:
    "Arshad Ahamed's responsive Tailwind CSS portfolio. Showcasing skills in Laravel, Vue.js, Python, and more. Full Stack Developer offering professional IT solutions.",
};
export default function HomeMainPage() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <Projects />
        <ParallaxDivider />
        <MarqueeSlider />
        <About />
        <Facts />
        <Expertise />
        <ParallaxDivider2 />
        <Experiences />
        <TechStack />
        <Education />
        <ParallaxDivider3 />
        <Blogs />
        <Cta />
      </main>
      <Footer2 text="Arshad Ahamed" />
    </>
  );
}
