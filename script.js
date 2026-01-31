/* =====================================================
   PROFESSIONAL PORTFOLIO JAVASCRIPT
   Modern, Interactive, and Animated
   ===================================================== */

// =====================================================
// PROJECT DATA
// =====================================================
const projects = [
  {
    title: "E-Commerce App",
    subtitle: "Flutter & Firebase",
    description: "A full-featured e-commerce application with comprehensive shopping cart functionality, payment gateway integration with multiple providers, real-time push notifications, and secure user authentication. Built with clean architecture principles and state management using BLoC pattern.",
    tech: ["Flutter", "Firebase", "Dart", "REST API", "BLoC"],
    difficulty: "Intermediate",
    status: "Published",
    color: "violet",
    icon: "📱",
    features: [
      "Shopping cart & checkout system with guest checkout option",
      "Multiple payment gateway integration (Midtrans, Stripe)",
      "Real-time push notifications for orders and promotions",
      "User authentication with social login support",
      "Wishlist and product comparison features",
      "Order tracking and history"
    ],
    github: "#",
    demo: "#",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
  },
  {
    title: "Task Manager App",
    subtitle: "Android Native Kotlin",
    description: "A powerful productivity application designed with MVVM architecture, featuring comprehensive task scheduling with reminders, category management, and cloud synchronization. Implements Material Design 3 guidelines for a modern and intuitive user experience.",
    tech: ["Kotlin", "Room DB", "MVVM", "WorkManager", "Coroutines"],
    difficulty: "Advanced",
    status: "Published",
    color: "cyan",
    icon: "🤖",
    features: [
      "Task scheduling with customizable reminders",
      "Smart category management with color coding",
      "Cloud sync with Firebase for cross-device access",
      "Material Design 3 with dynamic theming",
      "Widgets for quick task access",
      "Analytics dashboard for productivity insights"
    ],
    github: "#",
    demo: "#",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
  },
  {
    title: "Social Media App",
    subtitle: "React Native",
    description: "A cross-platform social networking application featuring real-time posting, likes, comments, and instant messaging. Built with React Native for optimal performance across iOS and Android, with a Node.js backend handling real-time communication.",
    tech: ["React Native", "Redux", "Node.js", "Socket.io", "MongoDB"],
    difficulty: "Intermediate",
    status: "Published",
    color: "pink",
    icon: "⚛️",
    features: [
      "Post creation with media upload support",
      "Real-time like and comment functionality",
      "Instant messaging with read receipts",
      "User profiles with following system",
      "Push notifications for interactions",
      "Content moderation system"
    ],
    github: "#",
    demo: "#",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    title: "Portfolio Website",
    subtitle: "HTML, CSS, JavaScript",
    description: "A modern, responsive portfolio website showcasing professional work and skills. Features smooth animations, interactive UI components, and optimized performance. Built with clean, semantic HTML and modern CSS practices including Flexbox and Grid.",
    tech: ["HTML", "CSS", "JavaScript", "TailwindCSS", "GSAP"],
    difficulty: "Beginner",
    status: "Live",
    color: "amber",
    icon: "🌐",
    features: [
      "Fully responsive design for all devices",
      "Smooth scroll animations and transitions",
      "Interactive project showcase with filtering",
      "Contact form with validation",
      "SEO optimized structure",
      "Fast loading with optimized assets"
    ],
    github: "#",
    demo: "#",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  }
];

// =====================================================
// CURSOR GLOW EFFECT
// =====================================================
const cursorGlow = document.getElementById('cursorGlow');

if (cursorGlow && window.innerWidth > 768) {
  document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });
  });
}

