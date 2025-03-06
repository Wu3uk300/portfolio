"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const typedElement = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    if (typedElement.current) {
      const options = {
        strings: [
          "Frontend Developer",
          "React Enthusiast",
          "Next.js Enjoyer",
          "Code Whisperer",
          "Bug Hunter",
          "Pixel Perfectionist",
          "Coffee-Fueled Coder",
          "Async Await Advocate",
          "State Management Guru",
          "CSS Sorcerer",
          "JavaScript Jedi",
          "TypeScript Tamer",
          "Component Craftsman",
          "UI/UX Alchemist",
          "Web Performance Buff",
          "Open Source Contributor",
          "Tech Stack Explorer",
          "Continuous Learner",
          "Digital Dreamer",
          "Problem-Solving Ninja",
          "Codebase Guardian",
          "Framework Fanatic",
          "Version Control Virtuoso",
          "Code Collaborator",
          "Tech Team Player",
          "Innovation Instigator",
          "Solution Seeker",
          "Code Creator",
        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
      };
      const typed = new Typed(typedElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, [hasAnimated]);

  return (
    <div
      id="about"
      ref={ref}
      className="relative w-full pt-[20px] sm:pt-[30px] md:pt-[40px] px-[10px] sm:px-[20px] md:px-[30px] lg:px-[40px] flex justify-center flex-col pb-20 bg-[#FFFFF0]"
    >
      <div className="flex flex-wrap max-w-[1440px] mx-auto">
        <h2 className="w-full text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[125px] pl-[5px] sm:pl-[10px] md:pl-[15px] text-[#000000] mb-[-25px] sm:mb-[-35px] md:mb-[-45px] lg:mb-[-55px] z-10 pointer-events-none font-bold">
          about.
        </h2>

        <div className="w-full h-auto sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex flex-col relative overflow-hidden">
          <div className="w-full bg-[#6696c6] h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="w-[90%] sm:w-[80%] text-center p-4 sm:p-6 rounded-lg"
            >
              <p className="text-base sm:text-xl md:text-2xl font-semibold text-white">
                I am a{" "}
                <span
                  ref={typedElement}
                  className="font-bold text-[#FFD700]"
                ></span>{" "}
                <br />
                who loves crafting beautiful and intuitive interfaces. I focus
                on smooth user experiences, engaging animations, and pushing the
                boundaries of modern web development. Always open to exciting
                new opportunities!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
