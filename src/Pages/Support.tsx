import React from "react";
import "../Styles/support.css";
import Faq from "../components/Faq";

const Support = () => {
  return (
    <>
      <div className="support_page">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="wc_page">
                <h2 className="st_exp_head"> Welcome to our Support Page </h2>
                <p className="st_exp_text">
                  {" "}
                  This movie was recommended by a very dear friend. I went to
                  watch but had a houseful board so couldn’t watch it.
                </p>
                <div className="wc_img">
                  <img src={require("../Assets/imgs/wc_ban.webp")} alt="" />
                </div>
              </div>
            </div>
            {/* // ...existing code... */}
            <div className="col-12 col-lg-8">
              <div className="wc_form">
                <form>
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="Enter First Name"
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Enter Last Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "35px" }}>
                    <div className="col-12 col-lg-6">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your Email"
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label htmlFor="phone">Phone Number</label>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <select
                          style={{
                            width: "60px",
                            marginRight: "10px",
                            background: "#222",
                            color: "#fff",
                            border: "1px solid #333",
                            borderRadius: "6px",
                            height: "40px",
                          }}
                          defaultValue="IN"
                        >
                          <option value="IN">🇮🇳</option>
                          {/* Add more countries if needed */}
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="Enter Phone Number"
                          className="form-control"
                          style={{ flex: 1 }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "35px" }}>
                    <div className="col-12">
                      <div className="inp_lab">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          placeholder="Enter your Message"
                          className="form-control"
                          rows={4}
                          style={{ resize: "none" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row" style={{ marginTop: "35px" }}>
                    <div
                      className="col-12 col-lg-7"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <input
                        type="checkbox"
                        id="terms"
                        style={{ marginRight: "10px" }}
                      />
                      <label htmlFor="terms" style={{ marginBottom: 0 }}>
                        I agree with Terms of Use and Privacy Policy
                      </label>
                    </div>
                    <div className="col-12  col-lg-5" style={{ textAlign: "right" }}>
                      <button className="d_btn">Start Free Trial</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Faq />
    </>
  );
};

export default Support;
