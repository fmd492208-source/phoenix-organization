/*
 * Phoenix website starter
 * 1) Replace GOOGLE_FORM_URL with your Google Form's public responder URL.
 * 2) Replace FACEBOOK_PAGE_URL with the official Phoenix page URL.
 */
const GOOGLE_FORM_URL = ""; // Example: https://docs.google.com/forms/d/e/FORM_ID/viewform
const FACEBOOK_PAGE_URL = ""; // Example: https://www.facebook.com/your-page

const translations = {
  bn: {
    skip:"মূল কনটেন্টে যান",brand:"ফিনিক্স",slogan:"সমাজ গঠনে অঙ্গীকারবদ্ধ",navAbout:"আমাদের সম্পর্কে",navWork:"কার্যক্রম",navJoin:"সদস্য হোন",navContact:"যোগাযোগ",
    eyebrow:"মানবিকতা • সচেতনতা • ইতিবাচক পরিবর্তন",heroTitle:'একসাথে গড়ি <span>সুন্দর সমাজ</span>',heroText:"শিক্ষা, সমাজসেবা, পরিবেশ সংরক্ষণ ও খেলাধুলার মাধ্যমে একটি শিক্ষিত, মানবিক, সচেতন ও বৈষম্যহীন সমাজ গড়ার প্রত্যয়ে আমরা এগিয়ে চলি।",seeWork:"আমাদের কার্যক্রম দেখুন",joinUs:"আমাদের সঙ্গে যুক্ত হোন",heroNote:"ফিনিক্স — সমাজ গঠনে অঙ্গীকারবদ্ধ",artLabel:"একটি ভালো কাজ, একটি ভালো পরিবর্তন",
    aboutEyebrow:"আমাদের পরিচয়",aboutTitle:"মানুষের পাশে, সমাজের জন্য",aboutText:"ফিনিক্স একটি সামাজিক উদ্যোগ, যার লক্ষ্য মানুষের মধ্যে সচেতনতা তৈরি করা এবং সম্মিলিত প্রচেষ্টায় ইতিবাচক পরিবর্তন আনা। শিক্ষা, মানবিক সহায়তা, পরিবেশবান্ধব উদ্যোগ ও সুস্থ বিনোদনের মাধ্যমে আমরা সমাজের পাশে থাকতে চাই।",aboutNote:"এই অংশে সংগঠনের প্রতিষ্ঠার সাল, ইতিহাস ও অনুমোদিত পরিচিতি যোগ করুন।",
    workEyebrow:"আমাদের উদ্যোগ",workTitle:"যে কাজগুলোতে আমরা বিশ্বাস করি",workSubtitle:"ছোট ছোট উদ্যোগ থেকেই শুরু হয় বড় পরিবর্তন।",card1Title:"শিক্ষা ও সচেতনতা",card1Text:"শিক্ষার প্রসার, কোরআন শিক্ষা এবং সামাজিক সচেতনতা তৈরিতে উদ্যোগ।",card2Title:"মানবিক সহায়তা",card2Text:"অসহায় ও সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানোর প্রচেষ্টা।",card3Title:"পরিবেশ সংরক্ষণ",card3Text:"বৃক্ষরোপণ ও পরিবেশবান্ধব অভ্যাস গড়ে তোলার উদ্যোগ।",card4Title:"খেলাধুলা ও সুস্থতা",card4Text:"ম্যারাথন, ফুটবলসহ খেলাধুলার মাধ্যমে বন্ধন ও সুস্থতা।",card5Title:"সামাজিক দায়বদ্ধতা",card5Text:"বাল্যবিবাহ, মাদকাসক্তি ও বাল্যশ্রমের বিরুদ্ধে সচেতনতা।",card6Title:"সম্প্রীতি ও মিলন",card6Text:"সদস্যদের মধ্যে সৌহার্দ্য, সহযোগিতা ও পারস্পরিক সম্মান।",
    joinEyebrow:"আপনিও হতে পারেন পরিবর্তনের অংশ",joinTitle:"আপনার সময়, দক্ষতা ও সদিচ্ছাই মূল্যবান",joinText:"ফিনিক্সের কার্যক্রমে স্বেচ্ছাসেবক হিসেবে যুক্ত হতে নিবন্ধন ফর্ম পূরণ করুন।",joinForm:"সদস্য/স্বেচ্ছাসেবক ফর্ম",formNotice:"ফর্মের লিংক যুক্ত করতে script.js ফাইলে GOOGLE_FORM_URL পরিবর্তন করুন।",
    contactEyebrow:"যোগাযোগ",contactTitle:"চলুন, একসাথে ভালো কিছু করি",contactText:"সংগঠনের কার্যক্রম, সহযোগিতা বা স্বেচ্ছাসেবক হওয়ার বিষয়ে জানতে যোগাযোগ করুন।",locationLabel:"এলাকা",locationValue:"বুড়াবুড়ি, উলিপুর, কুড়িগ্রাম, বাংলাদেশ",socialLabel:"সামাজিক যোগাযোগমাধ্যম",socialValue:"ফিনিক্সের অফিসিয়াল পেজের লিংক যোগ করুন",emailLabel:"ইমেইল",emailValue:"অফিসিয়াল ইমেইল যোগ করুন",facebookLink:"ফেসবুক পেজ দেখুন ↗",footerText:"মানবিক, সচেতন ও বৈষম্যহীন সমাজের প্রত্যয়ে।",rights:"সর্বস্বত্ব সংরক্ষিত।"
  },
  en: {
    skip:"Skip to content",brand:"PHOENIX",slogan:"Committed to building society",navAbout:"About",navWork:"Our work",navJoin:"Join us",navContact:"Contact",
    eyebrow:"Humanity • Awareness • Positive change",heroTitle:'Together, let’s build a <span>better society</span>',heroText:"We work toward an educated, compassionate, aware and inclusive society through education, social service, environmental care and sports.",seeWork:"Explore our work",joinUs:"Get involved",heroNote:"Phoenix — Committed to building society",artLabel:"One good deed. One positive change.",
    aboutEyebrow:"Who we are",aboutTitle:"Standing with people, serving society",aboutText:"Phoenix is a community initiative that aims to raise awareness and create positive change through collective action. We seek to serve society through education, humanitarian support, environmental initiatives and healthy recreation.",aboutNote:"Add the organization’s founding year, history and approved profile here.",
    workEyebrow:"Our initiatives",workTitle:"What we believe in",workSubtitle:"Big changes begin with small, meaningful actions.",card1Title:"Education & awareness",card1Text:"Promoting learning, Quran education and social awareness.",card2Title:"Humanitarian support",card2Text:"Standing beside people facing hardship and disadvantage.",card3Title:"Environmental care",card3Text:"Tree planting and encouraging environmentally friendly habits.",card4Title:"Sports & wellbeing",card4Text:"Building connection and wellbeing through marathons, football and sports.",card5Title:"Social responsibility",card5Text:"Raising awareness against child marriage, drug abuse and child labour.",card6Title:"Community & fellowship",card6Text:"Encouraging friendship, cooperation and mutual respect among members.",
    joinEyebrow:"Be part of positive change",joinTitle:"Your time, skills and goodwill matter",joinText:"Fill out the registration form to volunteer with Phoenix.",joinForm:"Member / volunteer form",formNotice:"To connect your form, replace GOOGLE_FORM_URL in script.js.",
    contactEyebrow:"Contact",contactTitle:"Let’s do something good together",contactText:"Contact us to learn about our activities, collaboration or volunteering.",locationLabel:"Location",locationValue:"Buraburi, Ulipur, Kurigram, Bangladesh",socialLabel:"Social media",socialValue:"Add Phoenix’s official page link",emailLabel:"Email",emailValue:"Add official email address",facebookLink:"Visit Facebook page ↗",footerText:"Working toward a compassionate, aware and inclusive society.",rights:"All rights reserved."
  }
};

