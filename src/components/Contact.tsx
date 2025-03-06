"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const email = "kondratov.maksym.frontend@gmail.com";
  const letterArray = email.split("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    });
  };

  // Определяем мобильное устройство
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Автоматически запускаем анимацию на мобильных устройствах
          if (isMobile) {
            setIsHovered(true);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
  }, [hasAnimated, isMobile]);

  const containerVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: isMobile ? 1 : 1.05, // Отключаем масштабирование на мобильных
      transition: {
        duration: 0.5,
      },
    },
  };

  const letterVariants = {
    initial: {
      rotateX: 180,
      rotateY: 180,
      filter: "blur(4px)",
      opacity: 0.3,
    },
    hover: (i: number) => ({
      rotateX: 0,
      rotateY: 0,
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        duration: isMobile ? 1 : 0.8, // Увеличиваем длительность на мобильных
        delay: i * (isMobile ? 0.04 : 0.03), // Увеличиваем задержку на мобильных
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      id="contact"
      ref={containerRef}
      className="relative w-full pt-[20px] sm:pt-[30px] md:pt-[40px] px-[10px] sm:px-[20px] md:px-[30px] lg:px-[40px] flex justify-center flex-col pb-20 bg-[#FFFFF0]"
    >
      <div className="flex flex-wrap w-[100%] max-w-[1440px] mx-auto">
        <h2 className="w-full text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[125px] pl-[5px] sm:pl-[10px] md:pl-[15px] text-[#000000] mb-[-25px] sm:mb-[-35px] md:mb-[-45px] lg:mb-[-55px] z-10 pointer-events-none font-bold">
          contact.
        </h2>

        <div className="w-full h-auto min-h-[250px] sm:min-h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex flex-col relative overflow-hidden">
          <div className="w-full bg-[#ffdd8f] h-full flex items-center justify-center overflow-hidden perspective-[1000px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="w-[100%] h-[100%] flex flex-wrap items-center justify-center gap-2"
            >
              <motion.div
                className={`relative text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] 
                  bg-[#FFFFF0] p-4 sm:p-6 md:p-8 border-2 border-[#000000] rounded-lg 
                  shadow-xl transition-shadow duration-300 cursor-pointer select-none
                  ${isMobile ? "touch-manipulation" : ""}`}
                variants={containerVariants}
                initial="initial"
                whileHover="hover"
                style={{ transformStyle: "preserve-3d" }}
                onClick={copyToClipboard}
                onHoverStart={() => !isMobile && setIsHovered(true)}
                onHoverEnd={() => !isMobile && setIsHovered(false)}
              >
                <div className="flex flex-wrap relative z-10 perspective-[1000px] break-all sm:break-normal">
                  {letterArray.map((letter, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={letterVariants}
                      initial="initial"
                      animate={isHovered ? "hover" : "initial"}
                      className="inline-block"
                      style={{
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-200/30 via-yellow-300/30 to-yellow-200/30 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Уведомление о копировании */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: showNotification ? 1 : 0,
                  y: showNotification ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-[100px] transform -translate-x-1/2 
                  bg-[#FFD700] text-black px-6 py-3 rounded-lg shadow-lg
                  text-sm font-semibold z-50"
              >
                Email copied to clipboard
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
