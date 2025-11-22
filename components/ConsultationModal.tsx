"use client";
import { useState } from "react";

const ConsultationModal = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(1); // برای مدیریت وضعیت نمایش پیام موفقیت
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    level: "مبتدی",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // اینجا تغییر کرد: ارسال واقعی به Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "cd271e7b-785b-40f0-aa1d-1ca8cd4b6926", // <--- کد ایمیل شده رو دقیقاً اینجا بین کوتیشن‌ها بذار
        name: formData.name,
        phone: formData.phone,
        level: formData.level,
        subject: "لید جدید از سایت هوش مصنوعی", // عنوان ایمیلی که برات میاد
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log("Lead Captured:", result);
      setStep(2); // نمایش پیام موفقیت به کاربر

      setTimeout(() => {
        onClose();
        setStep(1);
      }, 5000);
    } else {
      alert("خطایی رخ داد. لطفا دوباره تلاش کنید."); // اگر ارور داد
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 w-full max-w-md relative shadow-2xl">
        {step === 1 ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-right"
            dir="rtl"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              درخواست مشاوره VIP
            </h3>

            <div>
              <label className="block text-gray-400 mb-2">
                نام و نام خانوادگی
              </label>
              <input
                required
                type="text"
                className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-3 focus:border-emerald-500 outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">شماره تماس</label>
              <input
                required
                type="tel"
                className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-3 focus:border-emerald-500 outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">
                میزان آشنایی با هوش مصنوعی
              </label>
              <div className="flex gap-2 justify-center">
                {["مبتدی", "متوسط", "حرفه‌ای"].map((lvl) => (
                  <button
                    type="button"
                    key={lvl}
                    onClick={() => setFormData({ ...formData, level: lvl })}
                    className={`flex-1 py-2 rounded-lg border transition ${
                      formData.level === lvl
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "bg-transparent border-gray-600 text-gray-400 hover:border-white"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                برگشت
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-900/50"
              >
                ثبت درخواست
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-10">
            <div className="text-emerald-500 text-6xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-white">درخواست شما ثبت شد</h3>
            <p className="text-gray-400 mt-2">به زودی با شما تماس می‌گیرم</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
