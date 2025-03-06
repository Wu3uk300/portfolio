"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import showmeyourapp from "@/img/showmeyourapp.png";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [animate, setAnimate] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize();
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

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  const handleAnimation = (data: string) => {
    setAnimate(data);
  };

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const containerVariants = {
    hidden: {
      transition: { staggerChildren: 0.02 },
    },
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  };

  const buttonVariants = {
    hidden: { y: -80, opacity: 1 },
    visible: {
      y: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 500, damping: 30, delay: 0.2 },
    },
  };
  const showAppVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <div
      id="projects"
      ref={ref}
      className="relative w-full pt-[20px] sm:pt-[30px] md:pt-[40px] px-[10px] sm:px-[20px] md:px-[30px] lg:px-[40px] flex justify-center flex-col pb-20 bg-[#FFFFF0]"
    >
      <div className="flex flex-wrap max-w-[1440px] mx-auto">
        <h2 className="w-full text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[125px] pl-[5px] sm:pl-[10px] md:pl-[15px] text-[#000000] mb-[-25px] sm:mb-[-35px] md:mb-[-45px] lg:mb-[-55px] z-10 pointer-events-none font-bold">
          projects.
        </h2>

        <div className="w-full flex flex-wrap">
          <Link
            className="w-full lg:basis-1/2 bg-[#A3B1C6] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex flex-col relative overflow-hidden"
            href={"https://wortmeister-liart.vercel.app"}
            target="blank"
            onMouseEnter={() => handleAnimation("Wortmeister")}
            onMouseLeave={() => setAnimate("")}
          >
            <div className="w-full flex justify-end px-[10px] sm:px-[15px] md:px-[20px] lg:px-[25px]">
              <motion.button
                className="bg-black text-white py-[10px] sm:py-[12px] md:py-[15px] lg:py-[20px] xl:py-[25px] px-[20px] sm:px-[25px] md:px-[30px] lg:px-[40px] xl:px-[50px] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-thin absolute"
                variants={buttonVariants}
                initial="hidden"
                animate={animate === "Wortmeister" ? "visible" : "hidden"}
              >
                view project
              </motion.button>
            </div>

            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              className="bg-transparent w-[85%] sm:w-[80%] md:w-3/4 mx-auto flex flex-col justify-center items-center text-center h-full"
            >
              <div
                className={
                  animate === "Wortmeister"
                    ? "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[40px] mb-[10px] sm:mb-[15px] md:mb-[20px] font-extrabold text-black ease-in-out duration-200"
                    : "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[40px] mb-[5px] sm:mb-[8px] md:mb-[10px] font-extrabold text-white ease-in-out duration-200"
                }
              >
                Wortmeister
              </div>
              {!isMobile && (
                <motion.div
                  className="font-yesteryear text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] tracking-[2px] sm:tracking-[3px] inline-block h-[100px]"
                  variants={containerVariants}
                  initial="hidden"
                  animate={animate === "Wortmeister" ? "visible" : "hidden"}
                >
                  {"Wortmeister".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              )}

              <div
                className={
                  animate === "Wortmeister"
                    ? "text-center mt-[15px] sm:mt-[18px] md:mt-[20px] lg:mt-[25px] xl:mt-[35px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] ease-in-out duration-500 h-[80px] w-[100%]"
                    : "text-center mt-[10px] sm:mt-[12px] md:mt-[15px] lg:mt-[20px] xl:mt-[25px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] ease-in-out duration-500 h-[80px] w-[300px]"
                }
              >
                Wortmeister is an app designed to help you easily learn German
                words through interactive flashcard games or by using the Learn
                method. It is a fun and engaging way to build your vocabulary
                and enhance your German skills.
              </div>
            </motion.div>
          </Link>

          <Link
            className="w-full lg:basis-1/2 bg-[#8B3A62] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex flex-col relative overflow-hidden"
            href={"https://showmeyourapp-five.vercel.app"}
            target="blank"
            onMouseEnter={() => handleAnimation("ShowMeYourApp")}
            onMouseLeave={() => setAnimate("")}
          >
            <div className="w-full flex justify-end px-[10px] sm:px-[15px] md:px-[20px] lg:px-[25px]">
              <motion.button
                className="bg-black text-white py-[10px] sm:py-[12px] md:py-[15px] lg:py-[20px] xl:py-[25px] px-[20px] sm:px-[25px] md:px-[30px] lg:px-[40px] xl:px-[50px] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-thin absolute"
                variants={buttonVariants}
                initial="hidden"
                animate={animate === "ShowMeYourApp" ? "visible" : "hidden"}
              >
                view project
              </motion.button>
            </div>

            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              className="bg-transparent w-[85%] sm:w-[80%] md:w-3/4 mx-auto flex flex-col justify-center items-center text-center h-full"
            >
              <div
                className={
                  animate === "ShowMeYourApp"
                    ? "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[40px] mb-[10px] sm:mb-[15px] md:mb-[20px] font-extrabold text-[#1aaf3b] ease-in-out duration-200"
                    : "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[40px] mb-[5px] sm:mb-[8px] md:mb-[10px] font-extrabold text-white ease-in-out duration-200"
                }
              >
                Show Me Your App
              </div>
              {!isMobile && (
                <motion.div
                  className="inline-block h-[100px] pt[40px]"
                  variants={showAppVariants}
                  initial="hidden"
                  animate={animate === "ShowMeYourApp" ? "visible" : "hidden"}
                >
                  <Image
                    src={showmeyourapp}
                    alt="showmeyourapp"
                    width={90}
                    height={90}
                  />
                </motion.div>
              )}

              <div
                className={
                  animate === "ShowMeYourApp"
                    ? "text-center mt-[15px] sm:mt-[18px] md:mt-[20px] lg:mt-[25px] xl:mt-[35px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] ease-in-out duration-500 text-white  h-[80px] w-[100%] "
                    : "text-center mt-[10px] sm:mt-[12px] md:mt-[15px] lg:mt-[20px] xl:mt-[25px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] ease-in-out duration-500 text-white h-[80px] w-[300px]"
                }
              >
                Show Me Your App is a showcase platform for projects, empowering
                creators to share their apps with the world. Add your project,
                inspire others, and explore innovative ideas from like-minded
                developers.
              </div>
            </motion.div>
          </Link>

          <Link
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex flex-col relative overflow-hidden"
            href={"https://daily-jade.vercel.app"}
            target="blank"
            onMouseEnter={() => handleAnimation("Daily")}
            onMouseLeave={() => setAnimate("")}
          >
            <div className="w-full bg-[#2C3E50] h-full flex flex-col relative">
              <div className="w-full flex justify-end px-[10px] sm:px-[15px] md:px-[20px] lg:px-[25px]">
                <motion.button
                  className="bg-black text-white py-[10px] sm:py-[12px] md:py-[15px] lg:py-[20px] xl:py-[25px] px-[20px] sm:px-[25px] md:px-[30px] lg:px-[40px] xl:px-[50px] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-thin absolute"
                  variants={buttonVariants}
                  initial="hidden"
                  animate={animate === "Daily" ? "visible" : "hidden"}
                >
                  view project
                </motion.button>
              </div>

              <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                className="bg-transparent w-[85%] sm:w-[80%] md:w-3/4 mx-auto flex flex-col justify-center items-center text-center h-full"
              >
                <div
                  className={
                    animate === "Daily"
                      ? "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[40px] mb-[10px] sm:mb-[15px] md:mb-[20px] font-extrabold text-[#007bff] ease-in-out duration-200"
                      : "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[40px] mb-[5px] sm:mb-[8px] md:mb-[10px] font-extrabold text-white ease-in-out duration-200"
                  }
                >
                  Daily
                </div>
                {!isMobile && (
                  <motion.div
                    className="absolute bottom-5 bg-white text-black p-3 rounded-xl shadow-lg max-w-[80%] text-center border-2 border-[#007bff]"
                    initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                    animate={
                      animate === "Daily"
                        ? { opacity: 1, y: 0, filter: "blur(0px)" }
                        : {}
                    }
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                    }}
                  >
                    <span className="text-[#007bff]">
                      Take a deep breath. Your mind deserves a moment of peace.
                    </span>
                  </motion.div>
                )}

                <div
                  className={
                    animate === "Daily"
                      ? "text-center mt-[15px] sm:mt-[18px] md:mt-[20px] lg:mt-[25px] xl:mt-[35px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] ease-in-out duration-500 text-white  h-[80px] w-[100%] "
                      : "text-center mt-[10px] sm:mt-[12px] md:mt-[15px] lg:mt-[20px] xl:mt-[25px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] ease-in-out duration-500 text-white h-[80px] w-[300px] "
                  }
                >
                  Daily is your personal growth companion, offering a single
                  actionable tip every day to help you improve your mental or
                  physical health. Whether you are looking to boost focus,
                  reduce stress, or build strength, Daily provides simple,
                  effective advice tailored to keep you progressing.
                </div>
              </motion.div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
