
import AnimatedButton from "../animation/AnimatedButton";


export default function DetailsHero({ project }: { project: any }) {
  return (
    <div className="mxd-section mxd-section-inner-headline padding-default">
      <div className="mxd-container grid-container">
        
        {/* Block Start */}
        <div className="mxd-block loading-wrap">
          <div className="container-fluid px-0">

            {/* Title Row */}
            <div className="row gx-0">

              <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                <div className="mxd-block__name name-project-link loading__fade">
                  <AnimatedButton
                    text="Projects"
                    as="a"
                    className="btn btn-anim btn-line-small btn-muted slide-right-up"
                    href="/projects"
                  >
                    <i className="ph ph-arrow-up-right" />
                  </AnimatedButton>
                </div>
              </div>

              <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__inner-headline loading__item">
                    <h1 className="inner-headline__title">{project.title}</h1>
                  </div>
                </div>
              </div>

            </div>

            {/* Content */}
            <div className="row g-0">
              <div className="col-12 col-xl-2" />

              <div className="col-12 col-xl-6 mxd-grid-item no-margin">

                <div className="inner-headline__paragraph loading__item">
                  <p>{project.description}</p>
                </div>

                {/* Data */}
                <div className="inner-headline__data">
                  <div className="mxd-data-list">
                    <div className="container-fluid p-0">
                      <div className="row g-0">

                        {/* Column 1 */}
                        <div className="col-12 col-md-6 col-xl-5 mxd-data-list__column loading__item">
                          <div className="mxd-data-list__item">
                            <p className="mxd-data-list__name">Client</p>
                            <p className="mxd-data-list__content">{project.Client}</p>
                          </div>

                          <div className="mxd-data-list__item">
                            <p className="mxd-data-list__name">Services</p>
                            <p className="mxd-data-list__content">{project.services}</p>
                          </div>
                        </div>

                        {/* Column 2 */}
                        <div className="col-12 col-md-6 col-xl-5 mxd-data-list__column loading__item">
                          <div className="mxd-data-list__item">
                            <p className="mxd-data-list__name">Industries</p>
                            <p className="mxd-data-list__content">{project.industries}</p>
                          </div>

                          <div className="mxd-data-list__item">
                            <p className="mxd-data-list__name">Date</p>
                            <p className="mxd-data-list__content">{project.date}</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Tags */}
              <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                <div className="inner-headline__tags loading__fade">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag tag-default tag-outline-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
