import React from "react";
import { useLocation } from "react-router-dom";

const F_trial = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div
        className={
          isHome ? "custom-container" : "container innerpage-container"
        }
      >
        <div
          className={
            isHome ? "trial__section" : "trial__section innerpage-container"
          }
        >
          <div className="main-padding">
            <div className="row align-items-center">
              <div className="col-12 col-lg-10">
                <div className="trial__box">
                  <h2 className="main_heading">Start your free trial Today!</h2>
                  <p className="main_sub_heading">
                    This is a clear and concise call to action that encourages
                    users to sign up for a free trial of StreamVibe.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div className="trial__btn">
                  <button className="d_btn">Start Free Trial</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default F_trial;
