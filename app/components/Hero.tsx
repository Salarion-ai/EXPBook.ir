"use client";
import { useState, useEffect } from "react";
import ConsultationModal from "./ConsultationModal";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toRotate = ["EXP Book", "کتاب تجربه"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // مکث قبل از پاک کردن
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white">
      {/* ویدیو بک‌گراند */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
      >
        {/* ویدیو باید در پوشه public باشد */}
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto mt-[-50px]">
        {/* افکت تایپ */}
        <h1 className="text-6xl md:text-8xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 h-[100px]">
          <span className="typing-cursor">{text}</span>
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          تجربه شما قابل کپی نیست
        </h2>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 bg-black/50 p-2 rounded-lg inline-block">
          کارگاه خصوصی هوش مصنوعی (حضوری/آنلاین) - تضمین تولید درآمد و انجام
          پروژه
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold py-4 px-10 rounded-full transition transform hover:scale-105 shadow-lg border-2 border-emerald-400/50"
        >
          مشاوره رایگان میخوام
        </button>
      </div>

      {/* مودال مشاوره */}
      {isModalOpen && (
        <ConsultationModal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
};

export default Hero;
