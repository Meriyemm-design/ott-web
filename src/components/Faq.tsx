import React from "react";
import { useLocation } from "react-router-dom";

const Faq = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <div
        className={isHome ? "faq_section" : "faq_section innerpage-container"}
      >
        <div
          className={
            isHome ? "custom-container" : "container innerpage-container"
          }
        >
          <div className="main-padding">
            <div className="row align-items-center">
              <div className="col-12 col-lg-10">
                <div className="faq_main">
                  <h3 className="main_heading"> Frequently Asked Questions </h3>

                  <p className="main_sub_heading">
                    {" "}
                    Got questions? We've got answers! Check out our FAQ section
                    to find answers to the most common questions about
                    StreamVibe.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div className="faq_btn">
                  <button className="d_btn">Ask a Question </button>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="accordion" id="accordionExample">
                  {/* Accordion Item 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <div className="faq_numb">01</div>
                        <span>What is StreamVibe?</span>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        StreamVibe is a streaming service that allows you to
                        watch movies and shows on demand.
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <div className="faq_numb">02</div>
                        <span>How much does StreamVibe cost?</span>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        StreamVibe offers different subscription plans depending
                        on your needs.
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <div className="faq_numb">03</div>
                        <span>What content is available on StreamVibe?</span>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        StreamVibe includes movies, TV shows, documentaries, and
                        exclusive originals.
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <div className="faq_numb">04</div>
                        <span>How can I watch StreamVibe?</span>
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        You can watch StreamVibe on web, mobile, smart TVs, and
                        streaming devices.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="accordion" id="accordionRight">
                  {/* Accordion 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOneRight">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOneRight"
                        aria-expanded="true"
                        aria-controls="collapseOneRight"
                      >
                        <div className="faq_numb">05</div>
                        What is the purpose of this OTT platform?
                      </button>
                    </h2>
                    <div
                      id="collapseOneRight"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOneRight"
                      data-bs-parent="#accordionRight"
                    >
                      <div className="accordion-body">
                        This OTT platform provides a wide range of movies,
                        shows, documentaries, and exclusive web series for
                        streaming online.
                      </div>
                    </div>
                  </div>

                  {/* Accordion 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwoRight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwoRight"
                        aria-expanded="false"
                        aria-controls="collapseTwoRight"
                      >
                        <div className="faq_numb">06</div>
                        How can I subscribe to this platform?
                      </button>
                    </h2>
                    <div
                      id="collapseTwoRight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwoRight"
                      data-bs-parent="#accordionRight"
                    >
                      <div className="accordion-body">
                        You can subscribe by signing up on our website or mobile
                        app, then choosing from our available monthly or annual
                        subscription plans.
                      </div>
                    </div>
                  </div>

                  {/* Accordion 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThreeRight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThreeRight"
                        aria-expanded="false"
                        aria-controls="collapseThreeRight"
                      >
                        <div className="faq_numb">07</div>
                        Can I download shows and movies for offline viewing?
                      </button>
                    </h2>
                    <div
                      id="collapseThreeRight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThreeRight"
                      data-bs-parent="#accordionRight"
                    >
                      <div className="accordion-body">
                        Yes! Most of our content can be downloaded and enjoyed
                        offline on supported devices using the mobile app.
                      </div>
                    </div>
                  </div>

                  {/* Accordion 4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFourRight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFourRight"
                        aria-expanded="false"
                        aria-controls="collapseFourRight"
                      >
                        <div className="faq_numb">08</div>
                        On how many devices can I use my subscription?
                      </button>
                    </h2>
                    <div
                      id="collapseFourRight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFourRight"
                      data-bs-parent="#accordionRight"
                    >
                      <div className="accordion-body">
                        Depending on your subscription plan, you can stream on
                        1, 2, or up to 4 devices at the same time.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
