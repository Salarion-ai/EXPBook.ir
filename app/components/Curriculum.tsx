"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// محتوای سرفصل‌های خودت
const weeks = [
  {
    id: "01",
    title: "مبانی و مدل‌های متنی",
    desc: "مبانی پایه هوش مصنوعی و کار با مدل های GPT",
  },
  {
    id: "02",
    title: "جادوی تصویر و صدا",
    desc: "تولید تصویر، پادکست صوتی و دستیار هوشمند کاری",
  },
  {
    id: "03",
    title: "موشن و ویدئو",
    desc: "تولید موشن، ساخت کاراکتر و محتوای ویدئویی",
  },
  {
    id: "04",
    title: "محتوای حرفه‌ای + هدیه",
    desc: "ابزارهای به‌روز + اشتراک یکماهه تولید ویدئو (هدیه VIP)",
  },
  {
    id: "05",
    title: "مهندسی پرامپت و پول",
    desc: "سناریو نویسی، اتوماسیون و نقشه‌ی راه کسب درآمد",
  },
];

const Curriculum = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(
    () => {
      const pin = gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: "-400vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=3000",
            scrub: 1,
            pin: true,
          },
        }
      );
      return () => {
        pin.kill();
      };
    },
    { scope: triggerRef }
  );

  return (
    <section className="overflow-hidden bg-black">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen flex w-[500vw]">
          <div className="w-screen h-full flex flex-col justify-center items-center bg-navy-900 border-r border-gray-800 relative">
            <h2 className="text-[10vw] font-black text-gray-800 absolute top-10 right-10 opacity-20">
              5 WEEKS
            </h2>
            <h2 className="text-6xl md:text-8xl font-black text-white z-10 text-center">
              سرفصل‌های دوره <br />
              <span className="text-neon-blue">شاه کلید هوش مصنوعی</span>
            </h2>
            <p className="mt-8 text-xl text-gray-400 animate-bounce">
              برای دیدن هفته‌ها اسکرول کنید ↓
            </p>
          </div>

          {weeks.map((week, index) => (
            <div
              key={index}
              className="w-screen h-full flex justify-center items-center bg-navy-900 border-r border-gray-800 relative p-4 md:p-10"
              dir="rtl"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy-900 to-black z-0"></div>
              <div className="relative z-10 w-full max-w-4xl border border-gray-700 bg-gray-900/50 backdrop-blur-md p-8 md:p-12 rounded-[3rem] hover:border-neon-blue hover:shadow-[0_0_50px_rgba(0,240,255,0.2)] transition-all duration-500">
                <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-transparent absolute -top-5 -left-5 opacity-50">
                  {week.id}
                </span>
                <div className="text-neon-blue font-bold text-xl mb-4">
                  هفته {week.id}
                </div>
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  {week.title}
                </h3>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  {week.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
