import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

const Categories = () => {
  const mainHeadRef = useRef(null);
  const subHeadRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    // Check if refs exist
    if (!mainHeadRef.current || !subHeadRef.current || !buttonRef.current)
      return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cat_content",
        start: "top 70%",
        end: "top 60%",
        scrub: 1,
        markers: true, // Remove this in production for cleaner UI
      },
    });

    timeline
      .from(mainHeadRef.current, {
        x: -100,
        opacity: 0, // Changed from 1 to 0 for fade-in effect
        duration: 1,
        ease: "power3.out",
      })
      .from(
        subHeadRef.current,
        {
          x: -120,
          opacity: 0, // Changed from 1 to 0 for fade-in effect
          duration: 0.8,
          ease: "power4.out",
        },
        "=0.5"
      )
      .from(
        buttonRef.current,
        {
          x: 160,
          opacity: 0, // Changed from 1 to 0 for fade-in effect
          duration: 0.5,
          ease: "back.out(1.2)",
        },
        "=0.7"
      );
  });

  return (
    <>
      <div className="categories_section">
        <div className="main-padding">
          <div className="custom-container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-9">
                <div className="cat_content">
                  <h3 ref={mainHeadRef} className="main_heading">
                    {" "}
                    Explore our wide variety of Categories{" "}
                  </h3>
                  <p ref={subHeadRef} className="main_sub_heading">
                    {" "}
                    Whether you're looking for a comedy to make you laugh, a
                    drama to make you think, or a documentary to learn something
                    new
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                {/* Custom navigation buttons */}
                <div ref={buttonRef} className="cats-custom-swiper">
                  {/* Custom Prev Button */}
                  <div className="swiper-button-prev cats-prev">
                    <i className="ri-arrow-left-line"></i>
                  </div>

                  {/* Custom Pagination */}
                  <div className="swiper-pagination cats-pagination"></div>

                  {/* Custom Next Button */}
                  <div className="swiper-button-next cats-next">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>

              <div className="cat_slider">
                <Swiper
                  slidesPerView={5}
                  slidesPerGroup={2}
                  // autoplay={{
                  //   delay: 2500,
                  //   disableOnInteraction: false,
                  // }}
                  loop={true}
                  spaceBetween={20}
                  navigation={{
                    prevEl: ".cats-prev",
                    nextEl: ".cats-next",
                  }}
                  pagination={{
                    el: ".cats-pagination",
                    clickable: true,
                  }}
                  breakpoints={{
                    320: {
                      // small mobiles
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                      spaceBetween: 10,
                    },
                    576: {
                      // mobiles
                      slidesPerView: 2,
                      slidesPerGroup: 1,
                      spaceBetween: 15,
                    },
                    768: {
                      // tablets
                      slidesPerView: 3,
                      slidesPerGroup: 2,
                      spaceBetween: 20,
                    },
                    992: {
                      // small laptops
                      slidesPerView: 4,
                      slidesPerGroup: 2,
                      spaceBetween: 20,
                    },
                    1200: {
                      // desktops
                      slidesPerView: 5,
                      slidesPerGroup: 2,
                      spaceBetween: 20,
                    },
                  }}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="cat_box">
                      <div className="cat_img">
                        <img
                          src={require("../Assets/imgs/cat_1.webp")}
                          alt=""
                        />
                      </div>
                      <div className="cat_nam_icon">
                        <h4 className="cat_name"> Action </h4>
                        <a href="#" className="cat_icon">
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cat_box">
                      <div className="cat_img">
                        <img
                          src={require("../Assets/imgs/cat_2.webp")}
                          alt=""
                        />
                      </div>
                      <div className="cat_nam_icon">
                        <h4 className="cat_name"> Adventure </h4>
                        <a href="#" className="cat_icon">
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cat_box">
                      <div className="cat_img">
                        <img
                          src={require("../Assets/imgs/cat_3.webp")}
                          alt=""
                        />
                      </div>
                      <div className="cat_nam_icon">
                        <h4 className="cat_name"> Comedy </h4>
                        <a href="#" className="cat_icon">
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cat_box">
                      <div className="cat_img">
                        <img
                          src={require("../Assets/imgs/cat_4.webp")}
                          alt=""
                        />
                      </div>
                      <div className="cat_nam_icon">
                        <h4 className="cat_name"> Drama </h4>
                        <a href="#" className="cat_icon">
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cat_box">
                      <div className="cat_img">
                        <img
                          src={require("../Assets/imgs/cat_5.webp")}
                          alt=""
                        />
                      </div>
                      <div className="cat_nam_icon">
                        <h4 className="cat_name"> Horror </h4>
                        <a href="#" className="cat_icon">
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cat_box">
                      <div className="cat_img">
                        <img
                          src={require("../Assets/imgs/cat_1.webp")}
                          alt=""
                        />
                      </div>
                      <div className="cat_nam_icon">
                        <h4 className="cat_name"> Action </h4>
                        <a href="#" className="cat_icon">
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cat_box">
                      <div className="cat_img">
                        <img
                          src={require("../Assets/imgs/cat_2.webp")}
                          alt=""
                        />
                      </div>
                      <div className="cat_nam_icon">
                        <h4 className="cat_name"> Action </h4>
                        <a href="#" className="cat_icon">
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cat_box">
                      <div className="cat_img">
                        <img
                          src={require("../Assets/imgs/cat_3.webp")}
                          alt=""
                        />
                      </div>
                      <div className="cat_nam_icon">
                        <h4 className="cat_name"> Action </h4>
                        <a href="#" className="cat_icon">
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sv_about">
        <div className="custom-container">
          <div className="row">
            <div className="col-12">
              <div className="about_content">
                <h3 className="main_heading">
                  {" "}
                  We Provide you streaming experience across various devices.{" "}
                </h3>
                <p className="main_sub_heading">
                  {" "}
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="sv_features">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="sv_feature_box">
                  <div className="sv_feature_icon">
                    {/* <i className="ri-smartphone-fill"></i> */}
                    <div className="sv_feature_img_icon">
                      <img src={require("../Assets/imgs/mob.webp")} alt="" />
                    </div>

                    <h4 className="sv_feature_name"> Smartphones </h4>
                  </div>
                  <p className="sv_feature_text">
                    {" "}
                    StreamVibe is optimized for both Android and iOS
                    smartphones. Download our app from the Google Play Store or
                    the Apple App Store{" "}
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="sv_feature_box">
                  <div className="sv_feature_icon">
                    {/* <i className="ri-tablet-line"></i> */}
                    <div className="sv_feature_img_icon">
                      <img src={require("../Assets/imgs/tab.webp")} alt="" />
                    </div>

                    <h4 className="sv_feature_name"> Tablet </h4>
                  </div>
                  <p className="sv_feature_text">
                    {" "}
                    StreamVibe is optimized for both Android and iOS
                    smartphones. Download our app from the Google Play Store or
                    the Apple App Store{" "}
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="sv_feature_box">
                  <div className="sv_feature_icon">
                    {/* <i className="ri-smartphone-fill"></i> */}
                    <div className="sv_feature_img_icon">
                      <img src={require("../Assets/imgs/s_tv.webp")} alt="" />
                    </div>

                    <h4 className="sv_feature_name"> Smart TV </h4>
                  </div>
                  <p className="sv_feature_text">
                    {" "}
                    StreamVibe is optimized for both Android and iOS
                    smartphones. Download our app from the Google Play Store or
                    the Apple App Store{" "}
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="sv_feature_box">
                  <div className="sv_feature_icon">
                    {/* <i className="ri-smartphone-fill"></i> */}
                    <div className="sv_feature_img_icon">
                      <img src={require("../Assets/imgs/laptop.webp")} alt="" />
                    </div>

                    <h4 className="sv_feature_name">Laptops </h4>
                  </div>
                  <p className="sv_feature_text">
                    {" "}
                    StreamVibe is optimized for both Android and iOS
                    smartphones. Download our app from the Google Play Store or
                    the Apple App Store{" "}
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="sv_feature_box">
                  <div className="sv_feature_icon">
                    {/* <i className="ri-smartphone-fill"></i> */}
                    <div className="sv_feature_img_icon">
                      <img src={require("../Assets/imgs/game.webp")} alt="" />
                    </div>

                    <h4 className="sv_feature_name"> Gaming Consoles </h4>
                  </div>
                  <p className="sv_feature_text">
                    {" "}
                    StreamVibe is optimized for both Android and iOS
                    smartphones. Download our app from the Google Play Store or
                    the Apple App Store{" "}
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="sv_feature_box">
                  <div className="sv_feature_icon">
                    {/* <i className="ri-smartphone-fill"></i> */}
                    <div className="sv_feature_img_icon">
                      <img src={require("../Assets/imgs/vr.webp")} alt="" />
                    </div>

                    <h4 className="sv_feature_name"> VR Headsets </h4>
                  </div>
                  <p className="sv_feature_text">
                    {" "}
                    StreamVibe is optimized for both Android and iOS
                    smartphones. Download our app from the Google Play Store or
                    the Apple App Store{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
