import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";

const Pricing = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [activeTab, setActiveTab] = useState("monthly");
  return (
    <>
      <div
        className={
          isHome ? "pricing_section" : "pricing_section innerpage-container"
        }
      >
        <div
          className={
            isHome ? "custom-container" : "container innerpage-container"
          }
        >
          <div className="main-padding">
            <div className="row align-items-center">
              <div className="col-12 col-lg-10">
                <div className="pricing_main">
                  <h2 className="main_heading">
                    Choose the plan that's right for you
                  </h2>
                  <p className="main_sub_heading">
                    Join StreamVibe and select from our flexible subscription
                    options tailored to suit your viewing preferences. Get ready
                    for non-stop entertainment!
                  </p>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                {/* Tabs */}
                <div className="col-6 col-lg-2">
                  <div
                    className="pricing_tab_btns"
                    role="tablist"
                    aria-label="Pricing tabs"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => console.log("hover started!")}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === "monthly"}
                      className={`btn_monthly ${
                        activeTab === "monthly" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("monthly")}
                    >
                      Monthly
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => console.log("hover started!")}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === "yearly"}
                      className={`btn_yearly ${
                        activeTab === "yearly" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("yearly")}
                    >
                      Yearly
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === "monthly" && (
                <>
                  <div className="col-12 col-lg-4">
                    {/* Card 1 */}
                    <div className="price_card">
                      <h5 className="pc_title"> Basic Plan </h5>
                      <p className="pc_para_text">
                        {" "}
                        Enjoy an extensive library of movies and shows,
                        featuring a range of content, including recently
                        released titles.
                      </p>
                      <h2 className="pc_tag">
                        $9.99 <span>/month</span>
                      </h2>
                      <div className="pc_plan_btns">
                        <button className="d_btn pc_free">
                          {" "}
                          Start Free Trial
                        </button>
                        <button className="d_btn pc_chose"> Choose Plan</button>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="col-12 col-lg-4">
                    <div className="price_card">
                      <h5 className="pc_title"> Standard Plan </h5>
                      <p className="pc_para_text">
                        {" "}
                        Enjoy an extensive library of movies and shows,
                        featuring a range of content, including recently
                        released titles.
                      </p>
                      <h2 className="pc_tag">
                        $12.99 <span>/month</span>
                      </h2>
                      <div className="pc_plan_btns">
                        <button className="d_btn pc_free">
                          {" "}
                          Start Free Trial
                        </button>
                        <button className="d_btn pc_chose"> Choose Plan</button>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="col-12 col-lg-4">
                    <div className="price_card">
                      <h5 className="pc_title"> Premium Plan </h5>
                      <p className="pc_para_text">
                        {" "}
                        Enjoy an extensive library of movies and shows,
                        featuring a range of content, including recently
                        released titles.
                      </p>
                      <h2 className="pc_tag">
                        $15.99 <span>/month</span>
                      </h2>
                      <div className="pc_plan_btns">
                        <button className="d_btn pc_free">
                          {" "}
                          Start Free Trial
                        </button>
                        <button className="d_btn pc_chose"> Choose Plan</button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "yearly" && (
                <>
                  <div className="col-12 col-lg-4">
                    <div className="price_card">
                      <h5 className="pc_title">Basic Plan</h5>
                      <p className="pc_para_text">
                        Enjoy an extensive library of movies and shows,
                        featuring a range of content, including recently
                        released titles. Same features, yearly billing.
                      </p>
                      <h2 className="pc_tag">
                        $99.99 <span>/year</span>
                      </h2>
                      <div className="pc_plan_btns">
                        <button className="d_btn pc_free">
                          Start Free Trial
                        </button>
                        <button className="d_btn pc_chose">Choose Plan</button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-4">
                    <div className="price_card">
                      <h5 className="pc_title">Standard Plan</h5>
                      <p className="pc_para_text">
                        Enjoy an extensive library of movies and shows,
                        featuring a range of content, including recently
                        released titles.
                      </p>
                      <h2 className="pc_tag">
                        $129.99 <span>/year</span>
                      </h2>
                      <div className="pc_plan_btns">
                        <button className="d_btn pc_free">
                          Start Free Trial
                        </button>
                        <button className="d_btn pc_chose">Choose Plan</button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-4">
                    <div className="price_card">
                      <h5 className="pc_title">Premium Plan</h5>
                      <p className="pc_para_text">
                        Enjoy an extensive library of movies and shows,
                        featuring a range of content, including recently
                        released titles. {""}
                        All features, yearly discount.
                      </p>
                      <h2 className="pc_tag">
                        $159.99 <span>/year</span>
                      </h2>
                      <div className="pc_plan_btns">
                        <button className="d_btn pc_free">
                          Start Free Trial
                        </button>
                        <button className="d_btn pc_chose">Choose Plan</button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
