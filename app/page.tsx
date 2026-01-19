import HomeMainPage from "./(homes)/home-main/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arshad Ahamed | Full Stack Developer & Software Engineer",
  description:
    "Arshad Ahamed's responsive Tailwind CSS portfolio. Showcasing skills in Laravel, .NET, Angular, AI solutions, and more. Full Stack Developer offering professional IT solutions.",
  keywords: [
    "Arshad Ahamed",
    "Full Stack Developer Sri Lanka",
    "Software Engineer",
    "Laravel Developer",
    ".NET Core",
    "Angular",
    "AI Integration",
    "Web Developer"
  ],
  authors: [{ name: "Arshad Ahamed", url: "https://www.arshadahamed.com" }],
  openGraph: {
    title: "Arshad Ahamed | Full Stack Developer",
    description: "Full Stack Developer offering professional IT solutions in Laravel, .NET, and AI.",
    url: "https://www.arshadahamed.com",
    siteName: "Arshad Ahamed Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  // structured data for Google Knowledge Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Arshad Ahamed",
    "url": "https://www.arshadahamed.com",
    "jobTitle": "Full Stack Developer",
    "nationality": "Sri Lanka",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Staffordshire University"
    },
    "knowsAbout": [
      "Full Stack Development",
      "Artificial Intelligence",
      ".NET Core",
      "Laravel",
      "Angular",
      "Python",
      "Vue.js"
    ],
    "sameAs": [
      "https://github.com/arshadahamed", // Replace with your actual link
      "http://linkedin.com/in/arshad-ahamed-58507b101" // Replace with your actual link
    ]
  };

  return (
    <>
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeMainPage />
    </>
  );
}

