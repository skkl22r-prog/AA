import rImg from "@/assets/r.png";
import { useEffect, useRef, useState } from "react";
import { MapPin, Heart, QrCode, Baby, Camera, Clock, CalendarDays } from "lucide-react";
import invitationImg from "@/assets/video-output-9B5ECA8D-034F-419B-A85A-98CA7DF3D9F9-1.mp4";
import Envelope from "@/components/Envelope";
import Reveal from "@/components/Reveal";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import RSVP from "@/components/RSVP";
import MusicToggle from "@/components/MusicToggle";
import dividerImg from "@/assets/Photoroom_20260705_140806.png";
import locationIcon from "@/assets/photo-output.png";
import flowerDivider from "@/assets/Photoroom_20260705_152753.png";
import programIcon from "@/assets/Photoroom_20260705_152814.png";
import newImage from "@/assets/b706a6d8-920f-4356-9f82-145878965c17.jpeg";
import zaffaImg from "@/assets/14.png";
import dinnerImg from "@/assets/11.png";
import cameraImg from "@/assets/12.png";
import kidsImg from "@/assets/13.png";
import rsvpIcon from "@/assets/Photoroom_20260705_153052.png";
import { useLang } from "@/i18n/LanguageContext";

// مكون السهم الزخرفي المخصص المأخوذ من الصورة
const ScrollArrowIcon = () => (
  <svg
    width="32"
    height="36"
    viewBox="0 0 32 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
  >
    {/* القوس العلوي الأول */}
    <path
      d="M8 6C12 11 20 11 24 6"
      stroke="#F9E9E6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* القوس الثاني */}
    <path
      d="M8 12C12 17 20 17 24 12"
      stroke="#F9E9E6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* الخط العمودي الأوسط */}
    <path
      d="M16 14V26"
      stroke="#F9E9E6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* رأس السهم الزخرفي السفلي */}
    <path
      d="M8 24C12 28 20 28 24 24L16 34L8 24Z"
      fill="#F9E9E6"
    />
  </svg>
);

