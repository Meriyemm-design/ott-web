import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  // Create refs for elements you want to animate
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Check if refs exist
    if (!headingRef.current || !textRef.current || !buttonRef.current) return;

    // Create a timeline for sequenced animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".st_exp", // Trigger when this element enters viewport
        start: "top 80%", // When top of element hits 80% from top
        end: "bottom 60%", // When bottom hits 60% from top
        scrub: 1, // Animation follows scroll position
        markers: true,
      },
    });

    // Sequence the animations
    timeline
      .from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        textRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      ) // Start 0.3s before previous animation ends
      .from(
        buttonRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.2)",
        },
        "-=0.2"
      );
  });

  return (
    <>
      <section className="hero-panel">
        <div className="hero-section"></div>

        <div className="st_exp">
          <h2 ref={headingRef} className="st_exp_head">
            {" "}
            The Best Streaming Experience{" "}
          </h2>
          <p ref={textRef} className="st_exp_text">
            {" "}
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.{" "}
          </p>
          <div ref={buttonRef} className="hero_btn">
            <button className="d_btn">
              <i className="ri-play-large-fill"></i>
              Start Watching Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
