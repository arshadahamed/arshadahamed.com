import RevealText from "../animation/RevealText";

export default function Feedback({  project }: { project: any }) {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
                Client&apos;s
                <br />
                feedback
              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">
                  {project.clientfeedBack}
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">{project.clientName}</h5>
                  <p className="t-small anim-uni-in-up">
                    { project.position } at{" "}
                    <a className="" href="#">
                      {project.companyName}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
