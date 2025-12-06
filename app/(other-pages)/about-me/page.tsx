import Education from "@/components/common/Education";
import Experiences from "@/components/common/Experiences";
import Hero from "@/components/other-pages/about/Hero";
import ProjectsMarqueeSlider from "@/components/other-pages/about/ProjectsMarqueeSlider";
import Techstack from "@/components/other-pages/about/Techstack";
import MarqueeSlider from "@/components/other-pages/about/MarqueeSlider";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Arshad Ahamed | Full Stack Developer & Software Engineer",
  description:
    "Arshad Ahamed's responsive Tailwind CSS portfolio. Showcasing skills in Laravel, Vue.js, Python, and more. Full Stack Developer offering professional IT solutions.",
};
export default function AboutMePage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Hero />
        <ProjectsMarqueeSlider />
        <Experiences />
        <Techstack />
        <Education />
        <MarqueeSlider />

        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
