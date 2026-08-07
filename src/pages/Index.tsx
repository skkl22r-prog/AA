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
    const message = `السلام عليكم، تأكيد حضور دعوة زفاف.\nالاسم: ${fullName}\nالجوال: ${phone}\nعدد المرافقين: ${guests}`;
    const url = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#07111E] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {!isOpen ? (
        <Envelope onOpen={() => setIsOpen(true)} />
      ) : (
        <div className="w-full max-w-md mx-auto min-h-screen flex flex-col justify-between p-6 relative animate-fade-in">
          
          {/* الصفحة الثالثة: تفاصيل الحفل والخريطة */}
          <div className="flex flex-col justify-center items-center py-8 space-y-6 flex-grow">
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-2">تفاصيل الحفل والخريطة</h2>
            <p className="text-center text-gray-300 text-sm px-4">
              يسعدنا حضوركم ومشاركتنا فرحتنا في قاعة الاحتفالات الكبرى.
            </p>
            
            {/* مربع الخريطة المكبر */}
            <div className="w-full h-72 bg-gray-800 rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-lg relative">
              <iframe
                title="Wedding Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.789123456789!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sar!2ssa!4v1234567890"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* الصفحة الأخيرة: تأكيد الحضور عبر واتساب */}
          <div className="flex flex-col justify-center items-center py-8 space-y-4 flex-grow">
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">تأكيد الحضور</h2>
            
            <form onSubmit={handleWhatsAppSubmit} className="w-full space-y-4">
              <div>
                <label className="block text-right text-sm text-gray-300 mb-1">الاسم الكامل</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-[#D4AF37] outline-none"
                  placeholder="أدخل اسمك الكريم"
                />
              </div>

              <div>
                <label className="block text-right text-sm text-gray-300 mb-1">رقم الجوال</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-[#D4AF37] outline-none text-right"
                  placeholder="05xxxxxxxx"
                />
              </div>

              <div>
                <label className="block text-right text-sm text-gray-300 mb-1">عدد المرافقين</label>
                <input
                  type="number"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  min="0"
                  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-[#D4AF37] outline-none"
                  placeholder="0"
                />
              </div>

              <div className="pt-2 flex flex-col items-center">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors text-center text-sm md:text-base"
                >
                  سيتم فتح واتساب — اضغط "إرسال" لتأكيد حضورك.
                </button>
                <span className="text-xs text-gray-400 mt-2">Confirm via WhatsApp</span>
              </div>
            </form>
          </div>

        </div>
      )}
    </div>
  );
}
