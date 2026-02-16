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
    "hero-greeting": "Hi, I'm",
    "hero-bio": "Full-Stack .NET Developer with a passion for creating responsive, user-friendly web applications.",
    "about-title": "About <span>Me</span>",
    "about-p1": "I am a <strong class='highlight'>Full-Stack .NET Developer</strong> with a solid foundation in Information Technology. Currently, I'm honing my expertise through the <strong class='highlight'>DEPI Initiative</strong>, focusing on building scalable and efficient web applications.",
    "about-p2": "With a background in <strong class='highlight'>Graphic Design</strong>, I ensure that my back-end logic is complemented by clean, user-friendly, and fully responsive interfaces.",
    "skills-title": "Technical <span>Skills</span>",
    "projects-title": "My Latest <span>Projects</span>",
    "journey-title": "Professional <span>Experience</span>",
    "services-title": "Services <span>I Offer</span>",
    "contact-title": "Get In <span>Touch</span>",
    "btn-work": "View My Work",
    "btn-cv": "Download CV",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-exp": "Experience",
    "nav-services": "Services",
    "nav-contact": "Contact Me",
    "edu-title": "Education & Training",
    "edu-1-title": "Information Technology",
    "edu-1-org": "NATU University",
    "edu-2-title": "Full-Stack .NET Track",
    "edu-2-org": "DEPI (Digital Egypt Pioneers Initiative)",
    "skill-cat-1": "Languages & Back-End",
    "skill-cat-2": "Front-End",
    "skill-cat-3": "Tools & Design",
    "view-project": "View Project",
    "view-live": "Live Demo",
    "p1-tag": "Front-End App",
    "p1-title": "My Planner",
    "p1-desc": "A responsive planner web application for managing daily, weekly, monthly, and yearly tasks with notes section and analysis dashboard. Built with HTML5, CSS3, and JavaScript.",
    "p1-date": "Sep 2025",
    "p2-tag": "Task Management",
    "p2-title": "To-Do List",
    "p2-desc": "A responsive task management app with Dashboard, All Tasks, and Add Task pages, featuring task filtering, notifications, and local storage persistence.",
    "p2-date": "Aug 2025",
    "p3-tag": "Healthcare",
    "p3-title": "Care Connect",
    "p3-desc": "A web platform to explore hospitals, medical specialties, and doctors with easy contact features.",
    "p3-date": "Dec 2024",
    "p4-tag": "Landing Page",
    "p4-title": "Applight",
    "p4-desc": "A clean and modern landing page for mobile applications.",
    "p4-date": "Nov 2024",
    "p5-tag": "Landing Page",
    "p5-title": "Leon",
    "p5-desc": "A simple and elegant landing page for creative agencies.",
    "p5-date": "Aug 2024",
    "exp-1-title": "Full-Stack .NET Developer Trainee",
    "exp-1-org": "DEPI Initiative",
    "exp-1-desc": "Currently advancing my expertise in building scalable web applications using .NET technologies.",
    "exp-1-date": "NOV 2025 - Present",
    "exp-2-title": "Problem Solving Mentor",
    "exp-2-org": "NATU University",
    "exp-2-desc": "Mentoring students in problem-solving techniques and programming fundamentals.",
    "exp-2-date":"2025 - Present",
    "exp-3-title": "Java Programming Training",
    "exp-3-org": "Information Technology Institute (ITI)",
    "exp-3-desc": "Completed comprehensive Java programming course with focus on OOP and data structures.",
    "exp-3-date": "AUG 2024",
    "exp-4-title": "Graphic Design Specialist",
    "exp-4-org": "National Telecommunication Institute (NTI)",
    "exp-4-desc": "Specialized in UI/UX design and digital graphics with Adobe Creative Suite.",
    "exp-4-date": "JUN 2025",
    "service-1": "Front-End Development",
    "service-1-desc": "Turning designs into fast, responsive websites using HTML, CSS, and JavaScript.",
    "service-2": ".NET Development",
    "service-2-desc": "Building robust and scalable web applications using ASP.NET Core and Entity Framework.",
    "service-3": "Graphic Design",
    "service-3-desc": "Creating stunning visuals and brand identities using Adobe Creative Suite and Figma.",
    "service-4": "Database Management",
    "service-4-desc": "Designing and managing SQL Server databases for high performance and efficiency.",
    "contact-email": "Email",
    "contact-phone": "Phone",
    "contact-loc": "Location",
    "contact-loc-val": "Egypt",
    "footer-text": "&copy; 2026 Marina Samir. Built with <i class='fas fa-heart' style='color: var(--secondary)'></i>."
  },
  ar: {
    words: ["مطورة .NET متكاملة", "مصممة جرافيك", "محللة مشكلات"],
    "hero-greeting": "مرحباً، أنا",
    "hero-bio": "مطورة .NET متكاملة شغوفة بإنشاء تطبيقات ويب متجاوبة وسهلة الاستخدام.",
    "about-title": "من <span>أنا</span>",
    "about-p1": "أنا <strong class='highlight'>مطورة .NET متكاملة</strong> لدي أساس قوي في تكنولوجيا المعلومات. حالياً، أقوم بصقل خبراتي من خلال <strong class='highlight'>مبادرة DEPI</strong>، مع التركيز على بناء تطبيقات ويب قابلة للتوسع وفعالة.",
    "about-p2": "مع خلفية في <strong class='highlight'>التصميم الجرافيكي</strong>، أضمن أن المنطق البرمجي الخاص بي يُستكمل بواجهات نظيفة، سهلة الاستخدام، ومتجاوبة تماماً.",
    "skills-title": "المهارات <span>التقنية</span>",
    "projects-title": "أحدث <span>مشاريعي</span>",
    "journey-title": "الخبرات <span>المهنية</span>",
    "services-title": "الخدمات <span>التي أقدمها</span>",
    "contact-title": "تواصل <span>معي</span>",
    "btn-work": "شاهد أعمالي",
    "btn-cv": "تحميل السيرة",
    "nav-about": "عنّي",
    "nav-skills": "مهاراتي",
    "nav-projects": "مشاريعي",
    "nav-exp": "خبراتي",
    "nav-services": "خدماتي",
    "nav-contact": "تواصل معي",
    "edu-title": "التعليم والتدريب",
    "edu-1-title": "تكنولوجيا المعلومات",
    "edu-1-org": "جامعة NATU",
    "edu-2-title": "مسار .NET المتكامل",
    "edu-2-org": "مبادرة رواد مصر الرقمية (DEPI)",
    "skill-cat-1": "لغات وبرمجة خلفية",
    "skill-cat-2": "واجهات أمامية",
    "skill-cat-3": "أدوات وتصميم",
    "view-project": "عرض المشروع",
    "view-live": "عرض مباشر",
    "p1-tag": "تطبيق واجهات",
    "p1-title": "My Planner",
    "p1-desc": "تطبيق مخطط ويب متجاوب لإدارة المهام اليومية والأسبوعية والشهرية والسنوية مع قسم للملاحظات ولوحة تحليلية.",
    "p1-date": "سبتمبر 2025",
    "p2-tag": "إدارة المهام",
    "p2-title": "قائمة المهام",
    "p2-desc": "تطبيق متجاوب لإدارة المهام مع لوحة رئيسية وجميع المهام وإضافة مهمة، مع تصفية وإشعارات وحفظ محلي.",
    "p2-date": "أغسطس 2025",
    "p3-tag": "الرعاية الصحية",
    "p3-title": "Care Connect",
    "p3-desc": "منصة ويب لاستكشاف المستشفيات والتخصصات الطبية والأطباء مع ميزات التواصل.  ",
    "p3-date": "ديسمبر 2024",
    "p4-tag": "صفحة ويب",
    "p4-title": "Applight",
    "p4-desc": "صفحة ويب نظيفة وعصرية لتطبيقات الهاتف.",
    "p4-date": "نوفمبر 2024",
    "p5-tag": "صفحة ويب",
    "p5-title": "Leon",
    "p5-desc": "صفحة ويب بسيطة وأنيقة للوكالات الإبداعية .",
    "p5-date": "أغسطس 2024",
    "exp-1-title": "متدربة مطورة .NET متكاملة",
    "exp-1-org": "مبادرة DEPI",
    "exp-1-desc": "تطوير الخبرات في بناء تطبيقات ويب قابلة للتوسع باستخدام تقنيات .NET.",
    "exp-1-date": "نوفمبر 2025- حالياً",
    "exp-2-title": "مُرشدة لحل المشكلات",
    "exp-2-org": "جامعة NATU",
    "exp-2-desc": "توجيه الطلاب في تقنيات حل المشكلات وأساسيات البرمجة.",
    "exp-2-date": "2025 - حالياً",
    "exp-3-title": "تدريب برمجة جافا",
    "exp-3-org": "معهد تكنولوجيا المعلومات (ITI)",
    "exp-3-desc": "دورة شاملة في جافا مع التركيز على OOP وهياكل البيانات.",
    "exp-3-date": "اغسطس 2024",
    "exp-4-title": "أخصائية تصميم جرافيك",
    "exp-4-org": "المعهد القومي للاتصالات (NTI)",
    "exp-4-desc": "تخصص في تصميم والرسومات الرقمية  Adobe Creative Suite.",
    "exp-4-date": "يونيو 2025",
    "service-1": "تطوير واجهات أمامية",
    "service-1-desc": "تحويل التصاميم إلى مواقع ويب متجاوبة وسريعة باستخدام HTML، CSS، JavaScript.",
    "service-2": "تطوير .NET",
    "service-2-desc": "بناء تطبيقات ويب قوية وقابلة للتطوير باستخدام ASP.NET Core و Entity Framework.",
    "service-3": "تصميم جرافيك",
    "service-3-desc": "إنشاء تصاميم مبهرة وهويات علامات تجارية باستخدام Adobe Creative Suite و Figma.",
    "service-4": "إدارة قواعد البيانات",
    "service-4-desc": "تصميم وإدارة قواعد بيانات SQL Server لضمان أداء وكفاءة عالية.",
    "contact-email": "البريد الإلكتروني",
    "contact-phone": "الهاتف",
    "contact-loc": "الموقع",
    "contact-loc-val": "أسيوط",
    "footer-text": "&copy; 2026 مارينا سمير. بُني بحب <i class='fas fa-heart' style='color: var(--secondary)'></i>."
  }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'en';
let currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
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
if (typeof particlesJS !== 'undefined') {
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
}

// 5. Theme Switcher
function updateTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('portfolio-theme', theme);
  
  if (theme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
}

// 6. Language Switcher
function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  const t = translations[lang];
  
  // Update all text elements with data-t attribute
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update name in logo and hero
  const logoName = document.getElementById('logo-name');
  const heroName = document.getElementById('hero-name-display');
  
  if (logoName) {
    logoName.innerHTML = lang === 'en' ? 'Marina <span>Samir</span>' : 'مارينا <span>سمير</span>';
  }
  
  if (heroName) {
    heroName.textContent = lang === 'en' ? 'Marina Samir' : 'مارينا سمير';
  }

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

// 7. DOM Content Loaded - مع تحسينات للـ mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggler");
  const navLinks = document.getElementById("nav-links");
  const navbar = document.querySelector(".navbar");
  const langBtn = document.getElementById("lang-switch");
  const themeToggle = document.getElementById("theme-toggle");

  // Initialize theme
  updateTheme(currentTheme);

  // Initialize language
  updateLanguage(currentLang);

  // Mobile menu toggle - محسن
  if (menuToggle) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle("open");
      navLinks.classList.toggle("active");
      
      // منع التمرير عندما تكون القائمة مفتوحة
      if (navLinks.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });
  }

  // Close mobile menu on link click - محسن
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      // إذا كانت القائمة مفتوحة في الموبايل، أغلقها
      if (window.innerWidth <= 992) {
        menuToggle.classList.remove("open");
        navLinks.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

  // Close mobile menu when clicking outside - إضافة ممتازة
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 992) {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove("open");
        navLinks.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    }
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Language switch
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const newLang = currentLang === 'en' ? 'ar' : 'en';
      updateLanguage(newLang);
    });
  }

  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      updateTheme(newTheme);
    });
  }

  // Smooth scroll for anchor links - محسن
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          // حساب المسافة مع مراعاة ارتفاع النافبار
          const navbarHeight = navbar.offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Handle window resize - محسن
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
      // إذا كنا في شاشة كبيرة، تأكد أن القائمة مخفية بشكل صحيح
      if (navLinks.classList.contains('active')) {
        menuToggle.classList.remove("open");
        navLinks.classList.remove("active");
        document.body.style.overflow = "auto";
      }
      
      // تأكد أن القائمة تظهر بشكل طبيعي في الشاشات الكبيرة
      navLinks.style.height = '';
      navLinks.style.visibility = '';
      navLinks.style.opacity = '';
    } else {
      // في الشاشات الصغيرة، تأكد أن القائمة مخفية عند تحميل الصفحة
      navLinks.classList.remove('active');
      menuToggle.classList.remove("open");
      document.body.style.overflow = "auto";
    }
  });

  // Trigger resize on load للتأكد من الحالة الصحيحة
  window.dispatchEvent(new Event('resize'));
});