import React from "react";
import Reveal from "./Reveal";
import { Users, Star, UtensilsCrossed, Heart, Sparkles } from "lucide-react";

const events = [
  { time: "8:30 PM", label: "استقبال الضيوف", icon: Users },
  { time: "10:30 PM", label: "الزفة", icon: Star },
  { time: "12:00 AM", label: "العشاء", icon: UtensilsCrossed },
];

// لمعات زوايا الدوائر الصغار
const CircleSparkles = () => (
  <>
    <Sparkles className="w-2 h-2 absolute top-1 left-1 opacity-50 text-[#F9E9E6]" />
    <Sparkles className="w-2 h-2 absolute top-1 right-1 opacity-50 text-[#F9E9E6]" />
    <Sparkles className="w-2 h-2 absolute bottom-1 left-1 opacity-50 text-[#F9E9E6]" />
    <Sparkles className="w-2 h-2 absolute bottom-1 right-1 opacity-50 text-[#F9E9E6]" />
  </>
);

const Timeline = () => {
  return (
    <div className="relative w-full mx-auto py-6 px-4 text-[#F9E9E6]">
      {/* ------------------------------------------------------------- */}
      {/* 1. نجمات أركان المربع بوميض خفيف مع مسافات مريحة */}
      {/* ------------------------------------------------------------- */}
      <Sparkles className="w-3.5 h-3.5 absolute top-3 left-3 text-[#F9E9E6] opacity-60 animate-pulse pointer-events-none" />
      <Sparkles className="w-3.5 h-3.5 absolute top-3 right-3 text-[#F9E9E6] opacity-60 animate-pulse pointer-events-none" />
      <Sparkles className="w-3.5 h-3.5 absolute bottom-3 left-3 text-[#F9E9E6] opacity-60 animate-pulse pointer-events-none" />
      <Sparkles className="w-3.5 h-3.5 absolute bottom-3 right-3 text-[#F9E9E6] opacity-60 animate-pulse pointer-events-none" />

      {/* ------------------------------------------------------------- */}
      {/* 2. مكان مخصص للزخرفة العلوية (الطيور والفيونكة) */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full flex justify-center mb-4 min-h-[35px] items-center">
        <span className="text-[10px] opacity-40 border border-dashed border-[#F9E9E6]/30 px-3 py-1 rounded">
          [ مكان زخرفة الطيور والفيونكة ]
        </span>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. الخط الزمني والأحداث */}
      {/* ------------------------------------------------------------- */}
      <div className="relative my-2">
        {/* الخط العمودي خلف الدوائر */}
        <div
          className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-px pointer-events-none"
          style={{ background: "rgba(249, 233, 230, 0.35)" }}
        />

        <div className="space-y-6">
          {events.map((e, i) => {
            const IconComponent = e.icon;
            const isEven = i % 2 === 0;

            return (
              <React.Fragment key={i}>
                <Reveal delay={i * 150}>
                  <div className="relative flex items-center justify-center min-h-[55px]">
                    {/* الدائرة المركزية */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full z-10 flex items-center justify-center bg-[#A77C86] shrink-0"
                      style={{
                        border: "1px solid rgba(249, 233, 230, 0.8)",
                        boxShadow: "0 0 8px rgba(0, 0, 0, 0.12)",
                      }}
                    >
                      <CircleSparkles />
                      <IconComponent className="w-5 h-5 text-[#F9E9E6]" />
                    </div>

                    {/* النصوص والوقت مع إزاحة جيدة (pr-16 / pl-16) لمنع التداخل */}
                    <div className="grid grid-cols-2 w-full gap-2 items-center">
                      {isEven ? (
                        <>
                          {/* الجهة اليمنى: زيادة المسافة pr-16 لتبتعد عن الدائرة */}
                          <div className="text-right pr-16 flex flex-col items-end">
                            <span className="text-[11px] opacity-80 font-light tracking-wide" dir="ltr">
                              {e.time}
                            </span>
                            <span className="text-sm sm:text-base font-neirizi whitespace-nowrap">
                              {e.label}
                            </span>
                          </div>
                          <div className="pl-16" />
                        </>
                      ) : (
                        <>
                          <div className="pr-16" />
                          {/* الجهة اليسرى: زيادة المسافة pl-16 لتبتعد عن الدائرة */}
                          <div className="text-left pl-16 flex flex-col items-start">
                            <span className="text-[11px] opacity-80 font-light tracking-wide" dir="ltr">
                              {e.time}
                            </span>
                            <span className="text-sm sm:text-base font-neirizi whitespace-nowrap">
                              {e.label}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Reveal>

                {/* القلوب الفاصلة بين الأحداث */}
                {i < events.length - 1 && (
                  <div className="relative z-10 flex justify-center my-1">
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

      {/* ------------------------------------------------------------- */}
      {/* 4. مكان مخصص للزخرفة السفلية (الكرستال) */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full flex justify-center mt-4 min-h-[30px] items-center">
        <span className="text-[10px] opacity-40 border border-dashed border-[#F9E9E6]/30 px-3 py-1 rounded">
          [ مكان الزخرفة السفلية ]
        </span>
      </div>
    </div>
  );
};

export default Timeline;
