import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";
import Link from "next/link";

export default function About() {
  return (
    <div className="mxd-section padding-pre-grid">
      <div className="mxd-container grid-container">
        {/* Block - About Description with H2 Title and Paragraph Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-block__name">
                  <RevealText as="h2" className="reveal-type anim-uni-in-up">
                    My Approach & Philosophy
                  </RevealText>
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__paragraph">
                    <p className="t-large t-bright anim-uni-in-up">
                      I build digital experiences with intention—where design
                      meets engineering and every detail is refined with
                      purpose. Every interface, interaction, and line of code is
                      crafted to deliver clarity, performance, and lasting
                      value.
                    </p>
                    <div className="mxd-paragraph__lists">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-6 col-xl-5">
                            <ul>
                              <li>
                                <p className="anim-uni-in-up">Innovation</p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up">Excellence</p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up">Creativity</p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up">Experience</p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up">
                                  Technical Mastery
                                </p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up">Passion</p>
                              </li>
                            </ul>
                          </div>
                          <div className="col-6 col-xl-5">
                            <ul>
                              <li>
                                <p className="anim-uni-in-up">Web Design</p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up">UI/UX Design</p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up">
                                  App Interface Design
                                </p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up">
                                  Full-Stack Development
                                </p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up">Brand Identity</p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up">
                                  Motion & Interactions
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mxd-paragraph__controls anim-uni-in-up">
                      <div className="mxd-btngroup">
                        <AnimatedButton
                          text="Download CV"
                          as={"a"}
                          className="btn btn-anim btn-default btn-accent slide-down"
                          href="#"
                        >
                          <i className="ph-bold ph-arrow-down" />
                        </AnimatedButton>
                        <AnimatedButton
                          text="Let's Meet Closer"
                          className="btn btn-anim btn-default btn-outline slide-right-up"
                          href={`/about-me`}
                        >
                          <i className="ph-bold ph-arrow-up-right" />
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - About Description with H2 Title and Paragraph End */}
      </div>
    </div>
  );
}
