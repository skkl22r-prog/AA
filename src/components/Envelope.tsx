import { useState, useEffect, useRef } from "react";
import Envelope from "@/components/Envelope";
import groomImg from "@/assets/Photoroom_20260810_091731.png";
import bottomImg from "@/assets/Photoroom_20260810_091623.png";

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");

  // حالات صفحة الانتظار والتحويل للواتساب
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isRedirectedDone, setIsRedirectedDone] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSoundBubble, setShowSoundBubble] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-10-16T20:30:00");
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

  // مؤقت العد التنازلي للتحويل للواتساب (5 ثوانٍ)
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRedirecting && !isRedirectedDone && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (isRedirecting && !isRedirectedDone && countdown === 0) {
      const adminPhone = "966554129943";
      const message = `السلام عليكم، تأكيد الحضور بدعوة زواج متعب بن عبدالعزيز العطاوي.\nالاسم: ${fullName}\nالجوال: ${phone}\nعدد المرافقين: ${guests}`;
      const url = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
      
      // فتح الواتساب
      window.open(url, "_blank");
      setIsRedirectedDone(true);
    }
    return () => clearInterval(timer);
  }, [isRedirecting, isRedirectedDone, countdown, fullName, phone, guests]);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    setShowSoundBubble(true);

    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }

    setTimeout(() => {
      setShowSoundBubble(false);
    }, 7000);
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      });
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRedirecting(true);
  };

  const handleResetForm = () => {
    setIsRedirecting(false);
    setCountdown(5);
    setIsRedirectedDone(false);
    setFullName("");
    setPhone("");
    setGuests("");
  };

  return (
    <div className="h-screen w-screen bg-[#faf8f5] text-[#2c2c2c] font-arabic overflow-y-scroll snap-y snap-mandatory scrollbar-none select-none relative">
      {!isOpen && <Envelope onOpen={handleOpenEnvelope} />}
      <audio
        ref={audioRef}
        src="/music/shim2t.m4a"
        loop
        preload="auto"
      />

      {isOpen && (
        <div className="fixed bottom-5 left-5 z-[100]">
          {showSoundBubble && (
            <div className="absolute bottom-full left-0 mb-2 whitespace-nowrap">
              <div className="relative bg-[#faf8f5] text-[#8b7650] px-3.5 py-1.5 rounded-full shadow-md border border-[#c5a059]/60 text-xs font-medium flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#c5a059] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
                <span>دعوة زواج متعب</span>

                <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-[#faf8f5] border-r border-b border-[#c5a059]/60 rotate-45"></div>
              </div>
            </div>
          )}

          {/* زر الصوت المحدث بإحساس واقعي ومصغر */}
          <button
            type="button"
            onClick={toggleAudio}
            aria-label={isPlaying ? "إيقاف الصوت" : "تشغيل الصوت"}
            className="w-11 h-11 rounded-full text-[#c5a059] border-[1px] border-[#c5a059]/50 flex items-center justify-center active:scale-95 transition-transform bg-gradient-to-b from-[#ffffff] via-[#faf8f5] to-[#f0e8d8] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(197,160,89,0.2),0_4px_12px_rgba(0,0,0,0.12)] relative"
          >
            <div className="absolute inset-[2px] rounded-full border border-white/60 pointer-events-none"></div>
            {isPlaying ? (
              <svg
                className="w-5 h-5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M11 5L6 9H3v6h3l5 4V5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M15.5 8.5a5 5 0 010 7M18 6a8.5 8.5 0 010 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M11 5L6 9H3v6h3l5 4V5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M19 9l-6 6M13 9l6 6"
                />
              </svg>
            )}
          </button>
        </div>
      )}

      <div className={`transition-opacity duration-1000 h-full w-full ${isOpen ? "opacity-100" : "opacity-0"}`}>
        
        {/* ================= الصفحة الأولى ================= */}
        <section className="h-[100dvh] max-h-[100dvh] w-screen snap-start relative flex flex-col justify-between items-center text-center pt-2 pb-2 px-3 bg-[#111C2E] text-[#f4ecd8] overflow-hidden">
          <div className="w-full relative z-30 shrink-0 mt-6 sm:mt-8 pt-2">
            <p className="text-xs text-[#c5a059] font-light uppercase opacity-90 mb-2 font-tajawal-medium">دعوة حفل زواج</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white font-sarahhh1 drop-shadow-md my-2.5">متعب بن عبدالعزيز العطاوي</h1>
            <div className="flex items-center justify-center gap-2.5 mt-2.5">
              <span className="w-8 h-[1px] bg-[#c5a059]/70"></span>
              <span className="text-[#c5a059] text-xs">✦</span>
              <span className="w-8 h-[1px] bg-[#c5a059]/70"></span>
            </div>
          </div>

          <div className="w-full flex-1 relative z-20 flex items-center justify-center -mt-2">
            <img 
              src={groomImg} 
              alt="العريس متعب بن عبدالعزيز العطاوي" 
              className="w-full h-full max-h-[68vh] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]" 
              style={{
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)"
              }}
            />

            <div className="absolute bottom-6 z-30 w-full flex flex-col items-center pointer-events-none">
              <div className="text-sm sm:text-base space-y-0.5 text-[#c5a059] font-semibold mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                <p className="tracking-wide text-white">٢٥ . ٤ . ١٤٤٨ هـ</p>
                <p className="tracking-wide text-[#c5a059]">16 . Oct . 2026</p>
                <p className="text-white/90 text-xs">8:00 مساءً</p>
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

        {/* ================= الصفحة الثانية المعدلة بالكامل ================= */}
        <section className="h-[100dvh] max-h-[100dvh] w-screen snap-start flex flex-col justify-between items-center px-4 pt-3 pb-3 bg-[#faf8f5] overflow-hidden">
          <div className="pt-2 shrink-0">
            <p className="text-4xl sm:text-5xl font-besm text-[#23385e] text-center" dir="rtl">+</p>
          </div>

          <div className="w-full max-w-md bg-white text-[#2c2c2c] px-4 py-3 text-center rounded-2xl shadow-xl border-2 border-[#c5a059]/50 flex flex-col justify-between my-auto flex-1 max-h-[72vh] overflow-y-auto scrollbar-none">
            
            <div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-1">يتــشرف</p>

              <h2 className="text-xl sm:text-2xl font-bold text-[#1e293b] my-1 font-sarahhh1">
                عبدالعزيز بن سلمان العطاوي
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 my-1">
                بدعوتكم لحضور حفل زواج ابنه
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#c5a059] my-1.5 font-sarahhh1">
                متعب بن عبدالعزيز العطاوي
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 my-1">
                على كريمة
              </p>

              <h4 className="text-xl sm:text-2xl font-bold text-[#1e293b] my-1 font-sarahhh1">
                سلطان بن عيد الشمري
              </h4>

              <div className="flex items-center justify-center gap-2.5 my-2">
                <span className="w-8 h-[1px] bg-[#23385e]/40"></span>
                <span className="text-[#23385e] text-xs">✦</span>
                <span className="w-8 h-[1px] bg-[#23385e]/40"></span>
              </div>

              <p className="text-xs sm:text-sm text-[#c5a059] font-bold my-1">
                يوم الجمعة الموافق ٢٥ . ٤ . ١٤٤٨ هـ
              </p>

              <div className="text-[11px] sm:text-xs text-gray-700 leading-tight font-medium mt-1.5" dir="ltr">
                <p>
                  Abdulaziz bin Salman Al-Atawi has the honor of inviting you to attend
                  the wedding celebration of his son,{" "}
                  <span className="text-[#c5a059] font-bold">Miteb bin Abdulaziz Al-Atawi</span>, 
                  to the daughter of{" "}
                  <span className="text-[#c5a059] font-bold">Sultan bin Eid Al-Shammari</span>
                </p>
                <p className="text-[#c5a059] font-bold mt-1">Friday 16 . Oct . 2026</p>
              </div>
            </div>

            <div className="pt-2 pb-1 border-t border-gray-100 mt-2">
              <p className="text-xs sm:text-sm font-bold text-[#1e293b]">
                وبحضوركم يتم لنا الفرح والسرور
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5" dir="ltr">
                Your presence brings us honor and great joy
              </p>
            </div>
          </div>

          <div className="pb-1 shrink-0 flex justify-center">
            <span className="text-[#c5a059] text-xl animate-bounce font-bold">⌄</span>
          </div>
        </section>

        {/* ================= الصفحة الثالثة ================= */}
        <section className="h-[100dvh] max-h-[100dvh] w-screen snap-start flex flex-col justify-between items-center px-4 pt-3 pb-2 bg-[#faf8f5] overflow-hidden" dir="rtl">
          <div className="pt-10 mb-1">
            <h3 className="text-xl sm:text-2xl font-bold text-[#23385e] drop-shadow-sm text-center font-serif">تفاصيـل الحفـل</h3>
            <p className="text-[9px] text-gray-500 tracking-[0.25em] text-center mt-0.5">EVENT DETAILS</p>
            <div className="w-10 h-[1px] bg-[#c5a059]/60 mx-auto mt-1"></div>
          </div>

          <div className="w-full max-w-md space-y-2 my-1 flex flex-col justify-start">
            
            <div className="bg-white text-[#2c2c2c] px-3 py-2 text-center rounded-2xl shadow-md border-2 border-[#c5a059]/60 flex flex-col items-center">
              <div className="mb-1">
                <svg className="w-5 h-5 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <span className="text-[10px] text-[#c5a059] font-medium tracking-wide mb-1">التاريخ</span>
              <h4 className="text-xs sm:text-sm font-bold text-[#23385e] mb-1">الجمعة ٢٥ / ٤ / ١٤٤٨هـ</h4>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="w-6 h-[1px] bg-[#c5a059]/60"></span>
                <span className="text-[#c5a059] text-[10px]">✦</span>
                <span className="w-6 h-[1px] bg-[#c5a059]/60"></span>
              </div>
              <p className="text-[10px] text-gray-500 font-medium" dir="ltr">Friday, 16 , October , 2026</p>
            </div>

            <div className="bg-white text-[#2c2c2c] px-3 py-2 text-center rounded-2xl shadow-md border-2 border-[#c5a059]/60 flex flex-col items-center">
              <div className="mb-1">
                <svg className="w-5 h-5 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <span className="text-[10px] text-[#c5a059] font-medium tracking-wide mb-1">الحضور</span>
              <h4 className="text-xs sm:text-sm font-bold text-[#23385e] mb-1">الساعة الثامنة  - ٨:٠٠ م</h4>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="w-6 h-[1px] bg-[#c5a059]/60"></span>
                <span className="text-[#c5a059] text-[10px]">✦</span>
                <span className="w-6 h-[1px] bg-[#c5a059]/60"></span>
              </div>
              <p className="text-[10px] text-gray-500 font-medium" dir="ltr">8:00 PM</p>
            </div>

            <div className="bg-white text-[#2c2c2c] px-3 py-2 text-center rounded-2xl shadow-md border-2 border-[#c5a059]/60 flex flex-col items-center">
              <div className="mb-1">
                <svg className="w-5 h-5 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <span className="text-[10px] text-[#c5a059] font-medium tracking-wide mb-0.5">الموقع</span>
              <h4 className="text-xs sm:text-sm font-bold text-[#23385e] mb-0.5">قاعة الامير سلطان الكبرى — فندق الفيصلية</h4>
              <p className="text-[10px] text-gray-500 font-medium mb-1">Prince Sultan Grand Hall — Al Faisaliah Hotel</p>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="w-6 h-[1px] bg-[#c5a059]/60"></span>
                <span className="text-[#c5a059] text-[10px]">✦</span>
                <span className="w-6 h-[1px] bg-[#c5a059]/60"></span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=قاعة+الأمير+سلطان+الكبرى+فندق+الفيصلية+الرياض"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] text-[#c5a059] font-bold underline mb-1.5 inline-block"
              >
                افتتح في الخرائط | Open in Maps
              </a>

              <div className="w-full h-36 sm:h-40 rounded-xl overflow-hidden border border-gray-200 shadow-inner relative">
                <iframe
                  title="Prince Sultan Grand Hall - Al Faisaliah Hotel"
                  src="https://www.google.com/maps?q=قاعة+الأمير+سلطان+الكبرى+فندق+الفيصلية+الرياض&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
            </div>

          </div>
          <div className="pb-1 flex justify-center"><span className="text-[#c5a059] text-xl animate-bounce font-bold">⌄</span></div>
        </section>

        {/* ================= الصفحة الرابعة ================= */}
        <section className="h-[100dvh] max-h-[100dvh] w-screen snap-start flex flex-col justify-between items-center px-4 pt-3 pb-3 bg-[#faf8f5] overflow-hidden" dir="rtl">
          <div className="w-full max-w-md flex flex-col items-center my-auto">
            <div className="text-center mb-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#23385e] drop-shadow-sm font-serif">برنـامج الحفـل</h3>
              <p className="text-[10px] text-gray-500 tracking-[0.25em] mt-1">EVENT PROGRAM</p>
              <div className="w-12 h-[1px] bg-[#c5a059]/60 mx-auto mt-1.5"></div>
            </div>

            <div className="w-full bg-white text-[#2c2c2c] px-4 py-3 text-center rounded-2xl shadow-xl border-2 border-[#c5a059]/60 flex flex-col justify-around max-h-[72vh]">
              {[
                { timeAr: "٨:٠٠ م - PM 8:00", titleAr: "استقبال الضيوف", titleEn: "Guest Reception" },
                { timeAr: "٨:٣٠ م - PM 8:30", titleAr: "بداية العرضة السعودية", titleEn: "Beginning of the Saudi Ardah" },
                { timeAr: "٩:٣٠ م - PM 9:30", titleAr: "دخول العريس وبدء الزفة", titleEn: "Groom's Entrance & Wedding Zaffa" },
                { timeAr: "١٠:٠0 م - PM 10:00", titleAr: "السلام العام واستقبال المهنئين", titleEn: "General Greetings & Welcoming Guests" },
                { timeAr: "١١:٣٠ م - PM 11:30", titleAr: "العشاء", titleEn: "Dinner" }
              ].map((item, idx, arr) => (
                <div key={idx} className="py-1">
                  <p className="text-xs sm:text-sm font-bold text-[#c5a059]" dir="ltr">{item.timeAr}</p>
                  <h4 className="text-sm sm:text-base font-bold text-[#23385e] mt-0.5">{item.titleAr}</h4>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5" dir="ltr">{item.titleEn}</p>
                  {idx < arr.length - 1 && (
                    <div className="flex items-center justify-center gap-2.5 my-1.5">
                      <span className="w-8 h-[1px] bg-[#c5a059]/40"></span>
                      <span className="text-[#c5a059] text-[10px]">✦</span>
                      <span className="w-8 h-[1px] bg-[#c5a059]/40"></span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="pb-1 flex justify-center"><span className="text-[#c5a059] text-xl animate-bounce font-bold">⌄</span></div>
        </section>

        {/* ================= الصفحة الخامسة (تأكيد الحضور أو شاشة النجاح) ================= */}
        <section className="h-[100dvh] max-h-[100dvh] w-screen snap-start flex flex-col items-center justify-between bg-[#faf8f5] relative overflow-hidden" dir="rtl">
          
          {!isRedirecting ? (
            <div className="w-full max-w-md flex flex-col items-center my-auto px-4 pt-4 pb-3 z-10">
              <div className="text-center mb-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#23385e] drop-shadow-sm font-serif">
                  تأكـيد الحضـور
                </h3>
                <p className="text-[10px] text-gray-500 tracking-[0.25em] mt-1">CONFIRM ATTENDANCE</p>
                <div className="w-12 h-[1px] bg-[#c5a059]/60 mx-auto mt-1.5"></div>
              </div>

              <div className="text-center mb-4 px-2">
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  اكمل البيانات ثم اضغط إرسال.
                </p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="w-full space-y-3">
                <div className="w-full">
                  <div className="flex justify-between items-end mb-1 px-1">
                    <label className="text-xs sm:text-sm font-bold text-[#23385e]">الاسم الكامل</label>
                    <span className="text-[10px] text-gray-400 font-sans">Full Name</span>
                  </div>
                  <div className="bg-white border border-[#c5a059]/30 rounded-2xl py-2 px-4 flex items-center shadow-sm">
                    <svg className="w-4 h-4 text-gray-400 ml-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <input
                      type="text"
                      required
                      placeholder="اكتب اسمك"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-transparent text-base text-[#2c2c2c] focus:outline-none placeholder-gray-300 text-right"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between items-end mb-1 px-1">
                    <label className="text-xs sm:text-sm font-bold text-[#23385e]">رقم الجوال</label>
                    <span className="text-[10px] text-gray-400 font-sans">Phone Number</span>
                  </div>
                  <div className="bg-white border border-[#c5a059]/30 rounded-2xl py-2 px-4 flex items-center shadow-sm">
                    <svg className="w-4 h-4 text-gray-400 ml-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <input
                      type="tel"
                      required
                      placeholder="05xxxxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-transparent text-base text-[#2c2c2c] focus:outline-none placeholder-gray-300 text-right"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between items-end mb-1 px-1">
                    <label className="text-xs sm:text-sm font-bold text-[#23385e]">عدد المرافقين</label>
                    <span className="text-[10px] text-gray-400 font-sans">Number of Guests</span>
                  </div>
                  <div className="bg-white border border-[#c5a059]/30 rounded-2xl py-2 px-4 flex items-center shadow-sm">
                    <svg className="w-4 h-4 text-gray-400 ml-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <select
                      required
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-transparent text-base text-[#2c2c2c] focus:outline-none text-right cursor-pointer"
                    >
                      <option value="" disabled>اختر</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex flex-col items-center">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#23385e] to-[#3a5a94] text-white font-bold py-3 rounded-2xl transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                    </svg>
                    <span>إرسال التأكيد</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* ================= شاشة النجاح ================= */
            (() => {
              const bottomImgScale = 125;

              return (
                <div className="w-full h-full flex flex-col justify-end items-center relative pt-4 pb-0">
                  
                  <div className="w-full max-w-md px-4 text-center z-10 flex flex-col items-center mb-2 space-y-2">
                    
                    <div className="w-full flex flex-col items-center">
                      <h3 className="text-4xl sm:text-5xl font-bold text-[#23385e] font-sarahhh1 tracking-wide leading-tight">
                        أفراحنا تزدان بحضوركم
                      </h3>
                      <p className="text-[10px] sm:text-xs text-gray-400 uppercase font-sans mt-0.5 tracking-[0.27em] sm:tracking-[0.38em] whitespace-nowrap">
                        OUR WEDDINGS ARE GRACED BY YOUR PRESENCE
                      </p>
                      
                      <div className="flex items-center justify-center gap-2.5 mt-2">
                        <span className="w-8 h-[1px] bg-[#c5a059]/60"></span>
                        <span className="text-[#c5a059] text-xs">✦</span>
                        <span className="w-8 h-[1px] bg-[#c5a059]/60"></span>
                      </div>
                    </div>

                    <div className="pt-1">
                      <p className="text-base sm:text-lg font-bold text-[#1e293b]">
                        شكراً لتأكيد حضورك
                      </p>
                      <p className="text-xs text-gray-500 font-sans">
                        Thank you for confirming your attendance
                      </p>
                    </div>

                    {!isRedirectedDone ? (
                      <div className="py-1">
                        <p className="text-xs sm:text-sm font-semibold text-[#23385e]">
                          سيتم تحويلك إلى الواتساب خلال {countdown} ثوانٍ …
                        </p>
                        <p className="text-[10px] text-gray-400 font-sans">
                          You will be redirected to WhatsApp in {countdown} seconds ...
                        </p>
                      </div>
                    ) : (
                      <div className="py-1 flex flex-col items-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <span className="text-blue-600 text-base font-bold">✓</span>
                          <p className="text-xs sm:text-sm font-bold text-[#23385e]">
                            تم فتح الواتساب - اضغط "إرسال" لتأكيد حضورك
                          </p>
                        </div>
                        <p className="text-[10px] text-gray-400 font-sans">
                          WhatsApp opened - Press "Send" to confirm your attendance
                        </p>
                      </div>
                    )}

                    <div className="w-full pt-1 pb-1">
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="w-full bg-[#2a4575] hover:bg-[#1e3256] text-white font-bold py-3.5 rounded-2xl shadow-md transition-all active:scale-[0.98] text-sm"
                      >
                        <span>العودة للصفحة الرئيسية | Return Home</span>
                      </button>
                    </div>

                  </div>

                  <div className="w-full shrink-0 z-0 leading-none flex justify-center items-end overflow-visible">
                    <img 
                      src={bottomImg} 
                      alt="شخصيات الحفل" 
                      style={{ width: `${bottomImgScale}%` }}
                      className="max-w-none h-auto object-cover object-bottom block" 
                    />
                  </div>

                </div>
              );
            })()
          )}

        </section>

      </div>
    </div>
  );
}
