export default function Locations() {
  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        {/* Block - Text Block with H2 Title, Paragraph and Contact Lists Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-block__name">
                  <h2 className="reveal-type anim-uni-in-up">
                    Welcome to our office
                  </h2>
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__paragraph">
                    <p className="t-large t-bright anim-uni-in-up">
                      Inspiring ideas, creative insights, and the latest in
                      design and tech. Fueling innovation for your digital
                      journey.
                    </p>
                    <div className="mxd-paragraph__lists">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 col-md-6 col-xl-5 mxd-paragraph__lists-item">
                            <div className="mxd-paragraph__lists-title">
                              <p className="t-large t-bright t-caption anim-uni-in-up">
                                Our Location
                              </p>
                            </div>
                            <ul>
                              <li className="anim-uni-in-up">
                                <a
                                  className="anim-uni-in-up"
                                  href="https://goo.gl/maps/nWXKpGaDPuyH6gxRA"
                                  target="_blank"
                                >
                                  69,Kurunegala Road,
                                  <br />
                                  Galgamuwa. Sri Lanka.
                                  <br />
                                  60700
                                </a>
                              </li>
                            </ul>
                            <ul>
                              <li className="anim-uni-in-up">
                                <a href="tel:+94711890590">+94 71 189 0590</a>
                              </li>
                              <li className="anim-uni-in-up">
                                <a href="mailto:arshadpayoneer@gmail.com?subject=Message%20from%20your%20site">
                                  arshadpayoneer@gmail.com
                                </a>
                              </li>
                            </ul>
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Text Block with H2 Title, Paragraph and Contact Lists End */}
      </div>
    </div>
  );
}
