// 1. تفعيل مكتبة الحركات AOS
// تفعيل مكتبة AOS مع خاصية التكرار
AOS.init({
  duration: 1000,
  once: false, // دي أهم حاجة: خليناها false عشان الحركة تتكرر كل ما السكشن يظهر
  mirror: true, // الخاصية دي بتخلي الحركة تشتغل وأنتِ طالعة لفوق كمان (Scroll Up)
  offset: 100,
});

// 2. الـ Typewriter Effect الاحترافي
const typewriterElement = document.getElementById("typewriter");
const words = ["Full-Stack .NET Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
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
    typeSpeed = 2000; // توقف عند نهاية الكلمة
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

// 3. إعداد الجزيئات (Particles)
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#00d2ff" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00d2ff",
      opacity: 0.2,
      width: 1,
    },
    move: { enable: true, speed: 2 },
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
  },
});

// بدء التشغيل عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  type();
});
const menuToggle = document.getElementById("menu-toggler");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  navLinks.classList.toggle("active");
  document.body.style.overflow = navLinks.classList.contains("active")
    ? "hidden"
    : "auto";
});

// إغلاق المنيو عند الضغط على اللينكات
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("open");
    navLinks.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// تأثير النافبار عند السكرول
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.height = "70px";
    nav.style.background = "rgba(5, 5, 5, 0.95)";
  } else {
    nav.style.height = "90px";
    nav.style.background = "transparent";
  }
});
