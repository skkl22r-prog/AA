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
      {!isOpen && <Envelope onOpen={() => setIsOpen(true)} />}

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
            <p className="text-5xl sm:text-6xl font-besm text-[#23385e] drop-shadow-sm text-center" dir="rtl">+</p>
          </div>

          <div className="w-full max-w-md bg-white text-[#2c2c2c] px-4 py-4 sm:py-5 text-center rounded-2xl shadow-xl border-2 border-[#c5a059]/50 flex flex-col justify-between my-2 flex-1 max-h-[66vh]">
            <div>
              <p className="text-xs sm:text-sm text-gray-500 mb-1">يشرّف</p>
              <h2 className="text-base sm:text-lg font-bold text-[#1e293b] mb-1">الشيخ: حسين بن علي شيخ حكي</h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-1.5">بدعوتكم وتشريفكم لحضور حفل زواج نجله</p>
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
                <p>Sheikh: Hussein bin Ali Sheikh Hakami has the honor of inviting you to attend the wedding celebration of his son, <span className="text-[#c5a059] font-bold">Ali bin Hussein Sheikh Hakami</span>, to the daughter of <span className="text-[#c5a059] font-bold">Dr. Majid bin Ibrahim Al-Jawhari</span></p>
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

        {/* ================= الصفحة الثالثة ================= */}
        <section className="min-h-[88vh] w-screen snap-start flex flex-col justify-end items-center px-4 pt-8 pb-3 bg-[#faf8f5]" dir="rtl">
          <div className="pt-2 mb-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#23385e] drop-shadow-sm text-center font-serif">تَفَاصِيلِ الحَفْل</h3>
            <p className="text-[10px] text-gray-500 tracking-[0.25em] text-center mt-1">EVENT DETAILS</p>
            <div className="w-12 h-[1px] bg-[#c5a059]/60 mx-auto mt-1.5"></div>
          </div>

          <div className="w-full max-w-md space-y-2.5 my-1 flex flex-col justify-start">
            <div className="bg-white text-[#2c2c2c] px-3 py-3 text-center rounded-2xl shadow-md border-2 border-[#c5a059]/60 flex flex-col items-center">
              <span className="text-[10px] text-[#c5a059] font-medium tracking-wide mb-1">التاريخ</span>
              <h4 className="text-sm sm:text-base font-bold text-[#23385e]">الجمعة ٢١ / ١١ / ١٤٤٧هـ</h4>
              <p className="text-[11px] text-gray-500 font-medium mt-1" dir="ltr">Friday, May 8, 2026</p>
            </div>

            <div className="bg-white text-[#2c2c2c] px-3 py-3 text-center rounded-2xl shadow-md border-2 border-[#c5a059]/60 flex flex-col items-center">
              <span className="text-[10px] text-[#c5a059] font-medium tracking-wide mb-1">الزمن</span>
              <h4 className="text-sm sm:text-base font-bold text-[#23385e]">الساعة الثامنة والنصف - ٨:٣٠ م</h4>
              <p className="text-[11px] text-gray-500 font-medium mt-1" dir="ltr">Half past eight - 8:30 PM</p>
            </div>

            <div className="bg-white text-[#2c2c2c] px-3 py-3 text-center rounded-2xl shadow-md border-2 border-[#c5a059]/60 flex flex-col items-center">
              <span className="text-[10px] text-[#c5a059] font-medium tracking-wide mb-1">الموقع</span>
              <h4 className="text-sm sm:text-base font-bold text-[#23385e]">نادي وزارة الداخلية — جيزان</h4>
              <p className="text-[11px] text-gray-500 font-medium mb-2">Ministry of Interior Club, Jizan</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-[11px] text-[#c5a059] font-bold underline mb-2 inline-block">
                افتتح في الخرائط | Open in Maps
              </a>
              <div className="w-full h-64 rounded-xl overflow-hidden border border-gray-200 shadow-inner relative mt-1">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.123!2d42.55!3d16.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUzJzI0LjAiTiA0MsKwMzMnMDAuMCJF!5e0!3m2!1sar!2ssa!4v1650000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" className="w-full h-full object-cover"></iframe>
              </div>
            </div>
          </div>
          <div className="pb-1 mt-4 flex justify-center"><span className="text-[#c5a059] text-xl animate-bounce font-bold">⌄</span></div>
        </section>

        {/* ================= الصفحة الرابعة ================= */}
        <section className="min-h-[88vh] w-screen snap-start flex flex-col justify-between items-center px-4 pt-3 pb-3 bg-[#faf8f5]" dir="rtl">
          <div className="w-full max-w-md flex flex-col items-center my-auto">
            <div className="text-center mb-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#23385e] drop-shadow-sm font-serif">بَرْنَامَج الحَفْل</h3>
              <p className="text-[10px] text-gray-500 tracking-[0.25em] mt-1">EVENT PROGRAM</p>
              <div className="w-12 h-[1px] bg-[#c5a059]/60 mx-auto mt-1.5"></div>
            </div>

            <div className="w-full bg-white text-[#2c2c2c] px-4 py-3 text-center rounded-2xl shadow-xl border-2 border-[#c5a059]/60 flex flex-col justify-around max-h-[72vh]">
              {[
                { timeAr: "٨:٣٠ م - PM 8:30", titleAr: "استقبال الضيوف وبداية العرضة السعودية", titleEn: "Guest Reception & Start of the Saudi Ardah" },
                { timeAr: "٩:١٠ م - PM 9:10", titleAr: "دخول العريس وبدء الزفة", titleEn: "Groom Entrance & Wedding Zaffa" },
                { timeAr: "٩:٣٠ م - PM 9:30", titleAr: "السلام العام واستقبال المهنئين", titleEn: "General Greetings & Congratulations" },
                { timeAr: "١٠:١٥ م - PM 10:15", titleAr: "حياكم عالعشاء", titleEn: "Dinner" },
                { timeAr: "١٠:٤٥ م - PM 10:45", titleAr: "احتفال", titleEn: "Celebration" }
              ].map((item, idx, arr) => (
                <div key={idx} className="py-1">
                  <p className="text-xs sm:text-sm font-bold text-[#c5a059]" dir="ltr">{item.timeAr}</p>
                  <h4 className="text-sm sm:text-base font-bold text-[#23385e] mt-0.5">{item.titleAr}</h4>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5" dir="ltr">{item.titleEn}</p>
                  {idx < arr.length - 1 && <div className="w-8 h-[1px] bg-[#c5a059]/40 mx-auto my-1.5"></div>}
                </div>
              ))}
            </div>
          </div>
          <div className="pb-1 flex justify-center"><span className="text-[#c5a059] text-xl animate-bounce font-bold">⌄</span></div>
        </section>

        {/* ================= الصفحة الخامسة (تأكيد الحضور - الزر أزرق) ================= */}
        <section className="min-h-[88vh] w-screen snap-start flex flex-col items-center px-4 pt-8 pb-6 bg-[#faf8f5]" dir="rtl">
          <div className="w-full max-w-md flex flex-col items-center">
            
            {/* العنوان */}
            <div className="text-center mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#23385e] drop-shadow-sm font-serif">
                تَأْكِيد الحُضُور
              </h3>
              <p className="text-[10px] text-gray-500 tracking-[0.25em] mt-1">CONFIRM ATTENDANCE</p>
              <div className="w-12 h-[1px] bg-[#c5a059]/60 mx-auto mt-2"></div>
            </div>

            {/* النص التوضيحي المطابق للصورة الثانية */}
            <div className="text-center mb-6 px-2">
              <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                عبّي البيانات ثم اضغط إرسال — سيتم فتح واتساب برسالة جاهزة.
              </p>
              <p className="text-[11px] text-gray-400 mt-1" dir="ltr">
                Fill in the details and press send — WhatsApp will open with a ready message.
              </p>
            </div>

            {/* النموذج */}
            <form onSubmit={handleWhatsAppSubmit} className="w-full space-y-4">
              
              {/* حقل الاسم الكامل */}
              <div className="w-full">
                <div className="flex justify-between items-end mb-1.5 px-1">
                  <label className="text-sm font-bold text-[#23385e]">الاسم الكامل</label>
                  <span className="text-[10px] text-gray-400 font-sans">Full Name</span>
                </div>
                <div className="bg-white border border-[#c5a059]/30 rounded-2xl py-3.5 px-4 flex items-center shadow-sm">
                  <svg className="w-4 h-4 text-gray-400 ml-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <input
                    type="text"
                    required
                    placeholder="اكتب اسمك"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-transparent text-sm text-[#2c2c2c] focus:outline-none placeholder-gray-300 text-right"
                  />
                </div>
              </div>

              {/* حقل رقم الجوال */}
              <div className="w-full">
                <div className="flex justify-between items-end mb-1.5 px-1">
                  <label className="text-sm font-bold text-[#23385e]">رقم الجوال</label>
                  <span className="text-[10px] text-gray-400 font-sans">Phone Number</span>
                </div>
                <div className="bg-white border border-[#c5a059]/30 rounded-2xl py-3.5 px-4 flex items-center shadow-sm">
                  <svg className="w-4 h-4 text-gray-400 ml-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <input
                    type="tel"
                    required
                    placeholder="05xxxxxxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-transparent text-sm text-[#2c2c2c] focus:outline-none placeholder-gray-300 text-right"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* حقل عدد المرافقين */}
              <div className="w-full">
                <div className="flex justify-between items-end mb-1.5 px-1">
                  <label className="text-sm font-bold text-[#23385e]">عدد المرافقين</label>
                  <span className="text-[10px] text-gray-400 font-sans">Number of Guests</span>
                </div>
                <div className="bg-white border border-[#c5a059]/30 rounded-2xl py-3.5 px-4 flex items-center shadow-sm">
                  <svg className="w-4 h-4 text-gray-400 ml-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <select
                    required
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-transparent text-sm text-[#2c2c2c] focus:outline-none text-right cursor-pointer"
                  >
                    <option value="" disabled>اختر</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>

              {/* النص فوق الزر وزر الإرسال (أزرق) ونصه بالأسفل تماماً */}
              <div className="pt-2 flex flex-col items-center">
                <span className="text-xs text-gray-600 mb-2 font-medium">سيتم فتح واتساب — اضغط "إرسال" لتأكيد حضورك.</span>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#23385e] to-[#3a5a94] text-white font-bold py-4 rounded-2xl transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                  </svg>
                  <span>إرسال التأكيد عبر واتساب</span>
                </button>
                <span className="text-[10px] text-gray-400 mt-2">Confirm via WhatsApp</span>
              </div>

            </form>
          </div>
        </section>

      </div>
    </div>
  );
}
