import Reveal from "./Reveal";
import { Users, Star, UtensilsCrossed, Heart, Sparkles } from "lucide-react";

// الأحداث مع الأيقونات الخاصة بكل حدث
const events = [
  { time: "8:30 PM", label: "استقبال الضيوف", icon: Users },
  { time: "10:30 PM", label: "الزفة", icon: Star },
  { time: "12:00 AM", label: "العشاء", icon: UtensilsCrossed },
];

// لمعات النجوم في زوايا الدائرة
const CornerSparkles = () => (
  <>
    <Sparkles className="w-2.5 h-2.5 absolute top-1.5 left-1.5 opacity-60 text-[#F9E9E6]" />
    <Sparkles className="w-2.5 h-2.5 absolute top-1.5 right-1.5 opacity-60 text-[#F9E9E6]" />
    <Sparkles className="w-2.5 h-2.5 absolute bottom-1.5 left-1.5 opacity-60 text-[#F9E9E6]" />
    <Sparkles className="w-2.5 h-2.5 absolute bottom-1.5 right-1.5 opacity-60 text-[#F9E9E6]" />
  </>
);

const Timeline = () => {
  return (
    <div className="relative max-w-2xl mx-auto py-4 text-[#F9E9E6]">
      {/* ------------------------------------------------------------------ */}
      {/* 1. مكان مخصص للزخرفة العلوية (الطيور والفيونكة) - ضع كود SVG هنا مستقبلاً */}
      {/* ------------------------------------------------------------------ */}
      <div className="w-full flex justify-center mb-4 min-h-[50px] items-center">
        <span className="text-[10px] opacity-40 border border-dashed border-[#F9E9E6]/30 px-3 py-1 rounded">
          [ مكان زخرفة الطيور والفيونكة ]
        </span>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 2. الخط الزمني والأحداث */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative">
        {/* الخط العمودي خلف الدوائر */}
        <div
          className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-px"
          style={{ background: "rgba(249, 233, 230, 0.4)" }}
        />

        <div className="space-y-6">
          {events.map((e, i) => {
            const IconComponent = e.icon;
            const isEven = i % 2 === 0; // للتبادل بين اليمين واليسار مثل الصورة

            return (
              <React.Fragment key={i}>
                <Reveal delay={i * 150}>
                  <div className="relative flex items-center justify-center">
                    {/* الدائرة المركزية مع الأيقونة واللمعات */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full z-10 flex items-center justify-center bg-[#A77C86]"
                      style={{
                        border: "1px solid rgba(249, 233, 230, 0.8)",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <CornerSparkles />
                      <IconComponent className="w-5 h-5 text-[#F9E9E6]" />
                    </div>

                    {/* توزيع النص والوقت بشكل تبادلي (يمين/يسار) */}
                    <div className="grid grid-cols-2 w-full gap-4 items-center">
                      {isEven ? (
                        <>
                          {/* الجهة اليمنى: الوقت والنص */}
                          <div className="text-right pr-12 flex flex-col items-end">
                            <span className="text-xs opacity-80 font-light" dir="ltr">
                              {e.time}
                            </span>
                            <span className="text-base sm:text-lg font-neirizi">
                              {e.label}
                            </span>
                          </div>
                          <div className="pl-12" />
                        </>
                      ) : (
                        <>
                          <div className="pr-12" />
                          {/* الجهة اليسرى: الوقت والنص */}
                          <div className="text-left pl-12 flex flex-col items-start">
                            <span className="text-xs opacity-80 font-light" dir="ltr">
                              {e.time}
                            </span>
                            <span className="text-base sm:text-lg font-neirizi">
                              {e.label}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Reveal>

                {/* رسم قلب فاصل بين كل عنصرين على الخط العمودي */}
                {i < events.length - 1 && (
                  <div className="relative z-10 flex justify-center my-1">
                    <div className="bg-[#A77C86] p-0.5 rounded-full">
                      <Heart className="w-3.5 h-3.5 text-[#F9E9E6]/80 fill-[#F9E9E6]/30" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 3. مكان مخصص للزخرفة السفلية (الكرستال والمنحنيات) - ضع كود SVG هنا مستقبلاً */}
      {/* ------------------------------------------------------------------ */}
      <div className="w-full flex justify-center mt-6 min-h-[40px] items-center">
        <span className="text-[10px] opacity-40 border border-dashed border-[#F9E9E6]/30 px-3 py-1 rounded">
          [ مكان الزخرفة السفلية ]
        </span>
      </div>
    </div>
  );
};

export default Timeline;
