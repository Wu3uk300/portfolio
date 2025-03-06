"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import html from "@/img/html.png";
import css from "@/img/css.png";
import js from "@/img/js.png";
import ts from "@/img/ts.png";
import react from "@/img/react.png";
import next from "@/img/next.png";
import postgres from "@/img/postgreqsl.png";
import prisma from "@/img/prisma.png";
import redux from "@/img/redux.png";
import tailwind from "@/img/tailwind.png";
import zustand from "@/img/zustand.png";
import git from "@/img/git.png";

const Technologies = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragConstraintsRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const technologies = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: js },
    { name: "TypeScript", image: ts },
    { name: "React", image: react },
    { name: "Next.js", image: next },
    { name: "PostgreSQL", image: postgres },
    { name: "Prisma", image: prisma },
    { name: "Redux", image: redux },
    { name: "Tailwind", image: tailwind },
    { name: "Zustand", image: zustand },
    { name: "Git", image: git },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    handleResize(); // Проверяем при монтировании
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
  }, [hasAnimated]);

  return (
    <div
      id="technologies"
      ref={containerRef}
      className="relative w-full pt-[20px] sm:pt-[30px] md:pt-[40px] px-[10px] sm:px-[20px] md:px-[30px] lg:px-[40px] flex justify-center flex-col pb-20 bg-[#FFFFF0] "
    >
      <div className="flex flex-wrap w-[100%] max-w-[1440px] mx-auto">
        <h2 className="w-full text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[125px] pl-[5px] sm:pl-[10px] md:pl-[15px] text-[#000000] mb-[-25px] sm:mb-[-35px] md:mb-[-45px] lg:mb-[-55px] z-10 pointer-events-none font-bold">
          technologies.
        </h2>

        <div className="w-full h-auto min-h-[350px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex flex-col relative overflow-hidden">
          <div
            ref={dragConstraintsRef}
            className="w-full bg-[#6cc48e] h-full flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="w-[90%] sm:w-[80%] h-[90%] flex flex-wrap items-center justify-center gap-2"
            >
              {technologies.map((item) => (
                <motion.div
                  key={item.name}
                  drag
                  dragConstraints={dragConstraintsRef}
                  dragElastic={0.001}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
                  }}
                  whileDrag={{
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#FFFFF0] w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] rounded-xl cursor-grab active:cursor-grabbing flex items-center justify-center text-black font-bold text-lg shadow-md hover:shadow-xl border-2 border-[#6cc48e]   hover:border-[#FFD700] transition-colors duration-300"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={item.image}
                      alt="Technology"
                      width={isMobile ? 30 : 50}
                      height={isMobile ? 30 : 50}
                      draggable={false}
                    />
                    <div
                      className={
                        isMobile
                          ? "text-[12px] font-semibold"
                          : "text-[14px] font-semibold"
                      }
                    >
                      {item.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
