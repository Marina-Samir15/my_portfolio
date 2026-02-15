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
    aboutP1: "I am a <strong class='highlight'>Full-Stack .NET Developer</strong> with a solid foundation in Information Technology. Currently, I'm honing my expertise through the <strong class='highlight'>DEPI Initiative</strong>, focusing on building scalable and efficient web applications.",
    aboutP2: "With a background in <strong class='highlight'>Graphic Design</strong>, I ensure that my back-end logic is complemented by clean, user-friendly, and fully responsive interfaces.",
    skillsTitle: "Technical <span>Skills</span>",
    projectsTitle: "Featured <span>Creations</span>",
    journeyTitle: "Professional <span>Journey</span>",
    contactTitle: "Get In <span>Touch</span>",
    btnWork: "View My Work",
    btnCV: "Download CV",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExp: "Experience",
    navContact: "Contact",
    eduTitle: "Education & Training",
    "edu-1-title": "Information Technology",
    "edu-1-org": "NATU University",
    "edu-2-title": "Full-Stack .NET Track",
    "edu-2-org": "DEPI (Digital Egypt Pioneers Initiative)",
    "skill-cat-1": "Languages & Back-End",
    "skill-cat-2": "Front-End",
    "skill-cat-3": "Tools & Design",
    "view-project": "Visit Project",
    "view-live": "View Live",
    "p1-tag": "Dynamic App",
    "p1-title": "My Planner",
    "p1-desc": "Advanced task management with an analytical soul and local persistence.",
    "p2-tag": "Logic Heavy",
    "p2-title": "To-Do List",
    "p2-desc": "Clean, efficient task filtering with real-time feedback and sleek UI.",
    "p3-tag": "Healthcare",
    "p3-title": "Care Connect",
    "p3-desc": "Healthcare platform connecting patients with specialized medical care.",
    "p4-tag": "Restaurant",
    "p4-title": "Leon",
    "p4-desc": "Modern restaurant landing page with elegant design and smooth animations.",
    "exp-1-title": "Full-Stack .NET Developer Trainee",
    "exp-1-org": "DEPI Initiative",
    "exp-1-desc": "Currently advancing my expertise in building scalable web applications using .NET technologies.",
    "exp-1-date": "Present",
    "exp-2-title": "Problem Solving Mentor",
    "exp-2-org": "NATU University",
    "exp-2-desc": "Mentoring students in problem-solving techniques and programming fundamentals.",
    "exp-2-date": "2024 - Present",
    "exp-3-title": "Java Programming Training",
    "exp-3-org": "Information Technology Institute (ITI)",
    "exp-3-desc": "Completed comprehensive Java programming course with focus on OOP and data structures.",
    "exp-3-date": "2023 - 2024",
    "exp-4-title": "Graphic Design Specialist",
    "exp-4-org": "National Telecommunication Institute (NTI)",
    "exp-4-desc": "Specialized in UI/UX design and digital graphics with Adobe Creative Suite.",
    "exp-4-date": "2022 - 2023",
    "contact-email": "Email",
    "contact-phone": "Phone",
    "contact-loc": "Location",
    "contact-loc-val": "Egypt",
    "footer-text": "&copy; 2026 Marina Samir. Built with <i class='fas fa-heart' style='color: var(--secondary)'></i> & .NET Spirit."
  },
  ar: {
    words: ["مطور .NET متكامل", "مصمم جرافيك", "محلل مشكلات"],
    heroGreeting: "مرحباً، أنا",
    aboutTitle: "نبذة <span>عني</span>",
    aboutP1: "أنا <strong class='highlight'>مطور .NET متكامل</strong> لدي أساس قوي في تكنولوجيا المعلومات. حالياً، أقوم بصقل خبراتي من خلال <strong class='highlight'>مبادرة DEPI</strong>، مع التركيز على بناء تطبيقات ويب قابلة للتوسع وفعالة.",
    aboutP2: "مع خلفية في <strong class='highlight'>التصميم الجرافيكي</strong>، أضمن أن المنطق البرمجي الخاص بي يكتمل بواجهات نظيفة، سهلة الاستخدام، ومتجاوبة تماماً.",
    skillsTitle: "المهارات <span>التقنية</span>",
    projectsTitle: "أبرز <span>أعمالي</span>",
    journeyTitle: "المسيرة <span>المهنية</span>",
    contactTitle: "تواصل <span>معي</span>",
    btnWork: "عرض أعمالي",
    btnCV: "تحميل السيرة الذاتية",
    navAbout: "عني",
    navSkills: "مهاراتي",
    navProjects: "مشاريعي",
    navExp: "خبراتي",
    navContact: "تواصل",
    eduTitle: "التعليم والتدريب",
    "edu-1-title": "تكنولوجيا المعلومات",
    "edu-1-org": "جامعة NATU",
    "edu-2-title": "مسار .NET المتكامل",
    "edu-2-org": "مبادرة رواد مصر الرقمية (DEPI)",
    "skill-cat-1": "اللغات والبرمجة الخلفية",
    "skill-cat-2": "البرمجة الأمامية",
    "skill-cat-3": "الأدوات والتصميم",
    "view-project": "زيارة المشروع",
    "view-live": "عرض مباشر",
    "p1-tag": "تطبيق ديناميكي",
    "p1-title": "مخططي (My Planner)",
    "p1-desc": "إدارة مهام متقدمة مع روح تحليلية وحفظ محلي للبيانات.",
    "p2-tag": "منطق برمجي مكثف",
    "p2-title": "قائمة المهام",
    "p2-desc": "تصفية مهام نظيفة وفعالة مع استجابة فورية وواجهة مستخدم أنيقة.",
    "p3-tag": "الرعاية الصحية",
    "p3-title": "كير كونكت (Care Connect)",
    "p3-desc": "منصة رعاية صحية تربط المرضى بالرعاية الطبية المتخصصة.",
    "p4-tag": "مطعم",
    "p4-title": "ليون (Leon)",
    "p4-desc": "صفحة هبوط لمطعم حديث بتصميم أنيق ورسوم متحركة سلسة.",
    "exp-1-title": "متدرب مطور .NET متكامل",
    "exp-1-org": "مبادرة DEPI",
    "exp-1-desc": "أقوم حالياً بتطوير خبراتي في بناء تطبيقات الويب باستخدام تقنيات .NET.",
    "exp-1-date": "حالياً",
    "exp-2-title": "mentor حل المشكلات",
    "exp-2-org": "جامعة NATU",
    "exp-2-desc": "توجيه الطلاب في تقنيات حل المشكلات وأساسيات البرمجة.",
    "exp-2-date": "2024 - حالياً",
    "exp-3-title": "تدريب برمجة جافا",
    "exp-3-org": "معهد تكنولوجيا المعلومات (ITI)",
    "exp-3-desc": "أكملت دورة برمجة جافا شاملة مع التركيز على البرمجة كائنية التوجه وهياكل البيانات.",
    "exp-3-date": "2023 - 2024",
    "exp-4-title": "أخصائي تصميم جرافيك",
    "exp-4-org": "المعهد القومي للاتصالات (NTI)",
    "exp-4-desc": "متخصص في تصميم واجهة المستخدم وتجربة المستخدم والرسومات الرقمية.",
    "exp-4-date": "2022 - 2023",
    "contact-email": "البريد الإلكتروني",
    "contact-phone": "الهاتف",
    "contact-loc": "الموقع",
    "contact-loc-val": "مصر",
    "footer-text": "&copy; 2026 مارينا سمير. تم البناء بـ <i class='fas fa-heart' style='color: var(--secondary)'></i> وروح الـ .NET."
  }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'en';
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimeout;

// 3. Typewriter Effect
function type() {
  const typewriterElement = document.getElementById("typewriter");
  if (!typewriterElement) return;

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

  typewriterTimeout = setTimeout(type, typeSpeed);
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
  localStorage.setItem('portfolio-lang', lang);
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

  // Update language button
  const langBtn = document.getElementById('lang-switch');
  if (langBtn) {
    langBtn.textContent = lang === 'en' ? 'العربية' : 'English';
  }

  // Restart typewriter
  clearTimeout(typewriterTimeout);
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

  // Initialize Language
  updateLanguage(currentLang);

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
