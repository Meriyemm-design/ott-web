import React from "react";
import { useState } from "react";

import "../Styles/subscription.css";
import Pricing from "../components/Pricing";

const Subscription = () => {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <>
      <Pricing />

      <div className="plans_section main-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="plans_text">
                <h1 className="st_exp_head">
                  Compare our plans and find the right one for you
                </h1>
                <p className="st_exp_text">
                  StreamVibe offers three different plans to fit your needs:
                  Basic, Standard, and Premium. Compare the features of each
                  plan and choose the one that's right for you.
                </p>
              </div>
            </div>

            {/* Desktop View */}
            <div className="col-12">
              <div className="table_form">
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Features</th>
                      <th>Basic</th>
                      <th>
                        Standard <span className="popular">Popular</span>
                      </th>
                      <th>Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Price</td>
                      <td>$9.99/Month</td>
                      <td>$12.99/Month</td>
                      <td>$14.99/Month</td>
                    </tr>
                    <tr>
                      <td>Content</td>
                      <td>
                        Access to a wide selection of movies and shows,
                        including some new releases.
                      </td>
                      <td>
                        Access to a wider selection of movies and shows,
                        including most new releases and exclusive content
                      </td>
                      <td>
                        Access to a widest selection of movies and shows,
                        including all new releases and Offline Viewing
                      </td>
                    </tr>
                    <tr>
                      <td>Devices</td>
                      <td>Watch on one device simultaneously</td>
                      <td>Watch on Two device simultaneously</td>
                      <td>Watch on Four device simultaneously</td>
                    </tr>
                    <tr>
                      <td>Free Trial</td>
                      <td>7 Days</td>
                      <td>7 Days</td>
                      <td>7 Days</td>
                    </tr>
                    <tr>
                      <td>Cancel Anytime</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>HDR</td>
                      <td>No</td>
                      <td>Yes</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Dolby Atmos</td>
                      <td>No</td>
                      <td>Yes</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Ad - Free</td>
                      <td>No</td>
                      <td>Yes</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Offline Viewing</td>
                      <td>No</td>
                      <td>Yes, for select titles.</td>
                      <td>Yes, for all titles.</td>
                    </tr>
                    <tr>
                      <td>Family Sharing</td>
                      <td>No</td>
                      <td>Yes, up to 5 family members.</td>
                      <td>Yes, up to 6 family members.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Tabs View */}
            <div className="tabs_view">
              <div className="pricing_tab_btns">
                <button
                  className={`tab_btn ${activeTab === "basic" ? "active" : ""}`}
                  onClick={() => setActiveTab("basic")}
                >
                  Basic
                </button>
                <button
                  className={`tab_btn ${
                    activeTab === "standard" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("standard")}
                >
                  Standard <span className="popular">Popular</span>
                </button>
                <button
                  className={`tab_btn ${
                    activeTab === "premium" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("premium")}
                >
                  Premium
                </button>
              </div>

              <table className="pricing-table">
                <thead>
                  <tr>
                    {/* <th>Features</th> */}
                    <th>
                      {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {activeTab === "basic" && (
                    <>
                      <tr>
                        <div className="p_plans">
                          <div className="pp_info">
                            <h6>Price </h6>
                            <h5>$9.99/Month</h5>
                          </div>
                          <div className="pp_info">
                            <h6>Free Trial </h6>
                            <h5>7 days</h5>
                          </div>
                        </div>
                      </tr>
                      <tr>
                        <div className="pp_info">
                          <h6> Content </h6>
                          <h5>
                            {" "}
                            Access to a wider selection of movies and shows,
                            including most new releases and exclusive content
                          </h5>
                        </div>
                      </tr>
                      <tr>
                        <div className="pp_info">
                          <h6> Devices </h6>
                          <h5> Watch one device simultaneously </h5>
                        </div>
                      </tr>
                      <tr>
                        <div className="p_plans">
                          <div className="pp_info">
                            <h6>Cancel Anytime </h6>
                            <h5>Yes</h5>
                          </div>
                          <div className="pp_info">
                            <h6>HDR </h6>
                            <h5> No </h5>
                          </div>
                        </div>
                      </tr>
                      <tr>
                        <div className="pp_info">
                          <h6> Dolby Atmos </h6>
                          <h5> No </h5>
                        </div>
                      </tr>
                      <tr>
                        <div className="pp_info">
                          <h6> Ad-Free </h6>
                          <h5> No </h5>
                        </div>
                      </tr>
                      <tr>
                        <div className="p_plans">
                          <div className="pp_info">
                            <h6> Offline Viewing </h6>
                            <h5> No </h5>
                          </div>
                          <div className="pp_info">
                            <h6> Family Sharing </h6>
                            <h5> No </h5>
                          </div>
                        </div>
                      </tr>
                    </>
                  )}

                  {activeTab === "standard" && (
                    <>
                      <tr>
                        <div className="p_plans">
                          <div className="pp_info">
                            <h6>Price </h6>
                            <h5>$12.99/Month</h5>
                          </div>
                          <div className="pp_info">
                            <h6>Free Trial </h6>
                            <h5>7 days</h5>
                          </div>
                        </div>
                      </tr>
                      <tr>
                        <div className="pp_info">
                          <h6> Content </h6>
                          <h5>
                            {" "}
                            Access to a wider selection of movies and shows,
                            including most new releases and exclusive content
                          </h5>
                        </div>
                      </tr>
                      <tr>
                        <div className="pp_info">
                          <h6> Devices </h6>
                          <h5> Watch on Two devices simultaneously </h5>
                        </div>
                      </tr>
                      <tr>
                        <div className="p_plans">
                          <div className="pp_info">
                            <h6>Cancel Anytime </h6>
                            <h5>Yes</h5>
                          </div>
                          <div className="pp_info">
                            <h6>HDR </h6>
                            <h5> Yes</h5>
                          </div>
                        </div>
                      </tr>
                      <tr>
                        <div className="pp_info">
                          <h6> Dolby Atmos </h6>
                          <h5> Yes </h5>
                        </div>
                      </tr>
                      <tr>
                        <div className="pp_info">
                          <h6> Ad-Free </h6>
                          <h5> Yes </h5>
                        </div>
                      </tr>
                      <tr>
                        <div className="p_plans">
                          <div className="pp_info">
                            <h6> Offline Viewing </h6>
                            <h5> For select titles. </h5>
                          </div>
                          <div className="pp_info">
                            <h6> Family Sharing </h6>
                            <h5> Up to 5 family members. </h5>
                          </div>
                        </div>
                      </tr>
                    </>
                  )}

                  {activeTab === "premium" && (
                    <>
                      <tr>
                        <div className="p_plans">
                          <div className="pp_info">
                            <h6>Price </h6>
                            <h5>$14.99/Month</h5>
                          </div>
                          <div className="pp_info">
                            <h6>Free Trial </h6>
                            <h5>7 days</h5>
                          </div>
                        </div>
                      </tr>
                      <tr>
                        <div className="pp_info">
                          <h6> Content </h6>
                          <h5>
                            {" "}
                            Access to a wider selection of movies and shows,
                            including most new releases and exclusive content
                          </h5>
                        </div>
                      </tr>
                      <tr>
                        <div className="pp_info">
                          <h6> Devices </h6>
                          <h5> Watch on Four devices simultaneously </h5>
                        </div>
                      </tr>
                      <tr>
                        <div className="p_plans">
                          <div className="pp_info">
                            <h6>Cancel Anytime </h6>
                            <h5>Yes</h5>
                          </div>
                          <div className="pp_info">
                            <h6>HDR </h6>
                            <h5> Yes</h5>
                          </div>
                        </div>
                      </tr>
                      <tr>
                        <div className="pp_info">
                          <h6> Dolby Atmos </h6>
                          <h5> Yes </h5>
                        </div>
                      </tr>
                      <tr>
                        <div className="pp_info">
                          <h6> Ad-Free </h6>
                          <h5> Yes </h5>
                        </div>
                      </tr>
                      <tr>
                        <div className="p_plans">
                          <div className="pp_info">
                            <h6> Offline Viewing </h6>
                            <h5> For all titles. </h5>
                          </div>
                          <div className="pp_info">
                            <h6> Family Sharing </h6>
                            <h5> Up to 6 family members. </h5>
                          </div>
                        </div>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;

{
  /* <table className="pricing-table">
  <thead>
    <tr>
      <th>Features</th>
      <th className="table-head">Basic</th>
      <th className="table-head">
        Standard <span className="popular">Popular</span>
      </th>
      <th className="table-head">Premium</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Price</td>
      <td>$9.99/Month</td>
      <td>$12.99/Month</td>
      <td>$14.99/Month</td>
    </tr>
    <tr>
      <td>Content</td>
      <td>
        Access to a wide selection of movies and shows, including
        some new releases.
      </td>
      <td>
        Access to a wider selection of movies and shows, including
        most new releases and exclusive content
      </td>
      <td>
        Access to a widest selection of movies and shows,
        including all new releases and Offline Viewing
      </td>
    </tr>
    <tr>
      <td>Devices</td>
      <td>Watch on one device simultaneously</td>
      <td>Watch on Two device simultaneously</td>
      <td>Watch on Four device simultaneously</td>
    </tr>
    <tr>
      <td>Free Trail</td>
      <td>7 Days</td>
      <td>7 Days</td>
      <td>7 Days</td>
    </tr>
    <tr>
      <td>Cancel Anytime</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>HDR</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Dolby Atmos</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Ad - Free</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Offline Viewing</td>
      <td>No</td>
      <td>Yes, for select titles.</td>
      <td>Yes, for all titles.</td>
    </tr>
    <tr>
      <td>Family Sharing</td>
      <td>No</td>
      <td>Yes, up to 5 family members.</td>
      <td>Yes, up to 6 family members.</td>
    </tr>
  </tbody>
</table> */
}
