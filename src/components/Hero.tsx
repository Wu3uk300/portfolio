"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const Hero = () => {
  const [hover, setHover] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize(); // Проверяем при монтировании
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = isMobile ? 60 : 100;
      const targetPosition = section.offsetTop - offset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;

      function animation(currentTime: number) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        const ease =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    }
  };

  const handleOver = (word: string) => {
    if (word === "dev") {
      setHover("dev");
    }
    if (word === "tech") {
      setHover("tech");
    }
    if (word === "proj") {
      setHover("proj");
    }
    if (word === "contact") {
      setHover("contact");
    }
  };

  return (
    <div
      className={
        isMobile
          ? "w-full flex text-white bg-[#FFFFF0] pt-[105px] pb-[100px]"
          : "w-full flex text-white bg-[#FFFFF0] pt-[205px] pb-[130px]"
      }
    >
      <div className="w-[80%] text-center m-auto flex justify-start items-start text-[20px]  text-[#000000]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { delay: 1 },
          }}
        >
          <div>
            <p className="rotate-[-3deg] text-left text-[2vw] font-lemonada">
              👋Hi, my name is Max
            </p>
            <h1 className="mt-[40px] text-[3.7vw] leading-tight font-bold">
              I am a{" "}
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                onMouseEnter={() => handleOver("dev")}
                onMouseLeave={() => setHover("")}
                className={`cursor-pointer ${
                  hover === "dev" ? "" : "text-outline"
                }`}
                href="#"
              >
                developer
              </Link>{" "}
              who loves{" "}
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("technologies");
                }}
                onMouseEnter={() => handleOver("tech")}
                onMouseLeave={() => setHover("")}
                className={`cursor-pointer ${
                  hover === "tech" ? "" : "text-outline"
                }`}
                href="#"
              >
                technologies
              </Link>
              , building cool{" "}
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                onMouseEnter={() => handleOver("proj")}
                onMouseLeave={() => setHover("")}
                className={`cursor-pointer ${
                  hover === "proj" ? "" : "text-outline"
                }`}
                href="#"
              >
                projects
              </Link>
              , and stays open for{" "}
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                onMouseEnter={() => handleOver("contact")}
                onMouseLeave={() => setHover("")}
                className={`cursor-pointer ${
                  hover === "contact" ? "" : "text-outline"
                }`}
                href="#"
              >
                contact
              </Link>
              .
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
