import HomeMainPage from "./(homes)/home-main/page";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Arshad Ahamed | Full Stack Developer & Software Engineer",
  description:
    "Arshad Ahamed's responsive Tailwind CSS portfolio. Showcasing skills in Laravel, Vue.js, Python, and more. Full Stack Developer offering professional IT solutions.",
};
export default function Home() {
  return (
    <>
      <HomeMainPage />
    </>
  );
}
