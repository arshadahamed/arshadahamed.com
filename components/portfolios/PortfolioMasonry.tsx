import Link from "next/link";
import Image from "next/image";

import AnimateRotation from "../animation/AnimateRotation";
import MasonryGrid from "../animation/MasonryGrid";
import projectsData from "@/data/projects.json";
import BackgroundParallax from "../animation/BackgroundParallax";

export default function PortfolioMasonry() {
  const { projects1 } = projectsData;

  return (
    <div className="mxd-section mxd-section-inner-headline grid-headline padding-default">
      <div className="mxd-container grid-l-container">
        <div className="mxd-block loading-wrap">
          <div className="mxd-projects-masonry loading__item">
            <div className="container-fluid p-0">

              <MasonryGrid
                className="row g-0 mxd-projects-masonry__gallery"
                data-masonry='{"percentPosition": true }'
                itemSelector=".mxd-projects-masonry__item"
              >

                {/* Title block */}
                <div className="col-12 col-xl-6 mxd-projects-masonry__item mxd-projects-masonry__title headline-title">
                  <div className="mxd-block__inner-headline">
                    <h1 className="inner-headline__title headline-img-before headline-img-07">
                      Projects
                      <br />
                      to explore
                    </h1>
                  </div>
                </div>

                {/* Project Items */}
                {projects1.map((item) => (
                  <div
                    key={item.id}
                    className="col-12 col-xl-6 mxd-project-item mxd-projects-masonry__item"
                  >
                    <Link
                      className="mxd-project-item__media masonry-media"
                      href={`/projects/${item.id}`}
                    >
                      <BackgroundParallax
                        className={`mxd-project-item__preview masonry-preview ${item.previewClass} parallax-img-small`}
                      />
                      <div className="mxd-project-item__tags">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="tag tag-default tag-permanent">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>

                    <div className="mxd-project-item__promo masonry-promo">
                      <div className="mxd-project-item__name">
                        <Link href={`/projects/${item.id}`}>
                          <span>{item.title}</span> {item.description}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

              </MasonryGrid>

              {/* Bottom button */}
              <div className="mxd-projects-masonry__btngroup anim-uni-in-up">
                <Link className="btn-rotating btn-rotating-180 ver-02" href={`/contact`}>
                  <AnimateRotation
                    as="svg"
                    version="1.1"
                    id="scrollDown"
                    viewBox="0 0 160 160"
                    className="btn-rotating__text animate-rotation"
                    value={360}
                  >
                    <defs>
                      <path
                        id="textPath"
                        d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                      />
                    </defs>
                    <use xlinkHref="#textPath" fill="none" />
                    <text>
                      <textPath xlinkHref="#textPath">
                        Let&apos;s start new project * Let&apos;s start new project *
                      </textPath>
                    </text>
                  </AnimateRotation>

                  <Image
                    className="btn-rotating__image"
                    alt="Object"
                    src="/img/icons/300x300_obj-btn-03.webp"
                    width={300}
                    height={300}
                  />
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