let currentLanguage = "bn";
const languageToggle = document.getElementById("languageToggle");
function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
  languageToggle.textContent = lang === "bn" ? "EN" : "বাংলা";
  languageToggle.setAttribute("aria-label", lang === "bn" ? "Switch to English" : "বাংলায় পরিবর্তন করুন");
}
languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "bn" ? "en" : "bn"));

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

const joinButton = document.getElementById("joinButton");
joinButton.href = GOOGLE_FORM_URL || "#contact";
joinButton.addEventListener("click", event => {
  if (!GOOGLE_FORM_URL) {
    event.preventDefault();
    alert(currentLanguage === "bn"
      ? "Google Form-এর লিংক এখনো যোগ করা হয়নি। script.js ফাইলে GOOGLE_FORM_URL বসান।"
      : "The Google Form link has not been added yet. Set GOOGLE_FORM_URL in script.js.");
  }
});
const facebookLink = document.getElementById("facebookLink");
if (FACEBOOK_PAGE_URL) facebookLink.href = FACEBOOK_PAGE_URL;
else facebookLink.addEventListener("click", event => {
  event.preventDefault();
  alert(currentLanguage === "bn"
    ? "ফেসবুক পেজের লিংক এখনো যোগ করা হয়নি। script.js ফাইলে FACEBOOK_PAGE_URL বসান।"
    : "The Facebook page link has not been added yet. Set FACEBOOK_PAGE_URL in script.js.");
});
document.getElementById("year").textContent = new Date().getFullYear();
