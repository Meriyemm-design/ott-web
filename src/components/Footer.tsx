import React, { useRef } from "react";
import F_trial from "./F_trial";
import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { motion } from "motion/react";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.from(boxRef.current, {
      rotate: 360,
      delay: 1,
      duration: 0.8,
    });
  });

  return (
    <>
      <F_trial />
      <div
        className={
          isHome ? "footer_section" : "footer_section innerpage-container"
        }
      >
        <div className={isHome ? "custom-container" : "container"}>
          <div className="main-padding">
            <div className="row">
              <div className="col-6 col-lg-2">
                <div className="f_links">
                  <h4 className="f__link_heading">Home</h4>
                  <ul>
                    <li>
                      <a href="#">Categories</a>
                    </li>
                    <li>
                      <a href="#">Devices</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div className="f_links">
                  <h4 className="f__link_heading">Movies</h4>
                  <ul>
                    <li>
                      <a href="#">Gernes</a>
                    </li>
                    <li>
                      <a href="#">Trending</a>
                    </li>
                    <li>
                      <a href="#">New Release</a>
                    </li>
                    <li>
                      <a href="#">Popular</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div className="f_links">
                  <h4 className="f__link_heading">Show</h4>
                  <ul>
                    <li>
                      <a href="#">Genres</a>
                    </li>
                    <li>
                      <a href="#">Trending</a>
                    </li>
                    <li>
                      <a href="#">New Release</a>
                    </li>
                    <li>
                      <a href="#">Popular</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div className="f_links">
                  <h4 className="f__link_heading">Support</h4>
                  <ul>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div className="f_links">
                  <h4 className="f__link_heading">Subscription</h4>
                  <ul>
                    <li>
                      <a href="#">Plans</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div className="f_links">
                  <h4 className="f__link_heading">Connect with Us </h4>
                  <div className="f_social">
                    <motion.ul
                      initial={{ "--rotate": "0deg" }}
                      animate={{ "--rotate": "360deg" }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <li style={{ transform: 'rotate(var(--rotate))' }}>
                        <a ref={boxRef} href="#">
                          <i className="ri-facebook-circle-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-linkedin-box-fill"></i>
                        </a>
                      </li>
                    </motion.ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer_box">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                  <p className="f_cr">
                    © 2024 StreamVibe. All rights reserved.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="f_terms">
                    <ul>
                      <li>
                        <a href="#"> Terms of Use </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#"> Privacy Policy </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#"> Cookie Policy </a>
                      </li>
                    </ul>
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

export default Footer;
