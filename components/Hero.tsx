"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConsultationModal from "./ConsultationModal";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500", // طول انیمیشن اسکرول
          scrub: 1, // نرمی حرکت با اسکرول
          pin: true, // قفل کردن صفحه
        },
      });

      // انیمیشن: متن بزرگ میشه و محو میشه
      tl.to(textRef.current, {
        scale: 50, // زوم خیلی زیاد داخل متن
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      })
        // ویدیو واضح میشه
        .to(
          videoRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            filter: "brightness(100%)",
          },
          "<"
        ); // همزمان با قبلی
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-navy-900 flex flex-col items-center justify-center"
    >
      {/* لایه ویدیو (ابتدا کمی تاریک و کوچک) */}
      <div
        ref={videoRef}
        className="absolute inset-0 w-full h-full z-0 opacity-40 scale-90"
        style={{ filter: "brightness(50%)" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* اگر ویدیو آپلود نشد، یک رنگ جایگزین نشون میده */}
          <source src="/hero-video.mp4" type="video/mp4" />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-artificial-intelligence-concept-neural-network-40878-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-navy-900/30"></div>
      </div>

      {/* لایه متن عظیم */}
      <div
        ref={textRef}
        className="relative z-10 text-center mix-blend-difference"
      >
        <h1 className="text-[12vw] md:text-[15vw] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter whitespace-nowrap">
          EXP BOOK
        </h1>
        <p className="text-2xl md:text-4xl font-bold text-neon-blue mt-4 tracking-widest">
          کتاب تجربه
        </p>
      </div>

      {/* دکمه که همیشه پایینه */}
      <div className="absolute bottom-10 z-20">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-10 py-4 bg-transparent border-2 border-neon-blue text-white rounded-full font-bold text-xl transition-all duration-300 hover:bg-neon-blue hover:text-navy-900 hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
        >
          شروع مسیر درآمدزایی
        </button>
      </div>

      {isModalOpen && (
        <ConsultationModal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
};

export default Hero;
