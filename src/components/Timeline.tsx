import React from "react";
import Reveal from "./Reveal";
import { Users, Star, UtensilsCrossed, Heart, Sparkles } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

// استيراد صور الـ SVG
import topDivider from "@/assets/25.svg";
import bottomDivider from "@/assets/26.svg";

const CircleSparkles = () => (
  <>
    <Sparkles className="w-2 h-2 absolute top-1 left-1 opacity-50 text-[#F9E9E6]" />
    <Sparkles className="w-2 h-2 absolute top-1 right-1 opacity-50 text-[#F9E9E6]" />
    <Sparkles className="w-2 h-2 absolute bottom-1 left-1 opacity-50 text-[#F9E9E6]" />
    <Sparkles className="w-2 h-2 absolute bottom-1 right-1 opacity-50 text-[#F9E9E6]" />
  </>
);

const Timeline = () => {
  const { t, lang } = useLang();

  const events = [
    { time: "8:30 PM", labelKey: "reception", icon: Users },
    { time: "10:30 PM", labelKey: "zaffa", icon: Star },
    { time: "12:00 AM", labelKey: "dinner", icon: UtensilsCrossed },
  ];

  return (
    <div className="relative w-full mx-auto py-2 px-2 text-[#F9E9E6]">
      {/* 1. نجمات أركان المربع */}
      <Sparkles className="w-3.5 h-3.5 absolute top-2 left-2 text-[#F9E9E6] opacity-60 animate-pulse pointer-events-none" />
      <Sparkles className="w-3.5 h-3.5 absolute top-2 right-2 text-[#F9E9E6] opacity-60 animate-pulse pointer-events-none" />
      <Sparkles className="w-3.5 h-3.5 absolute bottom-2 left-2 text-[#F9E9E6] opacity-60 animate-pulse pointer-events-none" />
      <Sparkles className="w-3.5 h-3.5 absolute bottom-2 right-2 text-[#F9E9E6] opacity-60 animate-pulse pointer-events-none" />

      {/* 2. الزخرفة العلوية (25.svg) - تم قص الفراغ الداخلي بسحب المكون */}
      <div className="w-full flex justify-center items-center h-10 overflow-hidden my-1">
        <img
          src={topDivider}
          alt="زخرفة علوية"
          className="w-[90%] max-w-[260px] h-auto object-contain scale-125 opacity-95 pointer-events-none"
        />
      </div>

      {/* 3. الخط الزمني والأحداث */}
      <div className="relative my-2" dir="ltr">
        {/* الخط العمودي خلف الدوائر */}
        <div
          className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-px pointer-events-none"
          style={{ background: "rgba(249, 233, 230, 0.35)" }}
        />

        <div className="space-y-5">
          {events.map((e, i) => {
            const IconComponent = e.icon;
            const isEven = i % 2 === 0;

            return (
              <React.Fragment key={i}>
                <Reveal delay={i * 150}>
                  <div className="relative flex items-center justify-center min-h-[50px]">
                    {/* الدائرة المركزية */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full z-20 flex items-center justify-center bg-[#A77C86] shrink-0"
                      style={{
                        border: "1px solid rgba(249, 233, 230, 0.8)",
                        boxShadow: "0 0 8px rgba(0, 0, 0, 0.12)",
                      }}
                    >
                      <CircleSparkles />
                      <IconComponent className="w-4 h-4 text-[#F9E9E6]" />
                    </div>

                    {/* المحتوى الموزع بدقة على الجانبين */}
                    <div className="w-full flex items-center">
                      {isEven ? (
                        /* الحدث جهة اليسار بالهيكل */
                        <div
                          className="w-1/2 pr-7 text-right flex flex-col items-end z-10"
                          dir={lang === "ar" ? "rtl" : "ltr"}
                        >
                          <span className="font-amoshref text-[11px] opacity-80 font-light tracking-wide leading-tight" dir="ltr">
                            {e.time}
                          </span>
                          <span className={`text-xs sm:text-sm leading-tight mt-0.5 ${lang === "ar" ? "font-neirizi" : "font-amoshref"}`}>
                            {t(e.labelKey)}
                          </span>
                        </div>
                      ) : (
                        <div className="w-1/2" />
                      )}

                      {!isEven ? (
                        /* الحدث جهة اليمين بالهيكل */
                        <div
                          className="w-1/2 pl-7 text-left flex flex-col items-start z-10"
                          dir={lang === "ar" ? "rtl" : "ltr"}
                        >
                          <span className="font-amoshref text-[11px] opacity-80 font-light tracking-wide leading-tight" dir="ltr">
                            {e.time}
                          </span>
                          <span className={`text-xs sm:text-sm leading-tight mt-0.5 ${lang === "ar" ? "font-neirizi" : "font-amoshref"}`}>
                            {t(e.labelKey)}
                          </span>
                        </div>
                      ) : (
                        <div className="w-1/2" />
                      )}
                    </div>
                  </div>
                </Reveal>

                {/* القلوب الفاصلة بين الأحداث */}
                {i < events.length - 1 && (
                  <div className="relative z-10 flex justify-center my-0.5">
                    <div className="bg-[#A77C86] p-0.5 rounded-full">
                      <Heart className="w-3 h-3 text-[#F9E9E6]/80 fill-[#F9E9E6]/30" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* 4. الزخرفة السفلية (26.svg) - قص الفراغ مع تكبير الرسمة بـ scale */}
      <div className="w-full flex justify-center items-center h-8 overflow-hidden my-1">
        <img
          src={bottomDivider}
          alt="زخرفة سفلية"
          className="w-[85%] max-w-[240px] h-auto object-contain scale-125 opacity-95 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Timeline;
