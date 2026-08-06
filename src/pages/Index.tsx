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
        
        {/* ================= الصفحة الأولى (كما طلبتها سابقاً) ================= */}
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

        {/* ================= الصفحة الثانية (المعدلة بالكامل لتطابق الصورة) ================= */}
        <section className="min-h-[88vh] w-screen snap-start flex flex-col justify-center items-center px-4 bg-[#faf8f5] pt-4 pb-2">
          {/* البسملة بخط كبير وزخرفة فوق المربع باللون الأزرق */}
          <p className="text-2xl sm:text-3xl font-serif text-[#4a6b59] mb-5 drop-shadow-sm" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          {/* المربع الأبيض بحدود خفيفة وظل */}
          <div className="w-full max-w-md bg-white text-[#2c2c2c] p-6 text-center rounded-2xl shadow-lg border border-gray-100">
            {/* النصوص داخل المربع بالذهبي والزخارف بالأزرق */}
            <p className="text-xs text-gray-500 mb-1">يشرّف</p>
            <h2 className="text-sm font-bold text-[#1e293b] mb-1">الشيخ: حسين بن علي شيخ حكي</h2>
            <p className="text-[10px] text-gray-500 mb-4">بدعونكم وتشريفكم لحضور حفل زواج نجله</p>
            
            <h3 className="text-lg font-bold text-[#c5a059] mb-1 font-serif">علي بن حسين شيخ حكي</h3>
            <p className="text-[10px] text-gray-500 mb-1">على كريمة</p>
            <h4 className="text-xs font-bold text-[#1e293b] mb-4">الدكتور: ماجد بن ابراهيم الجوهري</h4>
            
            <div className="w-16 h-3 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgMzAgNiI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiIGZpbGw9IiMyMzM4NWUiLz48Y2lyY2xlIGN4PSIxNSIgY3k9IjMiIHI9IjMiIGZpbGw9IiMyMzM4NWUiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjMiIHI9IjMiIGZpbGw9IiMyMzM4NWUiLz48L3N2Zz4=')] bg-center bg-no-repeat mx-auto mb-4 opacity-50"></div>

            <p className="text-xs text-[#c5a059] font-semibold mb-3">يوم الجمعة الموافق ٢١ . ١١ . ١٤٤٧ هـ</p>
            
            <div className="text-[10px] text-gray-600 space-y-1.5 leading-relaxed mb-4 font-medium">
              <p>
                Sheikh: Hussein bin Ali Sheikh Hakami has the honor of inviting you to attend the wedding celebration of his son, <span className="text-[#c5a059] font-bold">Ali bin Hussein Sheikh Hakami</span>, to the daughter of <span className="text-[#c5a059] font-bold">Dr. Majid bin Ibrahim Al-Jawhari</span>
              </p>
              <p className="text-[#c5a059] font-semibold pt-1">Friday 08 . May . 2026</p>
            </div>

            <div className="w-16 h-3 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgMzAgNiI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiIGZpbGw9IiMyMzM4NWUiLz48Y2lyY2xlIGN4PSIxNSIgY3k9IjMiIHI9IjMiIGZpbGw9IiMyMzM4NWUiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjMiIHI9IjMiIGZpbGw9IiMyMzM4NWUiLz48L3N2Zz4=')] bg-center bg-no-repeat mx-auto mb-4 opacity-50"></div>

            <div className="space-y-1">
              <p className="text-[11px] font-bold text-[#1e293b]">وبحضوركم يتم لنا الفرح والسرور</p>
              <p className="text-[9px] text-gray-500">Your presence brings us honor and great joy</p>
            </div>
          </div>
        </section>

        {/* ================= الصفحة الثالثة (تفاصيل الحفل - بنفس الألوان) ================= */}
        <section className="min-h-[88vh] w-screen snap-start flex items-center justify-center px-4 bg-[#faf8f5]">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-center text-[#c5a059] text-base font-bold mb-5 tracking-wide">تَفَاصِيلِ الحَفْل</h3>
            <div className="space-y-4 text-right" dir="rtl">
              <div className="flex items-start gap-3 border-b border-gray-100 pb-4">
                <div className="text-base bg-[#faf8f5] text-[#23385e] p-2.5 rounded-xl">📅</div>
                <div>
                  <h4 className="text-[10px] text-gray-400 font-semibold">التاريخ</h4>
                  <p className="text-xs font-bold text-gray-800">الجمعة ٢١ / ١١ / ١٤٤٧ هـ</p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-b border-gray-100 pb-4">
                <div className="text-base bg-[#faf8f5] text-[#23385e] p-2.5 rounded-xl">⏰</div>
                <div>
                  <h4 className="text-[10px] text-gray-400 font-semibold">الزمن</h4>
                  <p className="text-xs font-bold text-gray-800">الساعة الثامنة والنصف - 8:30 م</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-base bg-[#faf8f5] text-[#23385e] p-2.5 rounded-xl">📍</div>
                <div>
                  <h4 className="text-[10px] text-gray-400 font-semibold">الموقع</h4>
                  <p className="text-xs font-bold text-gray-800">نادي وزارة الداخلية — جيزان</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[10px] text-[#c5a059] font-semibold underline inline-block mt-1.5"
                  >
                    افتتح في الخرائط | Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= الصفحة الرابعة (برنامج الحفل - بنفس الألوان) ================= */}
        <section className="min-h-[88vh] w-screen snap-start flex items-center justify-center px-4 bg-[#faf8f5]">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-center text-[#c5a059] text-base font-bold mb-5 tracking-wide">بَرْنَامَج الحَفْل</h3>
            <div className="space-y-4 relative border-r-2 border-[#23385e]/20 pr-4 mr-2 text-right" dir="rtl">
              {[
                { time: "8:30 PM - ٨:٣٠ م", title: "استقبال الضيوف وبداية العرضة السعودية" },
                { time: "9:15 PM - ٩:١٥ م", title: "دخول العريس وبدء الزفة" },
                { time: "9:30 PM - ٩:٣٠ م", title: "السلام العام واستقبال المهنئين" },
                { time: "10:15 PM - ١٠:١٥ م", title: "حباكم الع
