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
    <div className="h-screen w-screen bg-[#111C2E] text-[#f4ecd8] font-arabic overflow-y-scroll snap-y snap-mandatory scrollbar-none select-none relative">
      {/* شاشة الظرف */}
      {!isOpen && <Envelope onOpen={() => setIsOpen(true)} />}

      {/* محتوى الموقع مقسم كصفحات كاملة (Snap Sections) */}
      <div className={`transition-opacity duration-1000 h-full w-full ${isOpen ? "opacity-100" : "opacity-0"}`}>
        
        {/* ================= الصفحة الأولى (مطابقة تماماً للصورة بدون دائرة للعريس مع الترتيب والزخرفة) ================= */}
        <section className="h-screen w-screen snap-start flex flex-col justify-between items-center text-center pt-6 pb-6 px-4 bg-[#111C2E] relative overflow-hidden border-b border-[#c5a059]/20">
          
          {/* الزخرفة الكبيرة بالخلفية */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 select-none">
            <span className="text-[12vw] font-serif text-[#c5a059] whitespace-nowrap">علي شيخ</span>
          </div>

          <div className="w-full relative z-10 flex flex-col items-center">
            <p className="text-xs sm:text-sm text-[#c5a059] tracking-[0.2em] mb-2 uppercase">دعوة حفل زفاف</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#c5a059] mb-2 tracking-wider font-serif">عَلِي شَيْخ</h1>
          </div>

          {/* صورة العريس بالطبيعة بدون دائرة (تأخذ مساحة متناسقة وشكل فخم) */}
          <div className="w-64 sm:w-72 h-auto max-h-[50vh] relative z-10 flex items-end justify-center">
            <img src={groomImg} alt="العريس علي شيخ" className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
          </div>

          <div className="w-full relative z-10 space-y-3">
            <div className="text-xs sm:text-sm space-y-1 text-[#c5a059] font-medium">
              <p>٢١ . ١١ . ١٤٤٧ هـ</p>
              <p>08 . May . 2026</p>
              <p className="text-white/80 text-[11px]">8:30 مساءً</p>
            </div>

            {/* العداد التنازلي */}
            <div className="flex justify-center gap-2 pt-1">
              {[
                { label: "ثانية", value: timeLeft.seconds },
                { label: "دقيقة", value: timeLeft.minutes },
                { label: "ساعة", value: timeLeft.hours },
                { label: "يوم", value: timeLeft.days },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#18263E]/80 border border-[#c5a059]/30 rounded-xl py-1.5 px-2.5 w-14 text-center shadow-inner">
                  <span className="block text-sm font-bold text-[#c5a059]">{item.value}</span>
                  <span className="block text-[8px] text-white/60">{item.label}</span>
                </div>
              ))}
            </div>

            {/* الخط الذهبي بنهاية الصفحة الأولى */}
            <div className="w-full pt-3 flex flex-col items-center">
              <span className="text-[9px] text-[#c5a059]/70 mb-1 animate-bounce">اسحب لأسفل للتفاصيل ↓</span>
              <div className="w-32 h-[2px] bg-[#c5a059] mx-auto rounded-full shadow-[0_0_10px_#c5a059]"></div>
            </div>
          </div>
        </section>

        {/* ================= الصفحة الثانية (بطاقة الدعوة الكريمة) ================= */}
        <section className="h-screen w-screen snap-start flex items-center justify-center px-4 bg-[#111C2E]">
          <div className="w-full max-w-md bg-[#faf8f5] text-[#2c2c2c] py-6 px-5 text-center rounded-2xl shadow-2xl border border-[#c5a059]/30">
            <p className="text-lg text-[#c5a059] mb-4 font-serif">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            
            <p className="text-[11px] text-gray-500 mb-0.5">يشرّف</p>
            <h2 className="text-sm font-bold text-[#1e293b] mb-0.5">الشيخ: حسين بن علي شيخ حكي</h2>
            <p className="text-[10px] text-gray-500 mb-3">بدعونكم وتشريفكم لحضور حفل زواج نجله</p>
            
            <h3 className="text-lg sm:text-xl font-bold text-[#c5a059] mb-0.5 font-serif">علي بن حسين شيخ حكي</h3>
            <p className="text-[10px] text-gray-500 mb-0.5">على كريمة</p>
            <h4 className="text-xs font-bold text-[#1e293b] mb-3">الدكتور: ماجد بن ابراهيم الجوهري</h4>
            
            <div className="w-12 h-[1px] bg-[#c5a059]/40 mx-auto my-3"></div>
            
            <p className="text-[10px] text-[#c5a059] font-semibold mb-2">يوم الجمعة الموافق ٢١ . ١١ . ١٤٤٧ هـ</p>
            
            <div className="text-[10px] text-gray-600 space-y-1 leading-relaxed mb-3">
              <p className="font-medium">
                Sheikh: Hussein bin Ali Sheikh Hakami has the honor of inviting you to attend the wedding celebration of his son...
              </p>
            </div>

            <div className="border-t border-gray-200 pt-3">
              <p className="text-[11px] font-bold text-[#1e293b]">وحضوركم يمنحنا لنا الفرح والسرور</p>
            </div>
          </div>
        </section>

        {/* ================= الصفحة الثالثة (تفاصيل الحفل) ================= */}
        <section className="h-screen w-screen snap-start flex items-center justify-center px-4 bg-[#111C2E]">
          <div className="w-full max-w-md bg-[#faf8f5] text-[#2c2c2c] rounded-2xl p-6 shadow-2xl border border-[#c5a059]/30">
            <h3 className="text-center text-[#c5a059] text-base font-bold mb-4 tracking-wide">تَفَاصِيلِ الحَفْل</h3>
            <div className="space-y-3">
              
              <div className="flex items-start gap-3 border-b border-gray-100 pb-2.5">
                <div className="text-base bg-[#111C2E] text-[#c5a059] p-2 rounded-xl">📅</div>
                <div>
                  <h4 className="text-[9px] text-gray-400 font-semibold">التاريخ</h4>
                  <p className="text-xs font-bold text-gray-800">الجمعة ٢١ / ١١ / ١٤٤٧ هـ</p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-b border-gray-100 pb-2.5">
                <div className="text-base bg-[#111C2E] text-[#c5a059] p-2 rounded-xl">⏰</div>
                <div>
                  <h4 className="text-[9px] text-gray-400 font-semibold">الزمن</h4>
                  <p className="text-xs font-bold text-gray-800">الساعة الثامنة والنصف - 8:30 م</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-base bg-[#111C2E] text-[#c5a059] p-2 rounded-xl">📍</div>
                <div>
                  <h4 className="text-[9px] text-gray-400 font-semibold">الموقع</h4>
                  <p className="text-xs font-bold text-gray-800">نادي وزارة الداخلية — جيزان</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[10px] text-[#c5a059] font-semibold underline inline-block mt-1"
                  >
                    افتتح في الخرائط | Open in Maps
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= الصفحة الرابعة (برنامج الحفل) ================= */}
        <section className="h-screen w-screen snap-start flex items-center justify-center px-4 bg-[#111C2E]">
          <div className="w-full max-w-md bg-[#faf8f5] text-[#2c2c2c] rounded-2xl p-6 shadow-2xl border border-[#c5a059]/30">
            <h3 className="text-center text-[#c5a059] text-base font-bold mb-4 tracking-wide">بَرْنَامَج الحَفْل</h3>
            <div className="space-y-3 relative border-r-2 border-[#c5a059]/30 pr-3 mr-1">
              {[
                { time: "8:30 PM - ٨:٣٠ م", title: "استقبال الضيوف وبداية العرضة السعودية" },
                { time: "9:15 PM - ٩:١٥ م", title: "دخول العريس وبدء الزفة" },
                { time: "9:30 PM - ٩:٣٠ م", title: "السلام العام واستقبال المهنئين" },
                { time: "10:15 PM - ١٠:١٥ م", title: "حباكم العشاء" },
                { time: "10:45 PM - ١٠:٤٥ م", title: "احتفال" },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -right-[17px] top-1.5 w-2 h-2 rounded-full bg-[#c5a059] border-2 border-white"></div>
                  <span className="text-[9px] font-bold text-[#c5a059]">{item.time}</span>
                  <h4 className="font-bold text-gray-800 text-xs mt-0.5">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= الصفحة الخامسة (تأكيد الحضور عبر الواتساب) ================= */}
        <section className="h-screen w-screen snap-start flex items-center justify-center px-4 bg-[#111C2E]">
          <div className="w-full max-w-md bg-[#faf8f5] text-[#2c2c2c] rounded-2xl p-5 shadow-2xl border border-[#c5a059]/30">
            <h3 className="text-center text-[#c5a059] text-sm font-bold mb-0.5">تأكيد الحضور</h3>
            <p className="text-center text-[9px] text-gray-400 mb-3">
              عبي البيانات ثم اضغط إرسال — سيتم فتح واتساب برسالة جاهزة
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-2.5 text-right" dir="rtl">
              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1">الاسم الكامل Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="اكتب اسمك"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#c5a059]"
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
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1">عدد المرافقين Number of Guests</label>
                <select
                  required
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#c5a059] text-gray-700"
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
                className="w-full bg-[#111C2E] text-[#c5a059] font-bold py-2.5 rounded-xl transition-all hover:bg-[#1a2840] shadow-md flex items-center justify-center gap-2 text-xs mt-2 border border-[#c5a059]/30"
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
