"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import about from "@/img/icons8-about-50.png";
import tech from "@/img/icons8-clockwork-50.png";
import projects from "@/img/icons8-projects-50.png";
import letter from "@/img/icons8-letter-50.png";
import Image from "next/image";
import { motion } from "motion/react";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 450px)" });

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

  if (!isClient) return null;

  if (isMobile) {
    return (
      <div className="w-full bg-[#242424] text-[14px] text-[#FFFFFF] fixed bottom-[-3] left-0 right-0 flex items-end justify-center border-t-[3px] z-[999]">
        <div
          className={isSmall ? "flex gap-7 mt-2 mb-2" : "flex gap-10 mt-2 mb-2"}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex-col flex justify-center items-center transition-all duration-300"
          >
            <Image
              className={isSmall ? "" : "mb-1"}
              src={about}
              width={isSmall ? 20 : 25}
              height={isSmall ? 20 : 25}
              alt="About"
            />
            about
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="flex-col flex justify-center items-center transition-all duration-300"
          >
            <Image
              className={isSmall ? "" : "mb-1"}
              src={projects}
              width={isSmall ? 20 : 25}
              height={isSmall ? 20 : 25}
              alt="Projects"
            />
            projects
          </button>

          <button
            onClick={() => scrollToSection("technologies")}
            className="flex-col flex justify-center items-center transition-all duration-300"
          >
            <Image
              className={isSmall ? "" : "mb-1"}
              src={tech}
              width={isSmall ? 20 : 25}
              height={isSmall ? 20 : 25}
              alt="Technologies"
            />
            technologies
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="flex-col flex justify-center items-center transition-all duration-300"
          >
            <Image
              className={isSmall ? "" : "mb-1"}
              src={letter}
              width={isSmall ? 20 : 25}
              height={isSmall ? 20 : 25}
              alt="Contact"
            />
            contact
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full text-[#FFFFFF] bg-[#FFFFF0] fixed top-0 z-[999]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2 } }}
      >
        <div className="flex justify-between items-center px-24 py-8 bg-transparent left-0 right-0 z-10 nav1:px-[70px] nav2:px-[60px]">
          <div className="text-3xl font-lemonada font-bold bg-gradient-to-r from-[#FFD700] to-[#FFD700] bg-clip-text text-transparent">
            Maksym
          </div>
          <div className="flex gap-8 font-semibold">
            <button
              onClick={() => scrollToSection("about")}
              className="relative text-lg group text-[#000000] transition-all duration-300"
            >
              about
              <span className="absolute bottom-[-4] left-0 w-[100%] h-[3px] bg-gradient-to-r from-[#FFD700] to-[#FFD700] transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="relative text-lg group text-[#000000] transition-all duration-300"
            >
              projects
              <span className="absolute bottom-[-4] left-0 w-[100%] h-[3px] bg-gradient-to-r from-[#FFD700] to-[#FFD700] transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
            </button>
            <button
              onClick={() => scrollToSection("technologies")}
              className="relative text-lg group text-[#000000] transition-all duration-300"
            >
              technologies
              <span className="absolute bottom-[-4] left-0 w-[100%] h-[3px] bg-gradient-to-r from-[#FFD700] to-[#FFD700] transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative text-lg group text-[#000000] transition-all duration-300"
            >
              contact
              <span className="absolute bottom-[-4] left-0 w-[100%] h-[3px] bg-gradient-to-r from-[#FFD700] to-[#FFD700] transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
