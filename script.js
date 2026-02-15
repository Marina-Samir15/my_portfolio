// 1. AOS Initialization
AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
  offset: 100,
});

// 2. Translations Object
const translations = {
  en: {
    words: ["Full-Stack .NET Developer", "Graphic Designer", "Problem Solver"],
    heroGreeting: "Hi, I'm",
    aboutTitle: "About <span>Me</span>",
    skillsTitle: "Technical <span>Skills</span>",
    projectsTitle: "Featured <span>Creations</span>",
    journeyTitle: "Professional <span>Journey</span>",
    contactTitle: "Get In <span>Touch</span>",
    viewWork: "View My Work",
    downloadCV: "Download CV",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExp: "Experience",
    navContact: "Contact",
    eduTitle: "Education & Training"
  },
  ar: {
    words: ["مطور .NET متكامل", "مصممة جرافيك", "حلالة مشكلات"],
    heroGreeting: "مرحباً، أنا",
    aboutTitle: "نبذة <span>عني</span>",
    skillsTitle: "المهارات <span>التقنية</span>",
    projectsTitle: "أبرز <span>أعمالي</span>",
    journeyTitle: "المسيرة <span>المهنية</span>",
    contactTitle: "تواصل <span>معي</span>",
    viewWork: "عرض أعمالي",
    downloadCV: "تحميل السيرة الذاتية",
    navAbout: "عني",
    navSkills: "مهاراتي",
    navProjects: "مشاريعي",
    navExp: "خبراتي",
    navContact: "تواصل",
    eduTitle: "التعليم والتدريب"
  }
};

let currentLang = 'en';
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

// 3. Typewriter Effect
function type() {
  const typewriterElement = document.getElementById("typewriter");
  const words = translations[currentLang].words;
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 150;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

// 4. Particles.js Configuration
particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: "#00d2ff" },
    shape: { type: "circle" },
    opacity: { value: 0.2 },
    size: { value: 2 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00d2ff",
      opacity: 0.1,
      width: 1,
    },
    move: { enable: true, speed: 1.5 },
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "grab" } },
  },
});

// 5. Language Switcher
function updateLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  const t = translations[lang];
  
  // Update all data-t elements
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update hero greeting and name
  const heroGreeting = document.querySelector('.hero-greeting');
  if (heroGreeting) {
    heroGreeting.textContent = t.heroGreeting;
  }

  // Update language button
  const langBtn = document.getElementById('lang-switch');
  langBtn.textContent = lang === 'en' ? 'العربية' : 'English';

  // Restart typewriter with new language
  wordIndex = 0;
  charIndex = 0;
  isDeleting = false;
  type();
}

// 6. DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggler");
  const navLinks = document.getElementById("nav-links");
  const navbar = document.querySelector(".navbar");
  const langBtn = document.getElementById("lang-switch");

  // Menu Toggle
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    navLinks.classList.toggle("active");
    document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "auto";
  });

  // Close menu on link click
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("open");
      navLinks.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Language Switcher
  langBtn.addEventListener("click", () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage(newLang);
  });

  // Start Typewriter
  type();
});

// 7. Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});
