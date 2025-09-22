import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Components = () => {
  return (
    <>
    <div id="pag">
      <Sidebar />
      <Gradient />
      <Hero />
    </div>
    </>
  );
};

function Gradient() {
  return (
    <>
      <div className="shape1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1100"
          height="278"
          viewBox="0 0 1512 378"
          fill="none"
        >
          <g filter="url(#filter0_f_95_19)">
            <path
              d="M2338.85 816.049C2238.12 943.246 643.398 1359.54 520.1 1261.9C396.802 1164.25 -502.88 346.746 -402.15 219.549C-301.421 92.3515 1817.73 646.848 2002.35 793.049C2144.54 911.618 2439.58 688.852 2338.85 816.049Z"
              fill="url(#paint0_linear_95_19)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_95_19"
              x="-610.001"
              y="0.746094"
              width="3169.39"
              height="1475.84"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_95_19"
              />
            </filter>
            <linearGradient
              id="paint0_linear_95_19"
              x1="-30.137"
              y1="222.666"
              x2="742.331"
              y2="373.644"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61F369" />
              <stop offset="0.39425" stopColor="#FDCB4B" />
              <stop offset="0.75" stopColor="#8631ED" />
              <stop offset="1" stopColor="#2889EA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="shape2">
        <div className="star"></div>
        <div className="polygon"></div>
        <div className="square"></div>
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
          <circle cx="75" cy="75" r="75" fill="#8569FF" />
        </svg>
      </div>
    </>
  );
}

function Header({ toggleSidebar }) {
  const nav = useRef();
  useGSAP(() => {
    gsap.from(nav.current, {
      y: -50,
      opacity: 0,
      duration: 2,
      ease: "expo",
    });
  });
  return (
    <div id="header" ref={nav}>
      <h1>DEVTOOL</h1>
      <svg
        onClick={toggleSidebar}
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="30"
        viewBox="0 0 75 66"
        fill="none"
      >
        <path
          d="M2 2H55.25M2 33H73M2 64H37.5"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function Hero() {
  const heading = useRef();
  const para = useRef();
  const btn = useRef();

  useGSAP(() => {
    const time = gsap.timeline();
    time.from(heading.current, {
      x: -100,
      duration: 1.5,
      ease: "expo",
      opacity: 0,
      delay: 1,
    });
    time.from(para.current, {
      x: 100,
      duration: 1.5,
      opacity: 0,
      ease: "expo",
    });
    time.from(btn.current, {
      y: 20,
      duration: 1,
      opacity: 0,
      ease: "power1",
    });
  });
  return (
    <div id="hero">
      <h1 ref={heading}>Finally, an app that gets it.</h1>
      <p ref={para}>
        Stop struggling with complicated tools. Our app is super easy to use, so
        you can focus on creating what you love.
      </p>
      <div className="btn-section" ref={btn}>
        <button>Try it for Free</button>
        <button>See How it Works</button>
      </div>
    </div>
  );
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const timelineRef = useRef(null);

  useGSAP(() => {
    timelineRef.current = gsap
      .timeline({ paused: true })
      .to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
  });

  const toggleSidebar = () => {
    if (isOpen) {
      // Reverse the animation when closing
      timelineRef.current.reverse();
    } else {
      // Play the animation when opening
      timelineRef.current.play();
    }
    setIsOpen(!isOpen);
  };

  // Close sidebar function
  const closeSidebar = () => {
    timelineRef.current.reverse();
    setIsOpen(false);
  };

  return (
    <>
      <div ref={sidebarRef} className="sidebar">
        <div className="head">
          <svg
            onClick={closeSidebar}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 68 68"
            fill="none"
          >
            <path
              d="M65 3L3 65M3 3L65 65"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="main">
          <div className="anchor">
            <h1>HOME</h1>
          </div>
          <div className="anchor">
            <h1>ABOUT</h1>
          </div>
          <div className="anchor">
            <h1>LEARN</h1>
          </div>
          <div className="anchor">
            <h1>TOOLS</h1>
          </div>
          <div className="anchor">
            <h1>LOGIN</h1>
          </div>
        </div>
      </div>
      <Header toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Components;
