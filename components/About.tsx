"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        imgRef.current,
        { filter: "grayscale(100%)", scale: 0.9 },
        {
          filter: "grayscale(0%)",
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "center center",
            scrub: 1,
          },
        }
      );

      gsap.from(textRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-navy-900 py-20 px-6 flex items-center justify-center overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* بخش عکس */}
        <div className="relative flex justify-center order-2 md:order-1">
          <div className="absolute inset-0 border-2 border-dashed border-neon-blue rounded-full animate-[spin_10s_linear_infinite] w-full h-full scale-110 opacity-50"></div>
          <div
            ref={imgRef}
            className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-4 border-gray-800 shadow-[0_0_50px_rgba(0,240,255,0.1)]"
          >
            <img
              src="/profile.jpg"
              alt="مدرس هوش مصنوعی"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* بخش متن (محتوای خودت) */}
        <div ref={textRef} className="text-right order-1 md:order-2" dir="rtl">
          <h2 className="text-neon-blue text-xl font-bold mb-2 tracking-widest">
            من کی هستم؟
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            تجربه هوش مصنوعی <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-neon-blue to-white">
              کپی نمیشود
            </span>
          </h3>

          <p className="text-gray-300 text-lg leading-8 mb-8 text-justify">
            من سه سال هست متمرکز درحوزه هوش های مصنوعی فعالم. پروژه های برنامه
            نویسی تا تولید محتوا حرفه ایی انجام دادم و واحد هوش مصنوعی رو در دو
            شرکت خصوصی راه اندازی کردم. و امروز هدفم گسترش این علم و تشکیل تیم
            های کاری متخصص هوش مصنوعی هست.
            <br />
            <br />
            به شما قول انجام پروژه رو میدم و موقعیت های کاری بسیاری برای متخصصین
            هست که در صورت تمایل وارد مسیر درآمد شرکتی از هوش مصنوعی میشید.
          </p>

          <div className="bg-black/50 p-6 rounded-xl border-r-4 border-neon-blue backdrop-blur-sm">
            <h4 className="text-xl font-bold text-white mb-4">افتخارات</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-neon-blue transition">
                • پردازش تصویر با هوش مصنوعی 1402 - دانشگاه شهید بهشتی
              </li>
              <li className="hover:text-neon-blue transition">
                • برنامه نویسی هوش مصنوعی (Learning Models) 1404 - دانشگاه امیر
                کبیر
              </li>
              <li className="hover:text-neon-blue transition">
                • تربیت بیش از 50 متخصص هوش مصنوعی
              </li>
              <li className="hover:text-neon-blue transition">
                • راه اندازی واحد AI در استارتاپ ها و هلدینگ های معتبر
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
