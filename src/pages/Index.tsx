import { useState } from "react";
import { MapPin, Heart, QrCode, Baby, Camera, Clock } from "lucide-react";
import invitationImg from "@/assets/roko.mp4";
import Envelope from "@/components/Envelope";
import SprayParticles from "@/components/SprayParticles";
import Reveal from "@/components/Reveal";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import RSVP from "@/components/RSVP";
import MusicToggle from "@/components/MusicToggle";
import backgroundImg from "@/assets/sarah.png";
import dividerImg from "@/assets/Photoroom_20260705_140806.png";
import locationIcon from "@/assets/photo-output.png";
const Index = () => {
  const [opened, setOpened] = useState(false);

  return (
  <div
  style={{
    backgroundImage: `url(${backgroundImg})`,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center top",
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
      <SprayParticles />
      <MusicToggle active={opened} />
      {!opened && <Envelope onOpen={() => setOpened(true)} />}

      {opened && (
        <main className="relative z-10">
<section className="flex justify-center relative z-20">
  <video
src={invitationImg}
    autoPlay
    muted
    loop
    playsInline
    className="w-screen h-auto max-w-none block"
    style={{
      boxShadow: "var(--shadow-elegant)",
      display: "block",
    }}
  />
</section>

          {/* Countdown */}
        <section className="px-4 py-16">
  <Reveal>
    <p
      className="text-center font-arabic text-sm mb-2"
      style={{ color: "#8C7A67" }}
    >
30 . يوليو . 2026
    </p>

    <h2
      className="text-center font-arabic text-3xl mb-10"
      style={{ color: "#3C2E23" }}
    >
      العدّ التنازلي
    </h2>
  </Reveal>

  <Reveal delay={150}>
    <Countdown />
  </Reveal>
</section>

<section className="-mx-4 py-8">
  <img
    src={dividerImg}
    alt=""
    className="block w-full h-auto"
  />
</section>

<section className="px-4 py-16">
  <Reveal>
    <div className="text-center mb-8">
      <img
        src={locationIcon}
        alt=""
        className="mx-auto mb-4 w-14 h-auto"
      />

      <h2
        className="font-arabic text-3xl"
        style={{ color: "#3C2E23" }}
      >
        تفاصيل يوم الفرح
      </h2>

      <div
        className="font-arabic text-sm mt-2"
        style={{ color: "#7A6A82" }}
      >
        كل ما تحتاج معرفته
      </div>
    </div>
  </Reveal>

 <Reveal delay={200}>
  <div
    className="max-w-sm mx-auto rounded-3xl p-4"
    style={{
      background: "#FFFDFB",
      border: "1px solid #D8C8D9",
      boxShadow: "0 10px 30px rgba(120, 85, 140, 0.12)",
    }}
  >
    {/* اسم القاعة */}
    <div className="flex items-center justify-center gap-2 mb-4">
      <img
        src={locationIcon}
        alt=""
        className="w-5 h-5"
      />

      <span
        className="font-arabic text-sm"
        style={{
          color: "#000",
          fontWeight: 600,
        }}
      >
        قاعة أروما للمناسبات والمؤتمرات
      </span>
    </div>

    {/* الخريطة */}
    <iframe
      title="موقع الحفل - قاعة أروما"
      src="https://www.google.com/maps?q=قاعة+أروما+الرياض&output=embed"
      width="100%"
      height="230"
      loading="lazy"
      style={{
        border: 0,
        borderRadius: "16px",
      }}
    />

    {/* اسم الموقع */}
    <div
      className="text-center mt-4 font-arabic"
      style={{
        color: "#000",
        fontSize: "15px",
        fontWeight: 600,
      }}
    >
      قاعة أروما - الرياض
    </div>

    {/* وقت الحضور */}
    <div
      className="flex items-center justify-center gap-2 mt-3 mb-5"
    >
      <Clock
        className="w-4 h-4"
        style={{ color: "#A882B8" }}
      />

      <span
        className="font-arabic text-sm"
        style={{ color: "#000" }}
      >
        وقت الحضور الساعة 8:00 م
      </span>
    </div>

    {/* الأزرار */}
    <div className="grid grid-cols-2 gap-3">
      <a
        href="https://www.google.com/maps/search/?api=1&query=قاعة+أروما+الرياض"
        target="_blank"
        rel="noopener noreferrer"
        className="py-3 rounded-xl text-center font-arabic text-sm"
        style={{
          background: "#FFFFFF",
          border: "1px solid #D9C2E4",
          color: "#A882B8",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        افتح في الخريطة
      </a>

      <button
        className="py-3 rounded-xl font-arabic text-sm"
        style={{
          background: "#A882B8",
          color: "#FFF",
          border: "none",
          fontWeight: 600,
        }}
      >
        إضافة إلى التقويم
      </button>
    </div>
  </div>
</Reveal>


          {/* Details */}
          <section className="px-4 py-16">
  <Reveal>
    <h2
      className="text-center font-arabic text-3xl mb-10"
      style={{ color: "#3C2E23" }}
    >
      تفاصيل الحفل
    </h2>
  </Reveal>

  <div className="relative max-w-xl mx-auto">
              <div
                className="absolute top-6 bottom-6 right-6 w-px"
                style={{ background: "hsl(42 75% 55% / 0.5)" }}
              />
              <div className="space-y-6">
                {[
                  { icon: Clock, text: "  الاستقبــــال : 9:00 م" },
                  { icon: Baby, text: "يمنع اصطحاب الأطفال" },
                  { icon: Camera, text: "يمنع دخول جوالات الكاميرا" },
                  { icon: QrCode, text: "يرجى إبراز الباركود عند الدخول" },
                ].map((d, i) => (
                  <Reveal key={i} delay={i * 120}>
                    <div className="relative pr-16">
                      <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10"
                        style={{
                          background: "hsl(40 50% 95%)",
                          border: "2px solid hsl(42 75% 50%)",
                          boxShadow: "0 0 14px hsl(42 80% 60% / 0.4)",
                        }}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: "hsl(42 75% 50%)" }}
                        />
                      </div>
                      <div
                        className="rounded-xl px-6 py-5 backdrop-blur-md flex items-center justify-between gap-4"
                        style={{
background: "#F8F6F2",
                          border: "1.5px solid hsl(42 75% 55% / 0.4)",
                          boxShadow: "var(--shadow-soft)",
                        }}
                      >
                        <span className="font-arabic text-lg text-primary flex-1 text-right">
                          {d.text}
                        </span>
                        <d.icon className="w-7 h-7 shrink-0" style={{ color: "hsl(42 75% 45%)" }} />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* RSVP */}
          <section className="px-4 py-16">
            <Reveal>
<h2
  className="text-center font-arabic text-3xl mb-2"
  style={{ color: "#3C2E23" }}
>
  أكّد حضورك
</h2>
              <p
  className="text-center font-arabic text-sm mb-10"
  style={{ color: "#3C2E23" }}
>
  نتشرف بحضوركم — سيتم إصدار باركود خاص لكل ضيف
</p>
            </Reveal>
            <RSVP />
          </section>

          {/* Footer */}
          <footer className="px-4 py-12 text-center">
            <Reveal>
<div
  className="flex items-center justify-center gap-2"
  style={{ color: "#3C2E23" }}
>
                <Heart className="w-4 h-4 fill-current" />
                <span className="font-arabic text-sm">
                  صُنع بحب بواسطة{" "}
                  <a
                    href="https://www.tiktok.com/@shim2t?_r=1&_t=ZS-95w0d8f7vnk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 transition-colors"
style={{ color: "#3C2E23" }}
                  >
                    متجر غيمة
                  </a>
                </span>
              </div>
            </Reveal>
          </footer>
        </main>
      )}
    </div>
  );
};

export default Index;
