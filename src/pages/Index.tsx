import { useState, useEffect } from "react";
import Envelope from "@/components/Envelope";

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");

  // عداد تنازلي حتى تاريخ الزفاف (8 مايو 2026)
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
    const adminPhone = "966500000000"; // استبدله برقم جوالك لاستقبال التأكيدات
    const message = `السلام عليكم، تأكيد حضور دعوة زفاف علي شيخ حكي.\nالاسم: ${fullName}\nالجوال: ${phone}\nعدد المرافقين: ${guests}`;
    const url = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#111C2E] text-[#f4ecd8] font-arabic relative overflow-x-hidden select-none">
      {/* شاشة الظرف */}
      {!isOpen && <Envelope onOpen={() => setIsOpen(true)} />}

      {/* محتوى الموقع من جوه */}
      <div className={`transition-opacity duration-1000 ${isOpen ? "opacity-100" : "opacity-0"}`}>
        
        {/* البانر العلوي مع صورة العريس والعد التنازلي */}
        <header className="bg-[#111C2E] text-center pt-12 pb-10 px-4 relative border-b border-[#c5a059]/20">
          <p className="text-xs sm:text-sm text-[#c5a059] tracking-[0.2em] mb-2 uppercase">دعوة حفل زفاف</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#c5a059] mb-8 tracking-wider font-serif">عَلِي شَيْخ</h1>
          
          {/* صورة العريس الدائرية مع الإطار الذهبي الفاخر */}
          <div className="w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-full overflow-hidden border-[3px] border-[#c5a059] shadow-[0_0_25px_rgba(197,160,89,0.3)] mb-6 bg-[#1A2840]">
            <img src="/path-to-groom-photo.jpg" alt="العريس علي شيخ" className="w-full h-full object-cover" />
          </div>

          <div className="text-xs sm:text-sm space-y-1 text-[#c5a059] font-medium mb-6">
            <p>٢١ / ١١ / ١٤٤٧ هـ</p>
            <p>08 / May / 2026</p>
            <p className="text-white/70 text-[11px] pt-1">8:30 مساءً — 8:30 PM</p>
          </div>

          {/* العداد التنازلي */}
          <div className="flex justify-center gap-3 mt-4">
            {[
              { label: "ثانية", value: timeLeft.seconds },
              { label: "دقيقة", value: timeLeft.minutes },
              { label: "ساعة", value: timeLeft.hours },
              { label: "يوم", value: timeLeft.days },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#18263E] border border-[#c5a059]/30 rounded-xl py-2 px-3 w-16 text-center shadow-inner">
                <span className="block text-base font-bold text-[#c5a059]">{item.value}</span>
                <span className="block text-[9px] text-white/60">{item.label}</span>
              </div>
            ))}
          </div>
        </header>

        {/* محتوى الدعوة النصي (البطاقة الكريمة) */}
        <main className="max-w-xl mx-auto px-4 py-8 space-y-6">
          
          <div className="bg-[#faf8f5] text-[#2c2c2c] py-8 px-6 text-center rounded-2xl shadow-xl border border-[#c5a059]/30">
            <p className="text-xl text-[#c5a059] mb-6 font-serif">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            
            <p className="text-xs text-gray-500 mb-1">يشرّف</p>
            <h2 className="text-base font-bold text-[#1e293b] mb-1">الشيخ: حسين بن علي شيخ حكي</h2>
            <p className="text-[11px] text-gray-500 mb-5">بدعونكم وتشريفكم لحضور حفل زواج نجله</p>
            
            <h3 className="text-xl sm:text-2xl font-bold text-[#c5a059] mb-1 font-serif">علي بن حسين شيخ حكي</h3>
            <p className="text-[11px] text-gray-500 mb-1">على كريمة</p>
            <h4 className="text-sm font-bold text-[#1e293b] mb-5">الدكتور: ماجد بن ابراهيم الجوهري</h4>
            
            <div className="w-16 h-[1px] bg-[#c5a059]/40 mx-auto my-5"></div>
            
            <p className="text-[11px] text-[#c5a059] font-semibold mb-4">يوم الجمعة الموافق ٢١ . ١١ . ١٤٤٧ هـ</p>
            
            <div className="text-[11px] text-gray-600 space-y-1.5 leading-relaxed mb-5">
              <p className="font-medium">
                Sheikh: Hussein bin Ali Sheikh Hakami has the honor of inviting you to attend the wedding celebration of his son, Ali bin Hussein Sheikh Hakami, to the daughter of Dr. Majid bin Ibrahim Al-Jawhari
              </p>
              <p className="text-[#c5a059]">Friday 08 . May . 2026</p>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <p className="text-xs font-bold text-[#1e293b]">وحضوركم يمنحنا لنا الفرح والسرور</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Your presence brings us honor and great joy</p>
            </div>
          </div>

          {/* تفاصيل الحفل */}
          <div className="bg-[#faf8f5] text-[#2c2c2c] rounded-2xl p-6 shadow-xl border border-[#c5a059]/30">
            <h3 className="text-center text-[#c5a059] text-base font-bold mb-5 tracking-wide">تَفَاصِيلِ الحَفْل</h3>
            <div className="space-y-4">
              
              <div className="flex items-start gap-3 border-b border-gray-100 pb-3">
                <div className="text-lg bg-[#111C2E] text-[#c5a059] p-2.5 rounded-xl">📅</div>
                <div>
                  <h4 className="text-[10px] text-gray-400 font-semibold">التاريخ</h4>
                  <p className="text-xs font-bold text-gray-800">الجمعة ٢١ / ١١ / ١٤٤٧ هـ</p>
                  <p className="text-[10px] text-gray-500">Friday, May 8, 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-b border-gray-100 pb-3">
                <div className="text-lg bg-[#111C2E] text-[#c5a059] p-2.5 rounded-xl">⏰</div>
                <div>
                  <h4 className="text-[10px] text-gray-400 font-semibold">الزمن</h4>
                  <p className="text-xs font-bold text-gray-800">الساعة الثامنة والنصف - 8:30 م</p>
                  <p className="text-[10px] text-gray-500">Half past eight - 8:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-lg bg-[#111C2E] text-[#c5a059] p-2.5 rounded-xl">📍</div>
                <div>
                  <h4 className="text-[10px] text-gray-400 font-semibold">الموقع</h4>
                  <p className="text-xs font-bold text-gray-800">نادي وزارة الداخلية — جيزان</p>
                  <p className="text-[10px] text-gray-500 mb-1.5">Ministry of Interior Club, Jizan</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[11px] text-[#c5a059] font-semibold underline inline-block"
                  >
                    افتتح في الخرائط | Open in Maps
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* برنامج الحفل */}
          <div className="bg-[#faf8f5] text-[#2c2c2c] rounded-2xl p-6 shadow-xl border border-[#c5a059]/30">
            <h3 className="text-center text-[#c5a059] text-base font-bold mb-5 tracking-wide">بَرْنَامَج الحَفْل</h3>
            <div className="space-y-4 relative border-r-2 border-[#c5a059]/30 pr-3 mr-1">
              {[
                { time: "8:30 PM - ٨:٣٠ م", title: "استقبال الضيوف وبداية العرضة السعودية", desc: "Guest Reception & Start of the Saudi Ardah" },
                { time: "9:15 PM - ٩:١٥ م", title: "دخول العريس وبدء الزفة", desc: "Groom Entrance & Wedding Zaffa" },
                { time: "9:30 PM - ٩:٣٠ م", title: "السلام العام واستقبال المهنئين", desc: "General Greetings & Congratulations" },
                { time: "10:15 PM - ١٠:١٥ م", title: "حباكم العشاء", desc: "Dinner" },
                { time: "10:45 PM - ١٠:٤٥ م", title: "احتفال", desc: "Celebration" },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -right-[17px] top-1.5 w-2 h-2 rounded-full bg-[#c5a059] border-2 border-white"></div>
                  <span className="text-[10px] font-bold text-[#c5a059]">{item.time}</span>
                  <h4 className="font-bold text-gray-800 text-xs mt-0.5">{item.title}</h4>
                  <p className="text-[10px] text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* تأكيد الحضور */}
          <div className="bg-[#faf8f5] text-[#2c2c2c] rounded-2xl p-6 shadow-xl border border-[#c5a059]/30 mb-12">
            <h3 className="text-center text-[#c5a059] text-base font-bold mb-1">تأكيد الحضور</h3>
            <h4 className="text-center text-[10px] font-semibold text-gray-600 mb-1">CONFIRM ATTENDANCE</h4>
            <p className="text-center text-[10px] text-gray-400 mb-5">
              عبي البيانات ثم اضغط إرسال — سيتم فتح واتساب برسالة جاهزة
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-3.5 text-right" dir="rtl">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">الاسم الكامل Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="اكتب اسمك"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">رقم الجوال Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="05xxxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">عدد المرافقين Number of Guests</label>
                <select
                  required
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#c5a059] text-gray-700"
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
                className="w-full bg-[#111C2E] text-[#c5a059] font-bold py-3 rounded-xl transition-all hover:bg-[#1a2840] shadow-md flex items-center justify-center gap-2 text-xs mt-3 border border-[#c5a059]/30"
              >
                <span>إرسال التأكيد عبر واتساب</span>
                <span>✈️</span>
              </button>
            </form>
          </div>

        </main>
      </div>
    </div>
  );
}
