import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

type Dict = Record<string, string>;

const ar: Dict = {
  // Invitation
  tap_open: "اضغط لفتح الدعوة",
  invite_to: "في ليلةٍ اختارها الله لتكون أجمل البدايات",
  invite_join: "نجتمع على فرحةٍ طال انتظارها وننتظر حضوركم",
  invite_day: "الذي يُزهر به القلب وتكتمل به الحكاية",
  invite_with_love: " ",
  and: "&",
  invite_attend:  "نفتح لكم أبواب فرحتنا بدعوتكم لحضور حفل زفاف",
  bride_name: "سلطـــان",
  groom_name: "حـــنين",
  invite_god_willing: "وذلك بمشيئة الله ",
  date_line: "12 . 08 . 2026",
  // اضف هذا السطر للقاموس العربي:
date_line_hijri: "١٤٤٧/٠٢/٠١ هـ",


  // Countdown
  countdown_date: "حتى نلتقي في يومنا السعيد",
  countdown_title: "العد التنازلي",
  days: "أيام",
  hours: "ساعات",
  minutes: "دقائق",
  seconds: "ثواني",

  // Section Headers & Details
  big_word: "التفاصيل",
  small_word: "كل ما تحتاجون معرفته عن يومنا السعيد",
  location_button: "الموقع",
  event_location: "قاعة درة النجوم",
  event_date: "الأربعاء 12 أغسطس 2026",
  arrival_time: "8:00 مساءً",
  personal_invitation: "الدعوة شخصية",

  // Timeline / Program (مفاتيح موحدة للخط الزمني والمشروع)
  reception: "استقبال الضيوف",
  zaffa: "الزفة",
  dinner: "العشاء",

  // Restrictions
  no_cameras: "يمنع التصوير",
  no_kids: "يمنع حضور الأطفال منعاً باتاً",

  // RSVP
  rsvp_title: "يشرفنا حضوركم",
  rsvp_sub: "نتشرف بحضوركم",
  rsvp_deadline: "نرجو الرد قبل الموعد المحدد",
  name_label: "الاسم الكريم",
  name_placeholder: "اكتب اسمك هنا",
  confirm: "تأكيد الحضور",
  decline: "الاعتذار",
  send: "إرسال",
  sending: "جارٍ الإرسال...",
  welcome: "أهلاً وسهلاً",
  thanks_attending: "شكراً لتأكيد حضورك",
  thanks_declined: "نقدّر اعتذارك",

  // QR & Footer
  qr_title: "باركود الدخول الخاص بك",
  save_qr: "حفظ الباركود",
  section2_title: "Mohammed | Hanee",
  section2_subtitle: "12 . 08 . 2026",
  tiktok: "غيمة",
};

const en: Dict = {
  // Invitation
  tap_open: "Tap to Open Invitation",
  invite_to: "A night chosen by Allah for beautiful beginnings",
  invite_join: "We gather in long-awaited joy & await your presence",
  invite_day: "Where hearts bloom and our story completes",
  invite_with_love: "  ",
  and: "&",
  invite_attend: "We open our doors with love to welcome you",
  bride_name: "Sultan",
  groom_name: "Haneen",
  invite_god_willing: "God willing, on Wednesday",
  date_line: "12 . 08 . 2026",

  // Countdown
  countdown_date: "Until Our Special Day",
  countdown_title: "Countdown",
  days: "Days",
  hours: "Hours",
  minutes: "Mins",
  seconds: "Secs",

  // Section Headers & Details
  big_word: "Details",
  small_word: "Everything you need to know about our day",
  location_button: "Location",
  event_location: "Durat Al Nujoom Hall",
  event_date: "Wednesday, Aug 12, 2026",
  arrival_time: "8:00 PM",
  personal_invitation: "Personal Invitation",

  // Timeline / Program
  reception: "Reception",
  zaffa: "Grand Entrance",
  dinner: "Dinner",

  // Restrictions
  no_cameras: "No Cameras Allowed",
  no_kids: "Adults Only",

  // RSVP
  rsvp_title: "RSVP",
  rsvp_sub: "We would be honored by your presence",
  rsvp_deadline: "Please respond before the deadline",
  name_label: "Full Name",
  name_placeholder: "Enter your name",
  confirm: "Attending",
  decline: "Declining",
  send: "Send",
  sending: "Sending...",
  welcome: "Welcome",
  thanks_attending: "Thank you for confirming",
  thanks_declined: "We appreciate your response",

  // QR & Footer
  qr_title: "Your Entry QR Code",
  save_qr: "Save QR Code",
  section2_title: "Mohammed | Hanee",
  section2_subtitle: "12 . 08 . 2026",
  tiktok: "@shim2t",
};

const dicts = { ar, en };

interface LangCtx {
  lang: Lang;
  t: (k: keyof typeof ar) => string;
  toggle: () => void;
  dir: "rtl" | "ltr";
}

const Ctx = createContext<LangCtx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    return saved === "en" || saved === "ar" ? saved : "ar";
  });
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const t = (k: keyof typeof ar) => dicts[lang][k] ?? k;
  const toggle = () => setLang((l) => (l === "ar" ? "en" : "ar"));

  return <Ctx.Provider value={{ lang, t, toggle, dir }}>{children}</Ctx.Provider>;
};

export const useLang = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLang must be inside LanguageProvider");
  return c;
};
