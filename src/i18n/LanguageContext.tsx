import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

type Dict = Record<string, string>;

const ar: Dict = {
  // Invitation
  tap_open: "اضغط لفتح الدعوة",
  invite_to: "إلى كل غــــــــــالي ومحـــــــــب",
  invite_join: "يسعدنا ان تكونوا جزء من فرحتنا",
  invite_day: "يــــَوم تعانق الفرحة قلـــــوبنا",
  invite_with_love: "بكـل الحـب والـود تتـــشرف",
  word1: "السيدة",
  word2: "السيدة",
  mother_name1: "فوز المقاطي",
and: "و",
  mother_name2: "سميرة الغامدي",
  invite_attend: "بدعوتكم لحضور حفل زفاف",
  invite_before_bride: "أبنها",
  invite_before_bride_2: "ابنتها",
  bride_name: "حاتم",
  groom_name: "روان",
  invite_god_willing: "وذلك بمشيئة الله تعالى يوم السبت",
  date_line: "2026 . 07 . 04 | 1448 . 01 . 19",

  // Countdown
  countdown_title: "العدّ التنازلي",
  days: "أيام",
  hours: "ساعات",
  minutes: "دقائق",
  seconds: "ثواني",

  // Details
  details_title: "تفاصيل الحفل",
  details_subtitle: "كل ما تحتاج معرفته",

  // Venue
  venue_title: "موقع حفلنا",
  venue_name: "قاعة شهرزاد",
  venue_city: "الطائف",

  hall_name: "قاعة أروما للمناسبات والمؤتمرات",
  hall_city: "قاعة أروما - الرياض",
  arrival_time: "الحضور الساعة 8:00 م",
  open_map: "افتح في الخريطة",
  add_calendar: "إضافة إلى التقويم",

  // Program
  program_title: "برنامج الحفل",
  program_subtitle: "خطتنا لليوم الكبير",
  program_reception: "الاستقبال",
  program_zaffa: "الزفة",
  program_dinner: "العشاء",
  no_cameras: "يمنع دخول جوالات الكاميرا",
  no_kids: "يمنع اصطحاب الأطفال",
  swipe_more: "اسحب لرؤية المزيد",

  // RSVP
  rsvp_title: "أكد حضورك",
  rsvp_sub: "نتشرف بحضوركم",
  rsvp_deadline: "نرجو الرد قبل 23 يوليو 2026",

  name_label: "الاسم الكريم",
  name_placeholder: "اكتب اسمك هنا",
  confirm: "تأكيد الحضور",
  decline: "الاعتذار",
  send: "إرسال",
  sending: "جارٍ الإرسال...",

welcome: "أهلاً وسهلاً",
guest_count: "عدد المرافقين",
already_registered: "تم التسجيل مسبقاً من هذا الجهاز",
error_try_again: "حدث خطأ، حاول مرة أخرى",
see_you_next_time: "ونراك في مناسبة أخرى بإذن الله",
save_qr_warning: "يرجى حفظ الباركود لأنه مطلوب عند الدخول",
dont_scan_qr: "الرجاء عدم مسح الباركود",

  thanks_attending: "شكراً لتأكيد حضورك",
  thanks_declined: "نقدّر اعتذارك",
  redirect_wa: "سيتم تحويلك إلى الواتساب لإرسال الرد...",

  // QR
  qr_title: "باركود الدخول الخاص بك",
  qr_sub: "يرجى تقديم هذا الباركود عند البوابة",
  save_qr: "حفظ الباركود",
  redirecting_in: "سيتم تحويلك إلى الواتساب خلال",
  seconds_short: "ث",

  // Footer
  made_by: "صُنع بحب بواسطة",
  store: "متجر غيمة",

  // Calendar
  date_full: "السبت 4 يوليو 2026",
  cal_day: "Saturday",
  cal_month: "July",
  cal_year: "2026",
};

const en: Dict = {
  // Invitation
  tap_open: "Tap to open the invitation",
  invite_to: "To Our Dearest Loved Ones",
  invite_join: "It would be our joy to have you share in our happiness",
  invite_day: "On the day joy embraces our hearts",
  invite_with_love: "With all love and affection",
  word1: "Mrs.",
  word2: "Mrs.",
  mother_name1: "Fawz Al-Muqati",
and: "&",
  mother_name2: "Samirah Al-Ghamdi",
  invite_attend: "Cordially invites you to attend the wedding of",
  invite_before_bride: "her son",
  invite_before_bride_2: "her daughter",
  bride_name: "Hatem",
  groom_name: "Rawan",
  invite_god_willing: "God willing, on Saturday",
  date_line: "04 . 07 . 2026 | 19 . 01 . 1448",

  // Countdown
  countdown_title: "Countdown",
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",

  // Details
  details_title: "Event Details",
  details_subtitle: "Everything you need to know",

  // Venue
  venue_title: "Our Venue",
  venue_name: "Scheherazade Hall",
  venue_city: "Taif",

  hall_name: "Aroma Hall for Events & Conferences",
  hall_city: "Aroma Hall - Riyadh",
  arrival_time: "Arrival at 8:00 PM",
  open_map: "Open Map",
  add_calendar: "Add to Calendar",

  // Program
  program_title: "Event Program",
  program_subtitle: "Our schedule for the special day",
  program_reception: "Reception",
  program_zaffa: "Zaffa",
  program_dinner: "Dinner",
  no_cameras: "No camera phones allowed",
  no_kids: "Children are not permitted",
  swipe_more: "Swipe to see more",

  // RSVP
  rsvp_title: "Confirm Your Attendance",
  rsvp_sub: "We would be honored by your presence",
  rsvp_deadline: "Please respond before July 23, 2026",

  name_label: "Full Name",
  name_placeholder: "Enter your name",
  confirm: "Will Attend",
  decline: "Decline",
  send: "Send",
  sending: "Sending...",

  welcome: "Welcome",
guest_count: "Number of Companions",
  already_registered: "This device has already been registered",
  error_try_again: "An error occurred, please try again",
  see_you_next_time: "We hope to see you on another occasion",
  save_qr_warning: "Please save this QR code. It is required for entry",
  dont_scan_qr: "Please do not scan the QR code",

  thanks_attending: "Thank you for confirming your attendance",
  thanks_declined: "We appreciate your response",
  redirect_wa: "Redirecting you to WhatsApp...",

  // QR
  qr_title: "Your Entry QR Code",
  qr_sub: "Please present this QR code at the entrance",
  save_qr: "Save QR Code",
  redirecting_in: "Redirecting to WhatsApp in",
  seconds_short: "s",

  // Footer
  made_by: "Crafted with love by",
  store: "Ghaimah Store",

  // Calendar
  date_full: "Saturday, July 4, 2026",
  cal_day: "Saturday",
  cal_month: "July",
  cal_year: "2026",
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
    return (saved === "en" || saved === "ar") ? saved : "ar";
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