// =====================================================
// MOBILE MENU
// =====================================================
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuBtn = document.getElementById('menuBtn');
  
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('active');
  
  if (mobileMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
    menuBtn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    document.body.style.overflow = '';
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

// =====================================================
// SMOOTH SCROLL
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// =====================================================
// HEADER SCROLL EFFECT
// =====================================================
const mainHeader = document.getElementById('mainHeader');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > 100) {
    mainHeader.style.transform = currentScrollY > lastScrollY ? 'translateY(-100%)' : 'translateY(0)';
    mainHeader.style.background = 'rgba(10, 10, 10, 0.8)';
  } else {
    mainHeader.style.transform = 'translateY(0)';
    mainHeader.style.background = 'transparent';
  }
  
  lastScrollY = currentScrollY;
});

// =====================================================
// STAT COUNTER ANIMATION
// =====================================================
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + '+';
    }
  }, 16);
}

// =====================================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// =====================================================
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

// Reveal animations
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      
      // Animate skill progress bars
      const progressBars = entry.target.querySelectorAll('.skill-progress');
      progressBars.forEach(bar => {
        const width = bar.dataset.width;
        setTimeout(() => {
          bar.style.width = width;
        }, 300);
      });
      
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// Stat counter animation
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        animateCounter(stat, target);
      });
      statObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const statSection = document.querySelector('.stat-item')?.parentElement;
if (statSection) {
  statObserver.observe(statSection);
}

