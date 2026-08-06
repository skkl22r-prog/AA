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

        {/* ================= الصفحة الثالثة ================= */}
        <section className="min-h-[88vh] w-screen snap-start flex flex-col justify-between items-center px-4 pt-4 pb-3 bg-[#faf8f5]" dir="rtl">
          <div className="pt-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#23385e] drop-shadow-sm text-center font-serif">
              تَفَاصِيلِ الحَفْل
            </h3>
            <p className="text-[10px] text-gray-500 tracking-[0.25em] text-center mt-1">EVENT DETAILS</p>
            <div className="w-12 h-[1px] bg-[#c5a059]/60 mx-auto mt-1.5"></div>
          </div>

          <div className="w-full max-w-md space-y-2.5 my-1 flex-1 flex flex-col justify-start pt-2 max-h-[70vh] overflow-y-auto scrollbar-none">
            
            <div className="bg-white text-[#2c2c2c] px-3 py-3 text-center rounded-2xl shadow-md border-2 border-[#c5a059]/60 flex flex-col items-center">
              <svg className="w-5 h-5 text-[#c5a059] mb-1" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="text-[10px] text-[#c5a059] font-medium tracking-wide mb-1">التاريخ</span>
              <h4 className="text-sm sm:text-base font-bold text-[#23385e]">الجمعة ٢١ / ١١ / ١٤٤٧هـ</h4>
              
              <div className="flex items-center justify-center gap-2 my-1.5 w-full">
                <span className="w-6 h-[1px] bg-[#c5a059]/50"></span>
                <span className="text-[#c5a059] text-[10px]">✦</span>
                <span className="w-6 h-[1px] bg-[#c5a059]/50"></span>
              </div>

              <p className="text-[11px] text-gray-500 font-medium" dir="ltr">Friday, May 8, 2026</p>
            </div>

            <div className="bg-white text-[#2c2c2c] px-3 py-3 text-center rounded-2xl shadow-md border-2 border-[#c5a059]/60 flex flex-col items-center">
              <svg className="w-5 h-5 text-[#c5a059] mb-1" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9"></circle>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3"></path>
              </svg>
              <span className="text-[10px] text-[#c5a059] font-medium tracking-wide mb-1">الزمن</span>
              <h4 className="text-sm sm:text-base font-bold text-[#23385e]">الساعة الثامنة والنصف - ٨:٣٠ م</h4>
              
              <div className="flex items-center justify-center gap-2 my-1.5 w-full">
                <span className="w-6 h-[1px] bg-[#c5a059]/50"></span>
                <span className="text-[#c5a059] text-[10px]">✦</span>
                <span className="w-6 h-[1px] bg-[#c5a059]/50"></span>
              </div>

              <p className="text-[11px] text-gray-500 font-medium" dir="ltr">Half past eight - 8:30 PM</p>
            </div>

            <div className="bg-white text-[#2c2c2c] px-3 py-3 text-center rounded-2xl shadow-md border-2 border-[#c5a059]/60 flex flex-col items-center">
              <svg className="w-5 h-5 text-[#c5a059] mb-1" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span className="text-[10px] text-[#c5a059] font-medium tracking-wide mb-1">الموقع</span>
              <h4 className="text-sm sm:text-base font-bold text-[#23385e]">نادي وزارة الداخلية — جيزان</h4>
              
              <div className="flex items-center justify-center gap-2 my-1.5 w-full">
                <span className="w-6 h-[1px] bg-[#c5a059]/50"></span>
                <span className="text-[#c5a059] text-[10px]">✦</span>
                <span className="w-6 h-[1px] bg-[#c5a059]/50"></span>
              </div>

              <p className="text-[11px] text-gray-500 font-medium mb-2">Ministry of Interior Club, Jizan</p>
              
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-[11px] text-[#c5a059] font-bold underline mb-2 inline-block"
              >
                افتتح في الخرائط | Open in Maps
              </a>

              <div className="w-full h-24 sm:h-28 rounded-xl overflow-hidden border border-gray-200 shadow-inner relative mt-1">
                <iframe
                  title="موقع نادي وزارة الداخلية جيزان"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.123456789!2d42.55!3d16.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUzJzI0LjAiTiA0MsKwMzMnMDAuMCJF!5e0!3m2!1sar!2ssa!4v1650000000000!5m2!1sar!2ssa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="w-full h-full object-cover filter contrast-125"
                ></iframe>
              </div>
            </div>

          </div>

          <div className="pb-1 flex justify-center">
            <span className="text-[#c5a059] text-xl animate-bounce font-bold">⌄</span>
          </div>
        </section>

        {/* ================= الصفحة الرابعة (معالجة الترتيب والتناسق العام للمحتوى) ================= */}
        <section className="min-h-[88vh] w-screen snap-start flex flex-col justify-between items-center px-4 pt-5 pb-3 bg-[#faf8f5]" dir="rtl">
          
          {/* العنوان مع توسيط متناسق ومسافة علوية مريحة */}
          <div className="pt-2 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#23385e] drop-shadow-sm font-serif">
              بَرْنَامَج الحَفْل
            </h3>
            <p className="text-[10px] text-gray-500 tracking-[0.25em] mt-1">EVENT PROGRAM</p>
            <div className="w-12 h-[1px] bg-[#c5a059]/60 mx-auto mt-1.5"></div>
          </div>

          {/* المربع مع توزيع داخلي متزن وبدون فراغات مبالغ فيها */}
          <div className="w-full max-w-md bg-white text-[#2c2c2c] px-4 py-3.5 text-center rounded-2xl shadow-xl border-2 border-[#c5a059]/60 my-auto flex flex-col justify-around max-h-[72vh]">
            {[
              {
                timeAr: "٨:٣٠ م - PM 8:30",
                titleAr: "استقبال الضيوف وبداية العرضة السعودية",
                titleEn: "Guest Reception & Start of the Saudi Ardah"
              },
              {
                timeAr: "٩:١٠ م - PM 9:10",
                titleAr: "دخول العريس وبدء الزفة",
                titleEn: "Groom Entrance & Wedding Zaffa"
              },
              {
                timeAr: "٩:٣٠ م - PM 9:30",
                titleAr: "السلام العام واستقبال المهنئين",
                titleEn: "General Greetings & Congratulations"
              },
              {
                timeAr: "١٠:١٥ م - PM 10:15",
                titleAr: "حباكم عالدشاء",
                titleEn: "Dinner"
              },
              {
                timeAr: "١٠:٤٥ م - PM 10:45",
                titleAr: "احتفال",
                titleEn: "Celebration"
              }
            ].map((item, idx, arr) => (
              <div key={idx} className="py-1">
                <p className="text-xs sm:text-sm font-bold text-[#c5a059]" dir="ltr">
                  {item.timeAr}
                </p>
                <h4 className="text-sm sm:text-base font-bold text-[#23385e] mt-0.5">
                  {item.titleAr}
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5" dir="ltr">
                  {item.titleEn}
                </p>

                {/* الفاصل الذهبي بين الفقرات */}
                {idx < arr.length - 1 && (
                  <div className="flex items-center justify-center gap-2 my-1.5">
                    <span className="w-8 h-[1px] bg-[#c5a059]/40"></span>
                    <span className="text-[#c5a059] text-[10px]">✦</span>
                    <span className="w-8 h-[1px] bg-[#c5a059]/40"></span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pb-1 flex justify-center">
            <span className="text-[#c5a059] text-xl animate-bounce font-bold">⌄</span>
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
