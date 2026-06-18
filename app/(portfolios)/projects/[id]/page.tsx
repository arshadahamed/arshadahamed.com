import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";

import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import DetailsHero from "@/components/portfolios/DetailsHero";
import Challages from "@/components/portfolios/Challages";
import Solutions from "@/components/portfolios/Solutions";
import Feedback from "@/components/portfolios/Feedback";
import NextPrevNavigation from "@/components/portfolios/NextPrevNavigation";
import ParallaxDivider2 from "@/components/portfolios/ParallaxDivider2";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { id } = await params;
  const projectId = parseInt(id, 10);
  
  // Compare numeric IDs
  const project = projectsData.projects1.find(
    (p) => p.id === projectId
  );

  if (!project) {
    console.log("Project not found for ID:", id); // Debug log
    console.log("Available IDs:", projectsData.projects1.map(p => p.id)); // Debug log
    return notFound();
  }

  return (
    <>
      <main className="mxd-page-content inner-page-content">
        <DetailsHero project={project} />
        {/* <ParallaxDivider2 /> */}
        <div className="mxd-section mxd-project overflow-hidden">
          <div className="mxd-container grid-container">
            <Solutions project={project} />
            <Feedback project={project} />
            <NextPrevNavigation
              projectId={id}
              total={projectsData.projects1.length}
            />
          </div>
        </div>
        <Cta />
      </main>

      <Footer2 />
    </>
  );
}