// =====================================================
// PROJECT FILTER
// =====================================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    
    projectCards.forEach(card => {
      const category = card.dataset.category;
      
      if (filter === 'all' || category === filter) {
        card.style.display = '';
        card.style.animation = 'fadeInUp 0.5s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// =====================================================
// MODAL FUNCTIONS
// =====================================================
function openModal(index) {
  const project = projects[index];
  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');
  
  const colorClasses = {
    violet: 'from-violet-500 to-fuchsia-500',
    cyan: 'from-cyan-500 to-blue-500',
    pink: 'from-pink-500 to-rose-500',
    amber: 'from-amber-500 to-orange-500'
  };
  
  const difficultyColors = {
    Beginner: 'bg-green-500/20 text-green-300',
    Intermediate: 'bg-yellow-500/20 text-yellow-300',
    Advanced: 'bg-red-500/20 text-red-300'
  };
  
  content.innerHTML = `
    <div class="mb-8">
      <div class="flex items-start justify-between mb-6">
        <div class="w-20 h-20 rounded-2xl bg-gradient-to-br ${colorClasses[project.color]} flex items-center justify-center">
          <img src="${project.image}" alt="${project.title}" class="w-12 h-12">
        </div>
        <div class="flex gap-2">
          <span class="px-3 py-1 rounded-full ${difficultyColors[project.difficulty]} text-xs font-medium">${project.difficulty}</span>
          <span class="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">${project.status}</span>
        </div>
      </div>
      
      <h2 class="text-3xl font-bold mb-2">${project.title}</h2>
      <p class="text-gray-400 mb-6">${project.subtitle}</p>
      
      <p class="text-gray-300 leading-relaxed mb-8">${project.description}</p>
      
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
          <i class="fas fa-code text-violet-400"></i>
          Technologies Used
        </h3>
        <div class="flex flex-wrap gap-2">
          ${project.tech.map(tech => `
            <span class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">${tech}</span>
          `).join('')}
        </div>
      </div>
      
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
          <i class="fas fa-check-circle text-green-400"></i>
          Key Features
        </h3>
        <ul class="space-y-3">
          ${project.features.map(feature => `
            <li class="flex items-start gap-3 text-gray-300">
              <i class="fas fa-check text-green-400 mt-1"></i>
              <span>${feature}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      
      <div class="flex gap-4">
        <a href="${project.github}" class="btn-secondary px-6 py-3 rounded-xl font-medium flex items-center gap-2 flex-1 justify-center">
          <i class="fab fa-github"></i>
          View Code
        </a>
        <a href="${project.demo}" class="btn-primary px-6 py-3 rounded-xl font-medium flex items-center gap-2 flex-1 justify-center">
          <i class="fas fa-external-link-alt"></i>
          Live Demo
        </a>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(event) {
  if (event && event.target !== event.currentTarget) {
    return;
  }
  
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// =====================================================
// SERVICE MODAL DATA & FUNCTIONS
// =====================================================
const servicesData = {
  flutter: {
    title: "Pengembangan Flutter",
    icon: "fa-mobile-alt",
    gradient: "from-violet-500 to-fuchsia-500",
    description: "Flutter adalah framework open-source dari Google untuk membangun aplikasi mobile, web, dan desktop yang indah dan dikompilasi secara native dari satu codebase. Saya memiliki pengalaman mendalam dalam mengembangkan aplikasi Flutter dengan performa tinggi.",
    features: [
      "Aplikasi cross-platform (iOS, Android, Web, Desktop) dari satu codebase",
      "UI yang indah dan custom dengan widget Flutter",
      "Performa native dengan kompilasi ke kode ARM",
      "Hot reload untuk development yang lebih cepat",
      "Integrasi dengan Firebase dan berbagai backend",
      "State management dengan BLoC, Provider, atau GetX"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "BLoC", "Provider", "GetX"],
    portfolio: [
      { name: "E-Commerce App", desc: "Aplikasi belanja online lengkap" },
      { name: "Social Media App", desc: "Aplikasi sosial dengan chat realtime" },
      { name: "Fitness Tracker", desc: "Aplikasi pelacak kesehatan" }
    ],
    price: "Mulai dari Rp 8 Juta"
  },
  android: {
    title: "Android Native",
    icon: "fa-android",
    gradient: "from-cyan-500 to-blue-500",
    description: "Pengembangan aplikasi Android native menggunakan Kotlin atau Java untuk performa maksimal dan integrasi penuh dengan ekosistem Android. Aplikasi native memberikan pengalaman terbaik untuk pengguna Android.",
    features: [
      "Performa optimal dengan akses langsung ke hardware",
      "Integrasi penuh dengan fitur Android (kamera, GPS, sensor)",
      "Material Design 3 untuk UI modern",
      "Background services dan WorkManager",
      "Push notifications dengan Firebase Cloud Messaging",
      "Offline-first architecture dengan Room Database"
    ],
    technologies: ["Kotlin", "Java", "Android SDK", "Room DB", "MVVM", "WorkManager", "Coroutines"],
    portfolio: [
      { name: "Task Manager", desc: "Aplikasi manajemen tugas produktif" },
      { name: "News Reader", desc: "Aplikasi pembaca berita offline" },
      { name: "Finance Tracker", desc: "Aplikasi pelacak keuangan" }
    ],
    price: "Mulai dari Rp 10 Juta"
  },
  react: {
    title: "React Native",
    icon: "fa-react",
    gradient: "from-amber-500 to-orange-500",
    description: "React Native memungkinkan pengembangan aplikasi mobile cross-platform menggunakan JavaScript dan React. Ideal untuk tim yang sudah familiar dengan ekosistem React dan ingin berbagi kode dengan web.",
    features: [
      "Codebase tunggal untuk iOS dan Android",
      "Komponen yang dapat digunakan kembali dari React",
      "Akses ke modul native saat diperlukan",
      "Ekosistem npm yang luas",
      "Fast refresh untuk development cepat",
      "Integrasi mudah dengan backend Node.js"
    ],
    technologies: ["React Native", "JavaScript", "TypeScript", "Redux", "Node.js", "Socket.io"],
    portfolio: [
      { name: "Chat Application", desc: "Aplikasi messaging realtime" },
      { name: "Food Delivery", desc: "Aplikasi pesan antar makanan" },
      { name: "Travel App", desc: "Aplikasi booking perjalanan" }
    ],
    price: "Mulai dari Rp 9 Juta"
  },
  uiux: {
    title: "Desain UI/UX",
    icon: "fa-paint-brush",
    gradient: "from-green-500 to-emerald-500",
    description: "Desain interface dan pengalaman pengguna yang berpusat pada kebutuhan user. Saya menciptakan desain yang tidak hanya indah tetapi juga intuitif dan mudah digunakan.",
    features: [
      "User Research dan analisis kebutuhan",
      "Wireframing dan prototyping interaktif",
      "Desain visual dengan sistem desain konsisten",
      "Usability testing untuk validasi desain",
      "Desain responsif untuk berbagai ukuran layar",
      "Handoff desain yang lengkap untuk developer"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Protopie", "Principle", "InVision"],
    portfolio: [
      { name: "Banking App Redesign", desc: "Redesign aplikasi perbankan" },
      { name: "E-learning Platform", desc: "Platform pembelajaran online" },
      { name: "Healthcare Dashboard", desc: "Dashboard kesehatan" }
    ],
    price: "Mulai dari Rp 5 Juta"
  },
  backend: {
    title: "Integrasi Backend",
    icon: "fa-server",
    gradient: "from-pink-500 to-rose-500",
    description: "Integrasi aplikasi mobile dengan berbagai layanan backend untuk fungsionalitas penuh. Dari Firebase hingga custom API, saya memastikan aplikasi Anda terhubung dengan baik ke server.",
    features: [
      "Integrasi Firebase (Auth, Firestore, Storage, FCM)",
      "Konsumsi dan integrasi REST API",
      "GraphQL integration untuk query yang efisien",
      "Real-time data dengan WebSocket",
      "Autentikasi dan otorisasi yang aman",
      "Caching dan offline data handling"
    ],
    technologies: ["Firebase", "REST API", "GraphQL", "Node.js", "MongoDB", "PostgreSQL", "WebSocket"],
    portfolio: [
      { name: "Real-time Chat", desc: "Sistem chat dengan Firebase" },
      { name: "Payment Integration", desc: "Integrasi payment gateway" },
      { name: "Social Login", desc: "Login dengan Google, Facebook" }
    ],
    price: "Mulai dari Rp 4 Juta"
  },
  appstore: {
    title: "Publikasi App Store",
    icon: "fa-rocket",
    gradient: "from-purple-500 to-indigo-500",
    description: "Layanan lengkap untuk mempublikasikan aplikasi Anda ke Google Play Store dan Apple App Store. Dari persiapan aset hingga approval, saya membantu Anda melewati proses submission.",
    features: [
      "Persiapan screenshot dan aset grafis yang menarik",
      "Penulisan deskripsi yang SEO-friendly",
      "Optimasi App Store Optimization (ASO)",
      "Penanganan proses review dan rejection",
      "Setup in-app purchase dan subscription",
      "Monitoring dan analitik pasca-launch"
    ],
    technologies: ["Google Play Console", "App Store Connect", "ASO Tools", "Firebase Analytics", "Crashlytics"],
    portfolio: [
      { name: "10+ Apps Published", desc: "Aplikasi berhasil dipublikasi" },
      { name: "100K+ Downloads", desc: "Total download aplikasi" },
      { name: "4.5+ Rating Average", desc: "Rata-rata rating aplikasi" }
    ],
    price: "Mulai dari Rp 2 Juta"
  }
};

function openServiceModal(serviceKey) {
  const service = servicesData[serviceKey];
  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');
  
  content.innerHTML = `
    <div class="mb-8">
      <div class="flex items-start justify-between mb-6">
        <div class="w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center">
          <i class="fab ${service.icon === 'fa-android' || service.icon === 'fa-react' ? service.icon : 'fas ' + service.icon} text-3xl text-white"></i>
        </div>
        <div class="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium">
          ${service.price}
        </div>
      </div>
      
      <h2 class="text-3xl font-bold mb-4">${service.title}</h2>
      
      <p class="text-gray-300 leading-relaxed mb-8">${service.description}</p>
      
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
          <i class="fas fa-check-circle text-green-400"></i>
          Fitur Layanan
        </h3>
        <ul class="space-y-3">
          ${service.features.map(feature => `
            <li class="flex items-start gap-3 text-gray-300">
              <i class="fas fa-check text-green-400 mt-1"></i>
              <span>${feature}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
          <i class="fas fa-code text-violet-400"></i>
          Teknologi
        </h3>
        <div class="flex flex-wrap gap-2">
          ${service.technologies.map(tech => `
            <span class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">${tech}</span>
          `).join('')}
        </div>
      </div>
      
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
          <i class="fas fa-folder-open text-cyan-400"></i>
          Portfolio Terkait
        </h3>
        <div class="grid gap-3">
          ${service.portfolio.map(item => `
            <div class="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center">
                <i class="fas fa-check text-white text-sm"></i>
              </div>
              <div>
                <h4 class="font-medium">${item.name}</h4>
                <p class="text-sm text-gray-400">${item.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="flex gap-4">
        <a href="contact.html" class="btn-primary px-6 py-3 rounded-xl font-medium flex items-center gap-2 flex-1 justify-center">
          <i class="fas fa-envelope"></i>
          Hubungi Saya
        </a>
        <a href="https://wa.me/62xxxxxxxxxxx" target="_blank" class="btn-secondary px-6 py-3 rounded-xl font-medium flex items-center gap-2 flex-1 justify-center">
          <i class="fab fa-whatsapp"></i>
          WhatsApp
        </a>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// =====================================================
// KEYBOARD NAVIGATION
// =====================================================
document.addEventListener('keydown', (e) => {
  // Close modal on Escape
  if (e.key === 'Escape') {
    const modal = document.getElementById('modal');
    if (modal.classList.contains('active')) {
      closeModal();
    }
    
    // Close mobile menu
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      toggleMenu();
    }
  }
  
  // Open project with number keys 1-4
  if (e.key >= '1' && e.key <= '4' && !e.ctrlKey && !e.altKey) {
    const modal = document.getElementById('modal');
    if (!modal.classList.contains('active')) {
      openModal(parseInt(e.key) - 1);
    }
  }
});

// =====================================================
// TILT EFFECT ON PROJECT CARDS
// =====================================================
if (window.innerWidth > 768) {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// =====================================================
// RIPPLE EFFECT ON BUTTONS
// =====================================================
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
  button.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      width: 0;
      height: 0;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: ripple 0.6s ease-out forwards;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
    `;
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple animation to stylesheet
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes ripple {
    to {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

// =====================================================
// LAZY LOAD IMAGES
// =====================================================
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
      imageObserver.unobserve(img);
    }
  });
}, { rootMargin: '100px' });

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});

// =====================================================
// TYPING EFFECT (Optional for Hero)
// =====================================================
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// =====================================================
// INITIALIZE ON DOM LOAD
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  // Add loaded class to body
  document.body.classList.add('loaded');
  
  // Initialize animations with delay
  const animatedElements = document.querySelectorAll('.animate-fade-in-up');
  animatedElements.forEach((el, index) => {
    const delay = parseFloat(el.style.animationDelay) || (index * 0.1);
    el.style.animationDelay = delay + 's';
  });
  
  // Trigger initial reveal for elements in viewport
  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('revealed');
    }
  });
  
  console.log('🚀 Portfolio loaded successfully!');
});

// =====================================================
// PREVENT FLASH OF UNSTYLED CONTENT
// =====================================================
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// =====================================================
// ERROR HANDLING
// =====================================================
window.addEventListener('error', (e) => {
  console.error('An error occurred:', e.message);
});

// =====================================================
// UTILITY FUNCTIONS
// =====================================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Apply throttle to scroll events for performance
window.addEventListener('scroll', throttle(() => {
  // Additional scroll-based animations can be added here
}, 100));
