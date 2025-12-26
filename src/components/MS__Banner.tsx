import React, { useRef, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MS__Banner = () => {
  return (
    <>
      <div className="movie_page">
        <div className="sv__main_banner">
          <div className="container">
            <div className="mb__img">
              <img src={require("../Assets/imgs/banner.webp")} alt="" />
            </div>
            <div className="mb__content">
              <h2 className="main_heading"> Kantara </h2>
              <p className="main_sub_heading">
                {" "}
                A fiery young man clashes with an unflinching forest officer in
                a south Indian village where spirituality, fate and folklore
                rule the lands.{" "}
              </p>

              <div className="mb_follow_ups">
                <div className="mb_btn">
                  <button className="d_btn">
                    <i className="ri-play-large-fill"></i>
                    Play Now
                  </button>
                </div>
                <div className="mb_like_btns">
                  <a href="#">
                    <i className="ri-add-line"></i>
                  </a>
                  <a href="#">
                    <i className="ri-thumb-up-line"></i>
                  </a>
                  <a href="#">
                    <i className="ri-volume-up-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mpage_content main-padding">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="seasion_sec grey_secbg text-white">
                  <h4 className="ss_head"> Seasons and Episodes</h4>

                  <div className="ss_accordions">
                    <Accordion defaultActiveKey="1">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="ss_numb">Season 01</div>
                          <span>9 Episodes</span>
                          <span className="acc_icon icon-up">
                            <i className="ri-arrow-down-line"></i>
                          </span>
                          <span className="acc_icon icon-down">
                            <i className="ri-arrow-up-line"></i>
                          </span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="e__content_scrollable">
                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="tab_contents">
                                  <div className="col-3 col-lg-1">
                                    <h1 className="epi_num"> 01 </h1>
                                  </div>
                                  <div className="col-9 col-lg-3">
                                    <div className="epi_img">
                                      <img
                                        src={require("../Assets/imgs/ep1.webp")}
                                      />
                                      <img
                                        src={require("../Assets/imgs/play.webp")}
                                        alt=""
                                        className="d_play"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-lg-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4>
                                        {" "}
                                        Chapter One : The Vanishing of Will
                                        Byers{" "}
                                      </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="col-3 col-lg-1">
                                  <h1 className="epi_num"> 02 </h1>
                                </div>
                                <div className="col-9 col-lg-3">
                                  <div className="epi_img">
                                    <img
                                      src={require("../Assets/imgs/ep2.webp")}
                                      alt=""
                                    />
                                    <img
                                      src={require("../Assets/imgs/play.webp")}
                                      alt=""
                                      className="d_play"
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4>
                                        {" "}
                                        Chapter Two: The Weirdo on Maple Street{" "}
                                      </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="col-3 col-lg-1">
                                  <h1 className="epi_num"> 03 </h1>
                                </div>
                                <div className="col-9 col-lg-3">
                                  <div className="epi_img">
                                    <img
                                      src={require("../Assets/imgs/ep3.webp")}
                                      alt=""
                                    />
                                    <img
                                      src={require("../Assets/imgs/play.webp")}
                                      alt=""
                                      className="d_play"
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4> Chapter Three: Holly, Jolly </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="col-3 col-lg-1">
                                  <h1 className="epi_num"> 04 </h1>
                                </div>
                                <div className="col-9 col-lg-3">
                                  <div className="epi_img">
                                    <img
                                      src={require("../Assets/imgs/ep4.webp")}
                                      alt=""
                                    />
                                    <img
                                      src={require("../Assets/imgs/play.webp")}
                                      alt=""
                                      className="d_play"
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4> Chapter Four: The Body </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="col-3 col-lg-1">
                                  <h1 className="epi_num"> 05 </h1>
                                </div>
                                <div className="col-9 col-lg-3">
                                  <div className="epi_img">
                                    <img
                                      src={require("../Assets/imgs/ep5.webp")}
                                      alt=""
                                    />
                                    <img
                                      src={require("../Assets/imgs/play.webp")}
                                      alt=""
                                      className="d_play"
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4>
                                        {" "}
                                        Chapter Five: The Flea and the Acrobat{" "}
                                      </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <div className="ss_numb">Season 02</div>
                          <span>5 Episodes</span>
                          <span className="acc_icon icon-up">
                            <i className="ri-arrow-down-line"></i>
                          </span>
                          <span className="acc_icon icon-down">
                            <i className="ri-arrow-up-line"></i>
                          </span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="e__content_scrollable">
                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="col-3 col-lg-1">
                                  <h1 className="epi_num"> 01 </h1>
                                </div>
                                <div className="col-9 col-lg-3">
                                  <div className="epi_img">
                                    <img
                                      src={require("../Assets/imgs/ep1.webp")}
                                    />
                                    <img
                                      src={require("../Assets/imgs/play.webp")}
                                      alt=""
                                      className="d_play"
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4>
                                        {" "}
                                        Chapter One : The Vanishing of Will
                                        Byers{" "}
                                      </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="col-3 col-lg-1">
                                  <h1 className="epi_num"> 02 </h1>
                                </div>
                                <div className="col-9 col-lg-3">
                                  <div className="epi_img">
                                    <img
                                      src={require("../Assets/imgs/ep2.webp")}
                                      alt=""
                                    />
                                    <img
                                      src={require("../Assets/imgs/play.webp")}
                                      alt=""
                                      className="d_play"
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4>
                                        {" "}
                                        Chapter Two: The Weirdo on Maple Street{" "}
                                      </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="col-3 col-lg-1">
                                  <h1 className="epi_num"> 03 </h1>
                                </div>
                                <div className="col-9 col-lg-3">
                                  <div className="epi_img">
                                    <img
                                      src={require("../Assets/imgs/ep3.webp")}
                                      alt=""
                                    />
                                    <img
                                      src={require("../Assets/imgs/play.webp")}
                                      alt=""
                                      className="d_play"
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4> Chapter Three: Holly, Jolly </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="col-3 col-lg-1">
                                  <h1 className="epi_num"> 04 </h1>
                                </div>
                                <div className="col-9 col-lg-3">
                                  <div className="epi_img">
                                    <img
                                      src={require("../Assets/imgs/ep4.webp")}
                                      alt=""
                                    />
                                    <img
                                      src={require("../Assets/imgs/play.webp")}
                                      alt=""
                                      className="d_play"
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4> Chapter Four: The Body </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="col-3 col-lg-1">
                                  <h1 className="epi_num"> 05 </h1>
                                </div>
                                <div className="col-9 col-lg-3">
                                  <div className="epi_img">
                                    <img
                                      src={require("../Assets/imgs/ep5.webp")}
                                      alt=""
                                    />
                                    <img
                                      src={require("../Assets/imgs/play.webp")}
                                      alt=""
                                      className="d_play"
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4>
                                        {" "}
                                        Chapter Five: The Flea and the Acrobat{" "}
                                      </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <div className="ss_numb">Season 03</div>
                          <span>7 Episodes</span>
                          <span className="acc_icon icon-up">
                            <i className="ri-arrow-down-line"></i>
                          </span>
                          <span className="acc_icon icon-down">
                            <i className="ri-arrow-up-line"></i>
                          </span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="e__content_scrollable">
                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="col-3 col-lg-1">
                                  <h1 className="epi_num"> 01 </h1>
                                </div>
                                <div className="col-9 col-lg-3">
                                  <div className="epi_img">
                                    <img
                                      src={require("../Assets/imgs/ep1.webp")}
                                    />
                                    <img
                                      src={require("../Assets/imgs/play.webp")}
                                      alt=""
                                      className="d_play"
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4>
                                        {" "}
                                        Chapter One : The Vanishing of Will
                                        Byers{" "}
                                      </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="col-3 col-lg-1">
                                  <h1 className="epi_num"> 02 </h1>
                                </div>
                                <div className="col-9 col-lg-3">
                                  <div className="epi_img">
                                    <img
                                      src={require("../Assets/imgs/ep2.webp")}
                                      alt=""
                                    />
                                    <img
                                      src={require("../Assets/imgs/play.webp")}
                                      alt=""
                                      className="d_play"
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4>
                                        {" "}
                                        Chapter Two: The Weirdo on Maple Street{" "}
                                      </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="col-3 col-lg-1">
                                  <h1 className="epi_num"> 03 </h1>
                                </div>
                                <div className="col-9 col-lg-3">
                                  <div className="epi_img">
                                    <img
                                      src={require("../Assets/imgs/ep3.webp")}
                                      alt=""
                                    />
                                    <img
                                      src={require("../Assets/imgs/play.webp")}
                                      alt=""
                                      className="d_play"
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4> Chapter Three: Holly, Jolly </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="col-3 col-lg-1">
                                  <h1 className="epi_num"> 04 </h1>
                                </div>
                                <div className="col-9 col-lg-3">
                                  <div className="epi_img">
                                    <img
                                      src={require("../Assets/imgs/ep4.webp")}
                                      alt=""
                                    />
                                    <img
                                      src={require("../Assets/imgs/play.webp")}
                                      alt=""
                                      className="d_play"
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4> Chapter Four: The Body </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="episodes_content">
                              <div className="row align-items-center">
                                <div className="col-3 col-lg-1">
                                  <h1 className="epi_num"> 05 </h1>
                                </div>
                                <div className="col-9 col-lg-3">
                                  <div className="epi_img">
                                    <img
                                      src={require("../Assets/imgs/ep5.webp")}
                                      alt=""
                                    />
                                    <img
                                      src={require("../Assets/imgs/play.webp")}
                                      alt=""
                                      className="d_play"
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="epi_details">
                                    <div className="details">
                                      <h4>
                                        {" "}
                                        Chapter Five: The Flea and the Acrobat{" "}
                                      </h4>
                                      <div className="time">
                                        <i className="ri-time-line"></i>
                                        <h5> 52 min</h5>
                                      </div>
                                    </div>
                                    <p className="epi__desc">
                                      {" "}
                                      Haru accompanies Karen to investigate a
                                      whistleblower's apartment. Meanwhile,
                                      several other Tawaras are tempted to step
                                      out of their ordinary .{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>

                <div className="ms_desc grey_secbg">
                  <h5 className="desc_heading">Description</h5>
                  <p className="desc_sub_heading">
                    A fiery young man clashes with an unflinching forest officer
                    in a south Indian village where spirituality, fate and
                    folklore rule the lands.
                  </p>
                </div>

                <div className="ms_epis grey_secbg">
                  <div className="row align-items-center">
                    <div className="col-6 col-lg-9">
                      <h5 className="desc_heading">Cast</h5>
                    </div>

                    <div className="col-6 col-lg-3">
                      {/* Custom navigation buttons */}
                      <div className="cast-custom-swiper">
                        {/* Custom Prev Button */}
                        <div className="swiper-button-prev cast-prev">
                          <i className="ri-arrow-left-line"></i>
                        </div>

                        {/* Custom Pagination */}
                        {/* <div className="swiper-pagination cats-pagination"></div> */}

                        {/* Custom Next Button */}
                        <div className="swiper-button-next  cast-next">
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="ms_epis_slider">
                        <Swiper
                          slidesPerView={8}
                          spaceBetween={10}
                          loop={true}
                          autoplay={{
                            delay: 2500,
                          }}
                          navigation={{
                            prevEl: ".cast-prev",
                            nextEl: ".cast-next",
                          }}
                          breakpoints={{
                            320: {
                              // small mobiles
                              slidesPerView: 4,
                              slidesPerGroup: 1,
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
                              slidesPerView: 8,
                              slidesPerGroup: 2,
                              spaceBetween: 20,
                            },
                          }}
                          modules={[Navigation, Autoplay]}
                          speed={1000}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <div className="ms_epis_slider_items">
                              <img
                                src={require("../Assets/imgs/s1.webp")}
                                alt=""
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="ms_epis_slider_items">
                              <img
                                src={require("../Assets/imgs/s2.webp")}
                                alt=""
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="ms_epis_slider_items">
                              <img
                                src={require("../Assets/imgs/s3.webp")}
                                alt=""
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="ms_epis_slider_items">
                              <img
                                src={require("../Assets/imgs/s4.webp")}
                                alt=""
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="ms_epis_slider_items">
                              <img
                                src={require("../Assets/imgs/s5.webp")}
                                alt=""
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="ms_epis_slider_items">
                              <img
                                src={require("../Assets/imgs/s6.webp")}
                                alt=""
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="ms_epis_slider_items">
                              <img
                                src={require("../Assets/imgs/s7.webp")}
                                alt=""
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="ms_epis_slider_items">
                              <img
                                src={require("../Assets/imgs/s8.webp")}
                                alt=""
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="ms_epis_slider_items">
                              <img
                                src={require("../Assets/imgs/s5.webp")}
                                alt=""
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="ms_epis_slider_items">
                              <img
                                src={require("../Assets/imgs/s6.webp")}
                                alt=""
                              />
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ms_review grey_secbg">
                  <div className="row align-items-center">
                    <div className="col-5 col-lg-9">
                      <h5 className="desc_heading">Reviews</h5>
                    </div>

                    <div className="col-7 col-lg-3">
                      <div className="review_btn">
                        <button className="rv_btn">
                          <i className="ri-add-fill"></i>
                          Add Your Review
                        </button>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="review_slider">
                        <Swiper
                          slidesPerView={2}
                          spaceBetween={10}
                          loop={true}
                          autoplay={{
                            delay: 3000,
                          }}
                          navigation={{
                            prevEl: ".cast-prev",
                            nextEl: ".cast-next",
                          }}
                          pagination={{
                            el: ".cats-pagination",
                            clickable: true,
                          }}
                          breakpoints={{
                            320: {
                              // small mobiles
                              slidesPerView: 1,
                              slidesPerGroup: 1,
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
                              slidesPerView: 2,
                              slidesPerGroup: 2,
                              spaceBetween: 20,
                            },
                            1200: {
                              // desktops
                              slidesPerView: 2,
                              slidesPerGroup: 1,
                              spaceBetween: 20,
                            },
                          }}
                          modules={[Navigation, Pagination, Autoplay]}
                          speed={3000}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <div className="review_slider_items">
                              <div className="rat_rew">
                                <div className="namings">
                                  <h5 className="desc_heading"> Ankit Roy </h5>
                                  <p> From India </p>
                                </div>
                                <div className="ep__ratngs">
                                  <div className="ms_epi__rtng grey_secbg">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                    <span> 4.5</span>
                                  </div>
                                </div>
                              </div>
                              <p className="feedback">
                                {" "}
                                This movie was recommended to me by a very dear
                                friend who went for the movie by herself. I went
                                to the cinemas to watch but had a houseful board
                                so couldn’t watch it.
                              </p>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="review_slider_items">
                              <div className="rat_rew">
                                <div className="namings">
                                  <h5 className="desc_heading"> Ankit Roy </h5>
                                  <p> From India </p>
                                </div>
                                <div className="ep__ratngs">
                                  <div className="ms_epi__rtng grey_secbg">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                    <span> 4.5</span>
                                  </div>
                                </div>
                              </div>
                              <p className="feedback">
                                {" "}
                                This movie was recommended to me by a very dear
                                friend who went for the movie by herself. I went
                                to the cinemas to watch but had a houseful board
                                so couldn’t watch it.
                              </p>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="review_slider_items">
                              <div className="rat_rew">
                                <div className="namings">
                                  <h5 className="desc_heading"> Ankit Roy </h5>
                                  <p> From India </p>
                                </div>
                                <div className="ep__ratngs">
                                  <div className="ms_epi__rtng grey_secbg">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                    <span> 4.5</span>
                                  </div>
                                </div>
                              </div>
                              <p className="feedback">
                                {" "}
                                This movie was recommended to me by a very dear
                                friend who went for the movie by herself. I went
                                to the cinemas to watch but had a houseful board
                                so couldn’t watch it.
                              </p>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="review_slider_items">
                              <div className="rat_rew">
                                <div className="namings">
                                  <h5 className="desc_heading"> Ankit Roy </h5>
                                  <p> From India </p>
                                </div>
                                <div className="ep__ratngs">
                                  <div className="ms_epi__rtng grey_secbg">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                    <span> 4.5</span>
                                  </div>
                                </div>
                              </div>
                              <p className="feedback">
                                {" "}
                                This movie was recommended to me by a very dear
                                friend who went for the movie by herself. I went
                                to the cinemas to watch but had a houseful board
                                so couldn’t watch it.
                              </p>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>

                    <div className="col-12">
                      {/* Custom navigation buttons */}
                      <div className="review-custom-swiper">
                        {/* Custom Prev Button */}
                        <div className="swiper-button-prev cast-prev">
                          <i className="ri-arrow-left-line"></i>
                        </div>

                        {/* Custom Pagination */}
                        <div className="swiper-pagination cats-pagination"></div>

                        {/* Custom Next Button */}
                        <div className="swiper-button-next  cast-next">
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="ep_info grey_secbg">
                  <div className="year">
                    <div className="ep_heading">
                      <i className="ri-calendar-line"></i>
                      <h5 className="desc_heading">Release Year</h5>
                    </div>
                    <p className="desc_sub_heading"> 2025</p>
                  </div>
                  <div className="year">
                    <div className="ep_heading">
                      <i className="ri-translate-2"></i>
                      <h5 className="desc_heading">Available Languages </h5>
                    </div>
                    <div className="languages">
                      <p className="desc_sub_heading ms_sub_heading">English</p>
                      <p className="desc_sub_heading ms_sub_heading"> Hindi </p>
                      <p className="desc_sub_heading ms_sub_heading"> Tamil </p>
                      <p className="desc_sub_heading ms_sub_heading"> Telegu</p>
                      <p className="desc_sub_heading ms_sub_heading">
                        {" "}
                        Kannada
                      </p>
                    </div>
                  </div>
                  <div className="year">
                    <div className="ep_heading">
                      <i className="ri-star-line"></i>
                      <h5 className="desc_heading">Ratings </h5>
                    </div>
                    <div className="rat__ings ">
                      <div className="ep__ratngs">
                        <h5 className="desc_heading">IMDb </h5>
                        <div className="ms_epi__rtng grey_secbg">
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-half-fill"></i>
                          <span> 4.5</span>
                        </div>
                      </div>
                      <div className="ep__ratngs">
                        <h5 className="desc_heading">IMDb </h5>
                        <div className="ms_epi__rtng grey_secbg">
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <span> 4.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="year">
                    <div className="ep_heading">
                      <i className="ri-apps-line"></i>
                      <h5 className="desc_heading">Genres </h5>
                    </div>
                    <div className="languages">
                      <p className="desc_sub_heading ms_sub_heading">Action </p>
                      <p className="desc_sub_heading ms_sub_heading">
                        Adventure
                      </p>
                      <p className="desc_sub_heading ms_sub_heading">
                        Suspense
                      </p>
                      {/* <p className="desc_sub_heading ms_sub_heading"> Thrill</p> */}
                    </div>
                  </div>
                  <div className="year">
                    <h5 className="desc_heading">Director </h5>
                    <div className="dir_img grey_secbg">
                      <img src={require("../Assets/imgs/s1.webp")} alt="" />
                      <div className="country">
                        <h5 className="desc_heading">Rishab Shetty </h5>
                        <p> From India </p>
                      </div>
                    </div>
                  </div>
                  <div className="year">
                    <h5 className="desc_heading">Movies </h5>
                    <div className="dir_img grey_secbg">
                      <img src={require("../Assets/imgs/s5.webp")} alt="" />
                      <div className="country">
                        <h5 className="desc_heading">B. Ajaneesh Loknath </h5>
                        <p> From India </p>
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

export default MS__Banner;

//     {/* Custom navigation buttons */}
// <div className="cast-custom-swiper">
{
  /* Custom Prev Button */
}
{
  /* <div className="swiper-button-prev cast-prev">
                          <i className="ri-arrow-left-line"></i>
                        </div> */
}

{
  /* Custom Pagination */
}
{
  /* <div className="swiper-pagination cats-pagination"></div> */
}

{
  /* Custom Next Button */
}
{
  /* <div className="swiper-button-next  cast-next">
                          <i className="ri-arrow-right-line"></i>
                        </div> */
}
{
  /* </div> */
}
