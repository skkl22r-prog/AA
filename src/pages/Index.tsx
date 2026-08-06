import { useState, useEffect } from "react";
import Envelope from "@/components/Envelope";
import groomImg from "@/assets/E6546B44-EA2C-4D54-BA9E-74BD96B32702.png";

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-05-08T20:30:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const adminPhone = "966500000000";
    const message = `السلام عليكم، تأكيد حضور دعوة زفاف علي شيخ حكي.\nالاسم: ${fullName}\nالجوال: ${phone}\nعدد المرافقين: ${guests}`;
    const url = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="h-screen w-screen bg-[#faf8f5] text-[#2c2c2c] font-arabic overflow-y-scroll snap-y snap-mandatory scrollbar-none select-none relative">
      {/* شاشة الظرف */}
      {!isOpen && <Envelope onOpen={() => setIsOpen(true)} />}

      {/* محتوى الموقع مقسم كصفحات كاملة ثابتة بحجم الشاشة */}
      <div className={`transition-opacity duration-1000 h-full w-full ${isOpen ? "opacity-100" : "opacity-0"}`}>
        
        {/* ================= الصفحة الأولى ================= */}
        <section className="min-h-[88vh] w-screen snap-start relative flex flex-col justify-between items-center text-center pt-2 pb-2 px-3 bg-[#111C2E] text-[#f4ecd8] overflow-hidden">
          
          <div className="w-full relative z-30 shrink-0 mt-6 sm:mt-8 pt-2">
            <p className="text-xs text-[#c5a059] font-light tracking-[0.3em] uppercase opacity-90 mb-2">دعوة حفل زفاف</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wider font-serif drop-shadow-md my-2.5">عَلِي شَيْخ</h1>
            <div className="flex items-center justify-center gap-2.5 mt-2.5">
              <span className="w-8 h-[1px] bg-[#c5a059]/70"></span>
              <span className="text-[#c5a059] text-xs">✦</span>
              <span className="w-8 h-[1px] bg-[#c5a059]/70"></span>
            </div>
          </div>

          <div className="w-full flex-1 relative z-20 flex items-center justify-center -mt-2">
            <img 
              src={groomImg} 
              alt="العريس علي شيخ" 
              className="w-full h-full max-h-[68vh] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]" 
              style={{
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)"
              }}
            />

            <div className="absolute bottom-1 z-30 w-full flex flex-col items-center pointer-events-none">
              <div className="text-sm sm:text-base space-y-0.5 text-[#c5a059] font-semibold mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                <p className="tracking-wide text-white">٢١ . ١١ . ١٤٤٧ هـ</p>
                <p className="tracking-wide text-[#c5a059]">08 . May . 2026</p>
                <p className="text-white/90 text-xs">8:30 مساءً</p>
              </div>

              <div className="flex justify-center gap-2.5">
                {[
                  { label: "ثانية", value: timeLeft.seconds },
                  { label: "دقيقة", value: timeLeft.minutes },
                  { label: "ساعة", value: timeLeft.hours },
                  { label: "يوم", value: timeLeft.days },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#111C2E]/95 backdrop-blur-md border border-[#c5a059]/70 rounded-xl py-2 px-3 w-16 sm:w-20 text-center shadow-2xl">
                    <span className="block text-lg sm:text-xl font-bold text-[#c5a059]">{item.value}</span>
                    <span className="block text-[10px] sm:text-xs text-white/90 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full shrink-0 relative z-30 pb-0.5 mt-1">
            <span className="text-[10px] text-[#c5a059] font-medium animate-bounce block">اسحب لأسفل للتفاصيل ↓</span>
          </div>
        </section>

        {/* ================= الصفحة الثانية ================= */}
        <section className="min-h-[88vh] w-screen snap-start flex flex-col justify-between items-center px-4 pt-4 pb-3 bg-[#faf8f5]">
          <div className="pt-3">
            <p className="text-5xl sm:text-6xl font-besm text-[#23385e] drop-shadow-sm text-center" dir="rtl">
              +
            </p>
          </div>

          <div className="w-full max-w-md bg-white text-[#2c2c2c] px-4 py-4 sm:py-5 text-center rounded-2xl shadow-xl border-2 border-[#c5a059]/50 flex flex-col justify-between my-2 flex-1 max-h-[66vh]">
            <div>
              <p className="text-xs sm:text-sm text-gray-500 mb-1">يشرّف</p>
              <h2 className="text-base sm:text-lg font-bold text-[#1e293b] mb-1">الشيخ: حسين بن علي شيخ حكي</h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-1.5">بدعونكم وتشريفكم لحضور حفل زواج نجله</p>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#c5a059] mb-1 font-serif">علي بن حسين شيخ حكي</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-1">على كريمة</p>
              <h4 className="text-sm sm:text-base font-bold text-[#1e293b] mb-1.5">الدكتور: ماجد بن ابراهيم الجوهري</h4>
            </div>
            
            <div className="flex items-center justify-center gap-2 my-1">
              <span className="w-8 h-[1px] bg-[#23385e]/40"></span>
              <span className="w-2 h-2 rounded-full bg-[#23385e]"></span>
              <span className="w-8 h-[1px] bg-[#23385e]/40"></span>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-[#c5a059] font-bold mb-1.5">يوم الجمعة الموافق ٢١ . ١١ . ١٤٤٧ هـ</p>
              
              <div className="text-[11px] sm:text-xs text-gray-700 space-y-1 leading-relaxed font-medium" dir="ltr">
                <p>
                  Sheikh: Hussein bin Ali Sheikh Hakami has the honor of inviting you to attend the wedding celebration of his son, <span className="text-[#c5a059] font-bold">Ali bin Hussein Sheikh Hakami</span>, to the daughter of <span className="text-[#c5a059] font-bold">Dr. Majid bin Ibrahim Al-Jawhari</span>
                </p>
                <p className="text-[#c5a059] font-bold pt-0.5">Friday 08 . May . 2026</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 my-1">
              <span className="w-8 h-[1px] bg-[#23385e]/40"></span>
              <span className="w-2 h-2 rounded-full bg-[#23385e]"></span>
              <span className="w-8 h-[1px] bg-[#23385e]/40"></span>
            </div>

            <div className="space-y-0.5" dir="rtl">
              <p className="text-xs sm:text-sm font-bold text-[#1e293b]">وبحضوركم يتم لنا الفرح والسرور</p>
              <p className="text-[10px] sm:text-xs text-gray-500" dir="ltr">Your presence brings us honor and great joy</p>
            </div>
          </div>

          <div className="pb-1 flex justify-center">
            <span className="text-[#c5a059] text-xl animate-bounce font-bold">⌄</span>
          </div>
        </section>

        {/* ================= الصفحة الثالثة (تفاصيل الحفل المحدثة) ================= */}
        <section className="min-h-[88vh] w-screen snap-start flex flex-col items-center justify-between px-4 py-4 bg-[#faf8f5]" dir="rtl">
          
          <div className="w-full text-center pt-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#23385e] drop-shadow-sm font-serif">تَفَاصِيلِ الحَفْل</h1>
            <p className="text-xs text-gray-500 tracking-[0.2em] mt-1">EVENT DETAILS</p>
            <div className="w-16 h-[1px] bg-[#c5a059] mx-auto mt-2"></div>
          </div>

          <div className="w-full max-w-md space-y-2.5 my-auto">
            
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-[#c5a059] text-xl">📅</span>
                <h4 className="text-[10px] font-semibold text-gray-400 tracking-widest">التاريخ</h4>
              </div>
              <p className="text-base sm:text-lg font-bold text-[#23385e]">الجمعة ٢١ / ١١ / ١٤٤٧هـ</p>
              <p className="text-[11px] text-gray-500 mt-1 font-medium" dir="ltr">Friday, May 8, 2026</p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-[#c5a059] text-xl">⏰</span>
                <h4 className="text-[10px] font-semibold text-gray-400 tracking-widest">الزمن</h4>
              </div>
              <p className="text-base sm:text-lg font-bold text-[#23385e]">الساعة الثامنة والنصف - ٨:٣٠ م</p>
              <p className="text-[11px] text-gray-500 mt-1 font-medium" dir="ltr">Half past eight - 8:30 PM</p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-[#c5a059] text-xl">📍</span>
                <h4 className="text-[10px] font-semibold text-gray-400 tracking-widest">الموقع</h4>
              </div>
              <p className="text-base sm:text-lg font-bold text-[#23385e]">نادي وزارة الداخلية — جيزان</p>
              <p className="text-[11px] text-gray-500 mt-1 font-medium">Ministry of Interior Club, Jizan</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-[11px] text-[#c5a059] font-semibold underline mt-2 inline-block"
              >
                افتتح في الخرائط | Open in Maps
              </a>
            </div>

          </div>

          <div className="w-full pb-1 flex justify-center">
            <span className="text-[#c5a059] text-xl animate-bounce font-bold">⌄</span>
          </div>
        </section>

        {/* ================= الصفحة الرابعة (برنامج الحفل) ================= */}
        <section className="min-h-[88vh] w-screen snap-start flex items-center justify-center px-4 bg-[#faf8f5]">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg border border-gray-200/70">
            <h3 className="text-center text-[#c5a059] text-base font-bold mb-5 tracking-wide">بَرْنَامَج الحَفْل</h3>
            <div className="space-y-4 relative border-r-2 border-[#23385e]/20 pr-4 mr-2 text-right" dir="rtl">
              {[
                { time: "8:30 PM - ٨:٣٠ م", title: "استقبال الضيوف وبداية العرضة السعودية" },
                { time: "9:15 PM - ٩:١٥ م", title: "دخول العريس وبدء الزفة" },
                { time: "9:30 PM - ٩:٣٠ م", title: "السلام العام واستقبال المهنئين" },
                { time: "10:15 PM - ١٠:١٥ م", title: "حباكم العشاء" },
                { time: "10:45 PM - ١٠:٤٥ م", title: "احتفال" },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -right-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#23385e] border-2 border-white"></div>
                  <span className="text-[9px] font-bold text-[#c5a059]">{item.time}</span>
                  <h4 className="font-bold text-gray-800 text-xs mt-0.5">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= الصفحة الخامسة (تأكيد الحضور عبر الواتساب) ================= */}
        <section className="min-h-[88vh] w-screen snap-start flex items-center justify-center px-4 bg-[#faf8f5]">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg border border-gray-200/70">
            <h3 className="text-center text-[#c5a059] text-sm font-bold mb-1">تأكيد الحضور</h3>
            <p className="text-center text-[9px] text-gray-400 mb-4">
              عبي البيانات ثم اضغط إرسال — سيتم فتح واتساب برسالة جاهزة
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-3 text-right" dir="rtl">
              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1">الاسم الكامل Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="اكتب اسمك"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 bg-[#faf8f5] border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1">رقم الجوال Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="05xxxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-[#faf8f5] border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1">عدد المرافقين Number of Guests</label>
                <select
                  required
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2 bg-[#faf8f5] border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#c5a059] text-gray-700"
                >
                  <option value="" disabled>اختر</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#111C2E] text-[#c5a059] font-bold py-2.5 rounded-xl transition-all hover:bg-[#1a2840] shadow-md flex items-center justify-center gap-2 text-xs mt-3 border border-[#c5a059]/30"
              >
                <span>إرسال التأكيد عبر واتساب</span>
                <span>✈️</span>
              </button>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
}
