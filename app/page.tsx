import Hero from "./components/Hero";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100 font-sans">
      <Hero />

      {/* بخش معرفی مدرس */}
      <section className="py-20 px-4 max-w-6xl mx-auto" dir="rtl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-6">
              من کی هستم؟
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-6 text-justify">
              من سه سال هست متمرکز درحوزه هوش های مصنوعی فعالم. پروژه های برنامه
              نویسی تا تولید محتوا حرفه ایی انجام دادم و واحد هوش مصنوعی رو در
              دو شرکت خصوصی راه اندازی کردم. و امروز هدفم گسترش این علم و تشکیل
              تیم های کاری متخصص هوش مصنوعی هست.
              <br />
              <br />
              به شما قول انجام پروژه رو میدم و موقعیت های کاری بسیاری برای
              متخصصین هست که در صورت تمایل وارد مسیر درآمد شرکتی از هوش مصنوعی
              میشید.
            </p>
            <div className="bg-gray-900 p-6 rounded-xl border-r-4 border-emerald-500">
              <h3 className="text-xl font-bold text-white mb-4">افتخارات</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>• پردازش تصویر با هوش مصنوعی 1402 - دانشگاه شهید بهشتی</li>
                <li>
                  • برنامه نویسی هوش مصنوعی (Learning Models) 1404 - دانشگاه
                  امیر کبیر
                </li>
                <li>• تربیت بیش از 50 متخصص هوش مصنوعی</li>
                <li>• راه اندازی واحد AI در استارتاپ ها و هلدینگ های معتبر</li>
              </ul>
            </div>
          </div>
          {/* جای عکس مدرس */}
          <div className="order-1 md:order-2 h-[400px] bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700 relative overflow-hidden">
            {/* اینجا باید عکس خودت رو آپلود کنی و جایگزین کنی */}
            <img
              src="/profile.jpg"
              alt="مدرس هوش مصنوعی"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* بخش سرفصل ها */}
      <section id="curriculum" className="py-20 bg-gray-900/50 px-4" dir="rtl">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            سرفصل‌های دوره{" "}
            <span className="text-emerald-500">شاه کلید هوش مصنوعی</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                week: "هفته اول",
                title: "مبانی و مدل‌های متنی",
                desc: "مبانی پایه هوش مصنوعی و کار با مدل های GPT",
              },
              {
                week: "هفته دوم",
                title: "جادوی تصویر و صدا",
                desc: "تولید تصویر، پادکست صوتی و دستیار هوشمند کاری",
              },
              {
                week: "هفته سوم",
                title: "موشن و ویدئو",
                desc: "تولید موشن، ساخت کاراکتر و محتوای ویدئویی",
              },
              {
                week: "هفته چهارم",
                title: "محتوای حرفه‌ای + هدیه VIP",
                desc: "ابزارهای به‌روز + اشتراک یکماهه تولید ویدئو (هدیه)",
              },
              {
                week: "هفته پنجم",
                title: "مهندسی پرامپت و درآمدزایی",
                desc: "سناریو نویسی، اتوماسیون و نقشه‌ی راه کسب درآمد",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-black border border-gray-800 p-6 rounded-xl flex flex-col md:flex-row gap-4 hover:border-emerald-500 transition"
              >
                <div className="bg-emerald-900/30 text-emerald-400 font-bold px-4 py-2 rounded-lg w-fit h-fit whitespace-nowrap">
                  {item.week}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* باکس قیمت */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-b from-emerald-900/20 to-black border border-emerald-500/30 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-1 text-sm rounded-bl-xl">
                پیشنهاد ویژه
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                دوره حضوری VIP
              </h3>
              <div className="text-4xl font-bold text-emerald-400 mb-4">
                15 <span className="text-lg text-gray-400">میلیون تومان</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                شامل اشتراک Pro + پرداخت اقساطی (8 م پیش + 8 م چک)
              </p>
              <ul className="text-gray-300 space-y-2 mb-8 list-disc list-inside">
                <li>ظرفیت محدود (۷ نفر)</li>
                <li>امکان پرداخت دو مرحله‌ای (۱۶ میلیون)</li>
                <li>پشتیبانی مستقیم و شبکه سازی</li>
              </ul>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                دوره آنلاین
              </h3>
              <div className="text-4xl font-bold text-white mb-4">
                10 <span className="text-lg text-gray-400">میلیون تومان</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                دسترسی کامل به اسپات پلیر
              </p>
              <ul className="text-gray-300 space-y-2 mb-8 list-disc list-inside">
                <li>ویدیوهای ضبط شده با کیفیت</li>
                <li>دسترسی دائم به آپدیت‌ها</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* سوالات متداول */}
      <section className="py-20 px-4 max-w-4xl mx-auto" dir="rtl">
        <h2 className="text-3xl font-bold text-center mb-12">سوالات متداول</h2>
        <div className="space-y-8">
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
            <div key={i} className="border-b border-gray-800 pb-4">
              <h4 className="text-xl font-bold text-white mb-2">؟ {faq.q}</h4>
              <p className="text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* فوتر و تماس */}
      <footer
        className="bg-black py-10 border-t border-gray-900 text-center"
        dir="rtl"
      >
        <h3 className="text-2xl font-bold text-white mb-6">
          شروع مسیر درآمدزایی شما
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-lg">
          <a
            href="tel:09911423133"
            className="text-emerald-400 hover:text-emerald-300 transition"
          >
            📞 09911423133
          </a>
          <a
            href="https://t.me/EXPBook"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            ✈️ @EXPBook
          </a>
        </div>
        <p className="text-gray-600 mt-8 text-sm">
          طراحی شده با هوش مصنوعی و کدنویسی اختصاصی
        </p>
      </footer>
    </main>
  );
}
