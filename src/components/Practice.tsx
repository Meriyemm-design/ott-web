import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "../Styles/practice.css";
import _gsap from "gsap/gsap-core";

const Practice = () => {
  const aniRef = useRef(null);

  useGSAP(() => {
    _gsap.to(aniRef.current, {
      x: 200,
      duration: 2,
    });
  });

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="main">
          <button ref={aniRef}>Animate </button>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