const Index = () => {
  const [opened, setOpened] = useState(false);
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const { t, lang, toggle } = useLang();
  const scrollRef = useRef<HTMLDivElement>(null);

  const startX = useRef(0);
  const startScroll = useRef(0);
  const dragging = useRef(false);

  // إخفاء السهم عند السحب لأسفل
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollArrow(false);
      } else {
        setShowScrollArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;

    dragging.current = true;
    startX.current = e.touches[0].pageX;
    startScroll.current = el.scrollLeft;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!dragging.current) return;

    const el = scrollRef.current;
    if (!el) return;

    const walk = e.touches[0].pageX - startX.current;
    el.scrollLeft = startScroll.current - walk;
  };

  const onTouchEnd = () => {
    dragging.current = false;
  };

  return (
    <div
      className="overflow-x-hidden w-full"
      style={{
        background: "#A77C86",
        minHeight: "100vh",
      }}
    >
      {/* Ornamental gold damask pattern background */}
      <div
        aria-hidden
        className="hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='%23B8860B' stroke-width='0.7' opacity='0.9'><g transform='translate(30 30)'><circle cx='0' cy='0' r='2.2' fill='%23B8860B'/><path d='M0 0 C -5 -3 -8 -8 -5 -12 C -1 -14 3 -11 4 -7'/><path d='M0 0 C 5 -3 8 -8 5 -12 C 1 -14 -3 -11 -4 -7'/><path d='M0 0 C -7 0 -11 5 -9 10 C -5 12 -1 9 0 5'/><path d='M0 0 C 7 0 11 5 9 10 C 5 12 1 9 0 5'/><path d='M0 5 C -2 9 0 13 3 12'/></g><g transform='translate(90 80)'><circle cx='0' cy='0' r='1.8' fill='%23B8860B'/><path d='M0 0 C -4 -2 -6 -6 -4 -9 C -1 -11 2 -8 3 -5'/><path d='M0 0 C 4 -2 6 -6 4 -9 C 1 -11 -2 -8 -3 -5'/><path d='M0 0 C -5 0 -8 4 -7 8 C -4 9 -1 7 0 4'/><path d='M0 0 C 5 0 8 4 7 8 C 4 9 1 7 0 4'/></g><g transform='translate(75 25)'><circle cx='0' cy='0' r='1.5' fill='%23B8860B'/><path d='M0 -4 C -3 -4 -4 -1 -2 1'/><path d='M0 -4 C 3 -4 4 -1 2 1'/><path d='M-3 2 C -5 4 -3 7 0 6'/><path d='M3 2 C 5 4 3 7 0 6'/></g><g transform='translate(20 95)'><circle cx='0' cy='0' r='1.5' fill='%23B8860B'/><path d='M0 -4 C -3 -4 -4 -1 -2 1'/><path d='M0 -4 C 3 -4 4 -1 2 1'/><path d='M-3 2 C -5 4 -3 7 0 6'/><path d='M3 2 C 5 4 3 7 0 6'/></g><path d='M55 55 q 4 -2 8 0' /><path d='M58 56 q 0 3 -2 5'/></g></svg>")`,
          backgroundSize: "150px 150px",
        }}
      />
      <MusicToggle active={opened} />
      <Envelope onOpen={() => setOpened(true)} />

      <div
        className="fixed inset-0 z-0"
        style={{
          background: "#A77C86",
          pointerEvents: "none",
        }}
      />

      {opened && (
        <main
          className="relative z-10 animate-fadeIn"
          style={{
            animation: "fadeIn 0.8s ease forwards",
          }}
        >
          {/* Language Toggle Button */}
          <div className="fixed top-5 right-5 z-[9999]">
            <button
              onClick={toggle}
              className="px-5 h-8 rounded-full text-sm transition-all"
              style={{
                background: "#A77C86",
                border: "1px solid #F9E9E6",
                color: "#F9E9E6",
              }}
            >
              {lang === "ar" ? (
                <span className="font-kahand">العربية</span>
              ) : (
                <span className="font-amoshref">ENGLISH</span>
              )}
            </button>
          </div>

          <section className="flex justify-center relative z-20">
            <div className="relative w-full aspect-[9/16] overflow-hidden">
              <video
                src={invitationImg}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover animate-videoFade"
                style={{
                  background: "#A77C86",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "rgba(0,0,0,0.08)",
                }}
              />

              <div
                dir="ltr"
                className="absolute inset-0 flex items-center justify-center px-5 py-6"
              >
                <div className="translate-y-8 scale-60">
                  <div
                    className="flex flex-col items-center text-center px-5 py-6 rounded-2xl w-[98%] sm:w-[92%] gap-4 text-reveal"
                    style={{
                      background: "transparent",
                      backdropFilter: "none",
                      WebkitBackdropFilter: "none",
                      color: "#F9E9E6",
                      textShadow:
                        "0 1px 2px hsla(0,0%,0%,0.6), 0 0 10px hsla(0,0%,100%,0.35)",
                    }}
                  >
                    <div className="translate-y-3 flex flex-col items-center w-full">
                      {/* الأسطر العلوية */}
                      <div className="-mb-4 flex flex-col items-center gap-1 relative z-10 w-full" dir={lang === "ar" ? "rtl" : "ltr"}>
                        <div className={`${lang === "ar" ? "font-neirizi" : "font-amoshref"} text-lg sm:text-xl whitespace-nowrap`}>
                          {t("invite_to")}
                        </div>

                        <div className={`${lang === "ar" ? "font-neirizi" : "font-amoshref"} text-lg sm:text-xl whitespace-nowrap`}>
                          {t("invite_join")}
                        </div>

                        <div className={`${lang === "ar" ? "font-neirizi" : "font-amoshref"} text-lg sm:text-xl whitespace-nowrap`}>
                          {t("invite_day")}
                        </div>

                        <div className={`${lang === "ar" ? "font-neirizi" : "font-amoshref"} text-lg sm:text-xl whitespace-nowrap`}>
                          {t("invite_with_love")}
                        </div>

                        <div className="hidden items-center justify-center gap-20 font-tajawal text-lg sm:text-xl">
                          <span>{t("word1")}</span>
                          <span>{t("word2")}</span>
                        </div>

                        <div className={`${lang === "ar" ? "font-neirizi" : "font-amoshref"} text-lg sm:text-xl`}>
                          {t("invite_attend")}
                        </div>
                      </div>

                  {/* أسماء العرسان باستعمال المفتاحين المنفصلين */}
{/* أسماء العرسان محذية وموزونة باللغتين */}
<div className="w-full my-2 py-0 h-12 flex items-center justify-center relative z-20">
  <div
    className={`${
      lang === "ar"
        ? "font-a text-[3.2rem] sm:text-[4rem] -translate-y-3"
        : "font-whitney text-4xl sm:text-5xl translate-y-2"
    } tracking-wide leading-none text-center flex items-baseline justify-center gap-3 transition-transform duration-200`}
    style={{ lineHeight: 0.85 }}
    dir={lang === "ar" ? "rtl" : "ltr"}
  >
    <span className="inline-flex items-center">{t("bride_name")}</span>
    <span
      className={`${
        lang === "ar"
          ? "font-amoshref text-3xl sm:text-4xl"
          : "font-whitney text-2xl sm:text-3xl"
      } opacity-80 px-1 inline-flex items-center self-center`}
      style={{
        transform: lang === "ar" ? "translateY(8px)" : "translateY(0px)",
      }}
    >
      {t("and")}
    </span>
    <span className="inline-flex items-center">{t("groom_name")}</span>
  </div>
</div>




                      {/* السطران السفليان */}
                      <div className="mt-6 pt-2 flex flex-col items-center gap-1 relative z-10 w-full" dir={lang === "ar" ? "rtl" : "ltr"}>
                        <div className={`${lang === "ar" ? "font-neirizi" : "font-amoshref"} text-lg sm:text-xl`}>
                          {t("invite_god_willing")}
                        </div>
                        <div className={`${lang === "ar" ? "font-amoshref" : "font-amoshref"} text-lg sm:text-xl`}>
                          {t("date_line")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* السهم الزخرفي أسفل كرت الفيديو مع الحركة والاختفاء عند السحب */}
              <div
                className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-500 z-30 pointer-events-none ${
                  showScrollArrow ? "opacity-100 animate-bounce" : "opacity-0"
                }`}
              >
                <ScrollArrowIcon />
              </div>
            </div>
          </section>

          {/* Countdown */}
          <section className="px-4 py-16">
            <Reveal>
              <h2
                className={`${lang === "ar" ? "font-neirizi" : "font-whitney"} text-center text-3xl mb-2`}
                style={{ color: "#EFE6DE" }}
              >
                {t("countdown_title")}
              </h2>

              <p
                className={`${lang === "ar" ? "font-neirizi" : "font-amoshref"} text-center text-sm mb-10`}
                style={{ color: "#EFE6DE" }}
              >
                {t("countdown_date")}
              </p>
            </Reveal>

            <Reveal delay={150}>
              <Countdown />
            </Reveal>
          </section>

          <section className="px-4 py-12">
            <div className="text-center mb-8">
              <h2
                className={`${lang === "ar" ? "font-neirizi" : "font-whitney"} text-3xl mb-2`}
                style={{ color: "#EFE6DE" }}
              >
                {t("big_word")}
              </h2>

              <p
                className={`${lang === "ar" ? "font-neirizi" : "font-amoshref"} text-sm`}
                style={{ color: "#EFE6DE", opacity: 0.8 }}
              >
                {t("small_word")}
              </p>
            </div>

            <div
              className="mx-auto rounded-xl p-4 w-[calc(4*68px+3*12px)]"
              style={{
                background: "transparent",
                border: "1px solid rgba(249,233,230,0.65)",
                boxShadow: "0 0 10px rgba(249,233,230,0.08)",
              }}
            >
              <Timeline />
            </div>

            <div
              className="mx-auto mt-12 rounded-xl overflow-hidden w-[calc(4*68px+3*12px)] h-[220px]"
              style={{
                border: "1px solid rgba(249,233,230,0.65)",
                boxShadow: "0 0 10px rgba(249,233,230,0.08)",
              }}
            >
              <img
                src={newImage}
                alt=""
                className="w-full h-full object-cover object-center block"
              />
            </div>

            {/* مربع التفاصيل */}
            <div
              className="mx-auto mt-12 rounded-xl w-[calc(4*68px+3*12px)] p-6"
              style={{
                background: "transparent",
                border: "1px solid rgba(249,233,230,0.65)",
                boxShadow: "0 0 10px rgba(249,233,230,0.08)",
              }}
              dir={lang === "ar" ? "rtl" : "ltr"}
            >
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="w-5 h-5" style={{ color: "#EFE6DE" }} />
                <span
                  className={`${lang === "ar" ? "font-neirizi" : "font-amoshref"} text-sm`}
                  style={{ color: "#EFE6DE" }}
                >
                  {t("event_location")}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-5 h-5" style={{ color: "#EFE6DE" }} />
                <span className={`${lang === "ar" ? "font-neirizi" : "font-amoshref"} text-sm`} style={{ color: "#EFE6DE" }}>
                  {t("arrival_time")}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <CalendarDays className="w-5 h-5" style={{ color: "#EFE6DE" }} />
                <span className={`${lang === "ar" ? "font-neirizi" : "font-amoshref"} text-sm`} style={{ color: "#EFE6DE" }}>
                  {t("event_date")}
                </span>
              </div>

              <div
                className="mx-auto mb-6"
                style={{
                  width: "90%",
                  height: "1px",
                  background: "rgba(249,233,230,0.65)",
                }}
              />

              <div className="flex items-center gap-3 mb-5">
                <Baby className="w-5 h-5" style={{ color: "#EFE6DE" }} />
                <span className={`${lang === "ar" ? "font-neirizi" : "font-amoshref"} text-sm`} style={{ color: "#EFE6DE" }}>
                  {t("no_kids")}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <Camera className="w-5 h-5" style={{ color: "#EFE6DE" }} />
                <span className={`${lang === "ar" ? "font-neirizi" : "font-amoshref"} text-sm`} style={{ color: "#EFE6DE" }}>
                  {t("no_cameras")}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <QrCode className="w-5 h-5" style={{ color: "#EFE6DE" }} />
                <span className={`${lang === "ar" ? "font-neirizi" : "font-amoshref"} text-sm`} style={{ color: "#EFE6DE" }}>
                  {t("personal_invitation")}
                </span>
              </div>
            </div>

            <div
              className={`mx-auto mt-5 rounded-full flex items-center justify-center gap-2 ${
                lang === "ar" ? "font-neirizi" : "font-whitney"
              } text-sm w-[calc(4*68px+3*12px)]`}
              style={{
                height: "48px",
                background: "#F9E9E6",
                color: "#B78E99",
              }}
            >
              <MapPin className="w-5 h-5" style={{ color: "#B78E99" }} />
              <span>{t("location_button")}</span>
            </div>

            <div
              className="mx-auto mt-20 rounded-xl overflow-hidden w-[calc(4*68px+3*12px)]"
              style={{
                background: "transparent",
                border: "1px solid rgba(249,233,230,0.65)",
                boxShadow: "0 0 10px rgba(249,233,230,0.08)",
              }}
            >
              <img src={rImg} alt="" className="w-full h-auto block" />
            </div>

            <div className="mt-8 text-center">
              <h2
                className={`${lang === "ar" ? "font-whitney" : "font-whitney"} text-xl mb-2 font-medium tracking-widest`}
                style={{ color: "#F9E9E6" }}
              >
                {t("section2_title")}
              </h2>

              <p
                className={`${lang === "ar" ? "font-whitney" : "font-whitney"} text-sm`}
                style={{ color: "#F9E9E6", opacity: 0.8 }}
              >
                {t("section2_subtitle")}
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="px-4 py-12 text-center">
            <Reveal>
              <a
                href="https://www.tiktok.com/@shim2t?_r=1&_t=ZS-95w0d8f7vnk"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-sm underline underline-offset-4"
                style={{ color: "#EFE6DE" }}
              >
                @shim2t
              </a>
            </Reveal>
          </footer>
        </main>
      )}
    </div>
  );
};

export default Index;
