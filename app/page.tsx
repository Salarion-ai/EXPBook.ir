import Hero from "./components/Hero";
import About from "./components/About";
import Curriculum from "./components/Curriculum";
import React from "react";

export default function Home() {
  return (
    <main className="bg-navy-900 min-h-screen text-white selection:bg-neon-blue selection:text-navy-900 overflow-x-hidden font-sans">
      {/* ۱. بخش هیرو (با انیمیشن زوم) */}
      <Hero />

      {/* ۲. بخش معرفی مدرس (با انیمیشن رنگی شدن عکس) - محتوا داخل خود کامپوننت است */}
      <About />

      {/* ۳. بخش سرفصل‌ها (با اسکرول افقی) - محتوا داخل خود کامپوننت است */}
      <Curriculum />

      {/* ۴. بخش قیمت‌ها (استاتیک - درست بعد از تمام شدن اسکرول افقی) */}
      <section className="py-20 px-4 max-w-6xl mx-auto" dir="rtl">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          سرمایه‌گذاری شما
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* کارت VIP */}
          <div className="bg-gradient-to-b from-navy-800 to-black border border-neon-blue p-8 rounded-2xl relative overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:scale-105 transition duration-300">
            <div className="absolute top-0 right-0 bg-neon-blue text-navy-900 font-bold px-6 py-2 text-sm rounded-bl-2xl">
              پیشنهاد ویژه
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">
              دوره حضوری VIP
            </h3>
            <div className="text-5xl font-black text-neon-blue mb-4 mt-4">
              15{" "}
              <span className="text-lg text-gray-400 font-normal">
                میلیون تومان
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-6 border-b border-gray-700 pb-4">
              شامل اشتراک Pro + پرداخت اقساطی (8 م پیش + 8 م چک)
            </p>
            <ul className="text-gray-300 space-y-3 mb-8 list-disc list-inside">
              <li>ظرفیت محدود (۷ نفر)</li>
              <li>امکان پرداخت دو مرحله‌ای (۱۶ میلیون)</li>
              <li>پشتیبانی مستقیم و شبکه سازی</li>
              <li>هدیه اشتراک ابزارهای AI</li>
            </ul>
            <a
              href="#contact"
              className="block w-full py-4 bg-neon-blue text-navy-900 font-bold text-center rounded-xl hover:bg-white transition"
            >
              ثبت نام دوره حضوری
            </a>
          </div>

          {/* کارت آنلاین */}
          <div className="bg-navy-900 border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition">
            <h3 className="text-3xl font-bold text-white mb-2">دوره آنلاین</h3>
            <div className="text-5xl font-black text-white mb-4 mt-4">
              10{" "}
              <span className="text-lg text-gray-400 font-normal">
                میلیون تومان
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 border-b border-gray-700 pb-4">
              دسترسی کامل به اسپات پلیر
            </p>
            <ul className="text-gray-400 space-y-3 mb-8 list-disc list-inside">
              <li>ویدیوهای ضبط شده با کیفیت</li>
              <li>دسترسی دائم به آپدیت‌ها</li>
              <li>بدون محدودیت زمانی</li>
            </ul>
            <a
              href="#contact"
              className="block w-full py-4 border border-white text-white font-bold text-center rounded-xl hover:bg-white hover:text-black transition"
            >
              ثبت نام دوره آنلاین
            </a>
          </div>
        </div>
      </section>

      {/* ۵. سوالات متداول (استاتیک) */}
      <section className="py-20 px-4 max-w-4xl mx-auto" dir="rtl">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          سوالات متداول
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "چرا باید الان شرکت کنم؟",
              a: "بازار تشنه متخصصه. سرعت رشد AI وحشتناکه و الان بهترین زمان برای ساخت رزومه است.",
            },
            {
              q: "اگر ظرفیت پر شد چی؟",
              a: "برای ماه بعد رزرو میشید. ما کیفیت رو فدای کمیت نمیکنیم.",
            },
            {
              q: "چقدر درآمد خواهم داشت؟",
              a: "متخصصین پروژه‌ای بین ۳ تا ۵ میلیون در هفته درآمد دارند. بستگی به فعالیت شما دارد.",
            },
            {
              q: "اگر پروژه نگیرم چی؟",
              a: "ما سناریوهای آماده و فضای کاری داریم که می‌تونید با کمک ما به درآمد برسید.",
            },
            {
              q: "من قبلا دوره دیدم ولی یاد نگرفتم...",
              a: "مسیر آموزشی 'کتاب تجربه' کپی برداری نیست. ما شاه‌کلید رو بهتون میدیم.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-black/40 border border-gray-800 rounded-xl p-6 hover:border-neon-blue transition duration-300"
            >
              <h4 className="text-xl font-bold text-white mb-3">؟ {faq.q}</h4>
              <p className="text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ۶. فوتر و تماس */}
      <footer
        className="bg-black py-16 border-t border-gray-900 text-center relative overflow-hidden"
        dir="rtl"
      >
        {/* افکت نئونی بکگراند فوتر */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent shadow-[0_0_50px_rgba(0,240,255,1)]"></div>

        <h3 className="text-3xl font-bold text-white mb-8">
          شروع مسیر درآمدزایی شما
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-xl font-bold">
          <a
            href="tel:09911423133"
            className="text-neon-blue hover:text-white transition flex items-center justify-center gap-2 px-6 py-3 border border-neon-blue/30 rounded-full hover:bg-neon-blue/10"
          >
            ۰۹۹۱۱۴۲۳۱۳۳ 📞
          </a>
          <a
            href="https://t.me/EXPBook"
            className="text-blue-400 hover:text-white transition flex items-center justify-center gap-2 px-6 py-3 border border-blue-400/30 rounded-full hover:bg-blue-400/10"
          >
            @EXPBook ✈️
          </a>
        </div>
        <p className="text-gray-600 mt-12 text-sm">
          طراحی شده با هوش مصنوعی و کدنویسی اختصاصی | EXP Book 2025
        </p>
      </footer>
    </main>
  );
}
