// Gallery data
const galleryData = [
  {
    id: 1,
    title: "E-Commerce App Home",
    category: "mobile",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2302569B' width='400' height='300'/%3E%3Crect fill='%2354C5F8' x='20' y='20' width='160' height='260' rx='10'/%3E%3Crect fill='%23ffffff' x='35' y='40' width='130' height='60' rx='5'/%3E%3Crect fill='%23ffffff' x='35' y='110' width='60' height='60' rx='5'/%3E%3Crect fill='%23ffffff' x='105' y='110' width='60' height='60' rx='5'/%3E%3Ctext x='300' y='150' fill='%23FFF' font-family='Arial' font-size='16' text-anchor='middle'%3EFlutter App%3C/text%3E%3C/svg%3E",
    description: "Halaman utama aplikasi e-commerce dengan product listing, search bar, dan navigation bottom. Dibangun dengan Flutter dan Firebase.",
    tags: ["Flutter", "Firebase", "E-Commerce"],
  },
  {
    id: 2,
    title: "Task Manager Dashboard",
    category: "mobile",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%233DDC84' width='400' height='300'/%3E%3Crect fill='%23ffffff' x='50' y='30' width='300' height='240' rx='10'/%3E%3Crect fill='%233DDC84' x='70' y='50' width='260' height='40' rx='5'/%3E%3Crect fill='%23e8e8e8' x='70' y='100' width='260' height='30' rx='5'/%3E%3Crect fill='%23e8e8e8' x='70' y='140' width='260' height='30' rx='5'/%3E%3Crect fill='%23e8e8e8' x='70' y='180' width='260' height='30' rx='5'/%3E%3Ctext x='200' y='240' fill='%23333' font-family='Arial' font-size='14' text-anchor='middle'%3EKotlin + MVVM%3C/text%3E%3C/svg%3E",
    description: "Dashboard task manager dengan list view, kategori, dan progress tracking. Native Android dengan Kotlin.",
    tags: ["Android", "Kotlin", "MVVM"],
  },
  {
    id: 3,
    title: "Social Media Feed",
    category: "mobile",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2361DAFB' width='400' height='300'/%3E%3Crect fill='%23282c34' x='100' y='20' width='200' height='260' rx='15'/%3E%3Ccircle fill='%2361DAFB' cx='200' cy='80' r='30'/%3E%3Crect fill='%23ffffff' x='130' y='130' width='140' height='20' rx='3'/%3E%3Crect fill='%23ffffff' x='130' y='160' width='100' height='15' rx='3'/%3E%3Ctext x='200' y='220' fill='%2361DAFB' font-family='Arial' font-size='12' text-anchor='middle'%3EReact Native%3C/text%3E%3C/svg%3E",
    description: "Feed sosial media dengan post cards, user profiles, dan interaction buttons. React Native dengan Redux.",
    tags: ["React Native", "Redux", "Social"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "web",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231a1a1a' width='400' height='300'/%3E%3Crect fill='%233b82f6' width='400' height='50'/%3E%3Crect fill='%23404040' x='20' y='80' width='160' height='100'/%3E%3Crect fill='%23404040' x='220' y='80' width='160' height='100'/%3E%3Ctext x='200' y='250' fill='%2322c55e' font-family='Arial' font-size='20' text-anchor='middle'%3EPortfolio%3C/text%3E%3C/svg%3E",
    description: "Website portfolio responsive dengan animasi modern dan dark theme. HTML, CSS, JavaScript, TailwindCSS.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Payment Gateway UI",
    category: "ui",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%236366f1' width='400' height='300'/%3E%3Crect fill='%23ffffff' x='80' y='60' width='240' height='180' rx='10'/%3E%3Crect fill='%23e5e7eb' x='100' y='90' width='200' height='30' rx='5'/%3E%3Crect fill='%23e5e7eb' x='100' y='130' width='200' height='30' rx='5'/%3E%3Crect fill='%236366f1' x='100' y='180' width='200' height='40' rx='5'/%3E%3Ctext x='200' y='205' fill='%23FFF' font-family='Arial' font-size='14' text-anchor='middle'%3EPAY NOW%3C/text%3E%3C/svg%3E",
    description: "UI design untuk payment gateway dengan form input, button states, dan success animations.",
    tags: ["UI/UX", "Figma", "Payment"],
  },
  {
    id: 6,
    title: "Chat App Interface",
    category: "mobile",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2325D366' width='400' height='300'/%3E%3Crect fill='%23ECE5DD' x='80' y='30' width='240' height='240' rx='10'/%3E%3Crect fill='%23DCF8C6' x='140' y='60' width='160' height='40' rx='10'/%3E%3Crect fill='%23ffffff' x='100' y='120' width='160' height='40' rx='10'/%3E%3Crect fill='%23DCF8C6' x='140' y='180' width='160' height='40' rx='10'/%3E%3C/svg%3E",
    description: "Interface chat app dengan message bubbles, typing indicator, dan media sharing features.",
    tags: ["Flutter", "Socket.io", "Chat"],
  },
  {
    id: 7,
    title: "Dashboard Analytics",
    category: "web",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231e1e1e' width='400' height='300'/%3E%3Crect fill='%2322c55e' x='20' y='20' width='100' height='80' rx='8'/%3E%3Crect fill='%233b82f6' x='150' y='20' width='100' height='80' rx='8'/%3E%3Crect fill='%23eab308' x='280' y='20' width='100' height='80' rx='8'/%3E%3Cpath d='M 50 180 L 100 150 L 150 170 L 200 140 L 250 160 L 300 130' stroke='%2322c55e' stroke-width='3' fill='none'/%3E%3Ctext x='200' y='280' fill='%23999' font-family='Arial' font-size='14' text-anchor='middle'%3EAnalytics Dashboard%3C/text%3E%3C/svg%3E",
    description: "Dashboard analytics dengan charts, statistics cards, dan data visualization menggunakan Chart.js.",
    tags: ["JavaScript", "Chart.js", "Dashboard"],
  },
  {
    id: 8,
    title: "Login Screen Design",
    category: "ui",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%238b5cf6' width='400' height='300'/%3E%3Crect fill='%23ffffff' x='100' y='50' width='200' height='200' rx='10'/%3E%3Ccircle fill='%238b5cf6' cx='200' cy='90' r='25'/%3E%3Crect fill='%23e5e7eb' x='130' y='130' width='140' height='25' rx='5'/%3E%3Crect fill='%23e5e7eb' x='130' y='165' width='140' height='25' rx='5'/%3E%3Crect fill='%238b5cf6' x='130' y='200' width='140' height='30' rx='5'/%3E%3C/svg%3E",
    description: "Modern login screen design dengan gradient background, form fields, dan social login buttons.",
    tags: ["UI/UX", "Login", "Design"],
  },
  {
    id: 9,
    title: "Product Detail Page",
    category: "mobile",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f97316' width='400' height='300'/%3E%3Crect fill='%23ffffff' x='100' y='20' width='200' height='260' rx='10'/%3E%3Crect fill='%23fed7aa' x='120' y='40' width='160' height='100'/%3E%3Ctext x='200' y='170' fill='%23333' font-family='Arial' font-size='14' text-anchor='middle'%3EProduct Name%3C/text%3E%3Ctext x='200' y='190' fill='%23f97316' font-family='Arial' font-size='16' text-anchor='middle'%3E$99.99%3C/text%3E%3Crect fill='%23f97316' x='130' y='220' width='140' height='35' rx='5'/%3E%3C/svg%3E",
    description: "Halaman detail produk dengan image gallery, price, description, dan add to cart button.",
    tags: ["Flutter", "E-Commerce", "UI"],
  },
  {
    id: 10,
    title: "REST API Backend",
    category: "backend",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23000' width='400' height='300'/%3E%3Ctext x='20' y='40' fill='%2300FF00' font-family='monospace' font-size='12'%3EGET /api/users%3C/text%3E%3Ctext x='20' y='70' fill='%23FFD700' font-family='monospace' font-size='12'%3EPOST /api/products%3C/text%3E%3Ctext x='20' y='100' fill='%2300BFFF' font-family='monospace' font-size='12'%3EPUT /api/orders/:id%3C/text%3E%3Ctext x='20' y='130' fill='%23FF6347' font-family='monospace' font-size='12'%3EDELETE /api/cart/:id%3C/text%3E%3Ctext x='20' y='180' fill='%23888' font-family='monospace' font-size='14'%3ENode.js + Express%3C/text%3E%3C/svg%3E",
    description: "Backend API dengan Node.js dan Express untuk mobile app. Termasuk authentication dan CRUD operations.",
    tags: ["Node.js", "Express", "API"],
  },
  {
    id: 11,
    title: "Onboarding Screens",
    category: "ui",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2306b6d4' width='400' height='300'/%3E%3Ccircle fill='%23ffffff' cx='200' cy='100' r='50'/%3E%3Ctext x='200' y='180' fill='%23FFF' font-family='Arial' font-size='16' text-anchor='middle'%3EWelcome!%3C/text%3E%3Ctext x='200' y='210' fill='%23FFF' font-family='Arial' font-size='12' text-anchor='middle'%3EGet started with our app%3C/text%3E%3Ccircle fill='%23ffffff' cx='170' cy='260' r='6'/%3E%3Ccircle fill='%23ffffff80' cx='200' cy='260' r='6'/%3E%3Ccircle fill='%23ffffff80' cx='230' cy='260' r='6'/%3E%3C/svg%3E",
    description: "Onboarding screens dengan illustrations, smooth transitions, dan page indicators.",
    tags: ["UI/UX", "Onboarding", "Flutter"],
  },
  {
    id: 12,
    title: "Firebase Database",
    category: "backend",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23039BE5' width='400' height='300'/%3E%3Cpath d='M150 250 L200 50 L250 250 L200 280 Z' fill='%23FFCA28'/%3E%3Cpath d='M150 250 L200 180 L250 250 L200 280 Z' fill='%23FFA000'/%3E%3Ctext x='200' y='150' fill='%23FFF' font-family='Arial' font-size='20' text-anchor='middle'%3EFirebase%3C/text%3E%3C/svg%3E",
    description: "Firebase integration dengan Firestore, Authentication, Cloud Functions, dan Cloud Messaging.",
    tags: ["Firebase", "Cloud", "Backend"],
  },
];

let currentLightboxIndex = 0;
let filteredGallery = [...galleryData];

// Create particles effect
function createParticles() {
  const container = document.getElementById("particles");
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 3 + "s";
    particle.style.animationDuration = Math.random() * 2 + 2 + "s";
    container.appendChild(particle);
  }
}

// Mobile Menu Functions
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("mobileMenuOverlay");
  const hamburgerBtn = document.getElementById("hamburgerBtn");

  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    hamburgerBtn.querySelector("span").textContent = "✕";
    document.body.style.overflow = "hidden";
  } else {
    hamburgerBtn.querySelector("span").textContent = "☰";
    document.body.style.overflow = "auto";
  }
}

// Render gallery items
function renderGallery(items = galleryData) {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";

  items.forEach((item, index) => {
    const categoryClass = `category-${item.category}`;
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.setAttribute("data-category", item.category);
    galleryItem.onclick = () => openLightbox(index);

    galleryItem.innerHTML = `
      <div class="gallery-image-container">
        <img src="${item.image}" alt="${item.title}" class="gallery-image" />
        <div class="gallery-overlay">
          <span class="gallery-overlay-text">🔍</span>
        </div>
      </div>
      <div class="gallery-info">
        <span class="gallery-category ${categoryClass}">${getCategoryEmoji(item.category)} ${item.category.toUpperCase()}</span>
        <h3 class="text-lg text-white mb-2">${item.title}</h3>
        <p class="pixel-text text-xs text-gray-400">${item.description.substring(0, 80)}...</p>
      </div>
    `;

    grid.appendChild(galleryItem);
  });
}

// Get category emoji
function getCategoryEmoji(category) {
  const emojis = {
    mobile: "📱",
    web: "🌐",
    ui: "🎨",
    backend: "⚙️",
  };
  return emojis[category] || "📦";
}

// Filter gallery
function filterGallery(category) {
  // Update active button
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");

  // Filter items
  if (category === "all") {
    filteredGallery = [...galleryData];
  } else {
    filteredGallery = galleryData.filter((item) => item.category === category);
  }

  // Re-render gallery with animation
  const grid = document.getElementById("galleryGrid");
  grid.style.opacity = "0";

  setTimeout(() => {
    renderGallery(filteredGallery);
    grid.style.transition = "opacity 0.5s";
    grid.style.opacity = "1";
  }, 300);
}

// Open lightbox
function openLightbox(index) {
  currentLightboxIndex = index;
  const item = filteredGallery[index];
  const lightbox = document.getElementById("lightbox");

  // Update lightbox content
  document.getElementById("lightboxImage").src = item.image;
  document.getElementById("lightboxImage").alt = item.title;
  document.getElementById("lightboxTitle").textContent = item.title;
  document.getElementById("lightboxCategory").textContent = `${getCategoryEmoji(item.category)} ${item.category.toUpperCase()}`;
  document.getElementById("lightboxDescription").textContent = item.description;

  // Render tags
  const tagsContainer = document.getElementById("lightboxTags");
  tagsContainer.innerHTML = item.tags.map((tag) => `<span class="bg-blue-900/40 border-2 border-blue-600 px-3 py-2 rounded pixel-text text-xs text-blue-300">${tag}</span>`).join("");

  // Show lightbox
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close lightbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Navigate lightbox
function navigateLightbox(direction) {
  currentLightboxIndex += direction;

  // Wrap around
  if (currentLightboxIndex < 0) {
    currentLightboxIndex = filteredGallery.length - 1;
  } else if (currentLightboxIndex >= filteredGallery.length) {
    currentLightboxIndex = 0;
  }

  openLightbox(currentLightboxIndex);
}

// Keyboard controls
document.addEventListener("keydown", (e) => {
  const lightbox = document.getElementById("lightbox");

  if (lightbox.classList.contains("active")) {
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      navigateLightbox(-1);
    } else if (e.key === "ArrowRight") {
      navigateLightbox(1);
    }
  }

  if (e.key === "Escape") {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu && mobileMenu.classList.contains("active")) {
      toggleMobileMenu();
    }
  }
});

// Smooth scroll animation for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Add hover effects to gallery items
function addGalleryEffects() {
  const items = document.querySelectorAll(".gallery-item");

  items.forEach((item, index) => {
    // Add parallax effect on hover
    item.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / 10;
      const moveY = (y - centerY) / 10;

      const img = this.querySelector(".gallery-image");
      img.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
    });

    item.addEventListener("mouseleave", function () {
      const img = this.querySelector(".gallery-image");
      img.style.transform = "scale(1.1)";
    });
  });
}

// Animate stats counters
function animateStats() {
  const stats = document.querySelectorAll(".text-2xl");

  stats.forEach((stat) => {
    const target = parseInt(stat.textContent);
    let current = 0;
    const increment = target / 50;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      stat.textContent = Math.floor(current);
    }, 30);
  });
}

// Add click effects
function addClickEffects() {
  document.querySelectorAll(".minecraft-button, .gallery-item").forEach((el) => {
    el.addEventListener("click", function (e) {
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "";
      }, 100);
    });
  });
}

// Lazy load images
function lazyLoadImages() {
  const images = document.querySelectorAll(".gallery-image");

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = "0";
        img.style.transition = "opacity 0.5s";

        setTimeout(() => {
          img.style.opacity = "1";
        }, 100);

        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Touch swipe for lightbox on mobile
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
  if (touchEndX < touchStartX - 50) {
    navigateLightbox(1); // Swipe left
  }
  if (touchEndX > touchStartX + 50) {
    navigateLightbox(-1); // Swipe right
  }
}

document.getElementById("lightbox").addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.getElementById("lightbox").addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Create particle effects
  createParticles();

  // Render gallery
  renderGallery();

  // Add effects after rendering
  setTimeout(() => {
    addGalleryEffects();
    lazyLoadImages();
  }, 100);

  // Observe elements
  document.querySelectorAll(".gallery-item, .project-card").forEach((el) => {
    observer.observe(el);
  });

  // Animate stats when visible
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats();
          statsObserver.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsSection = document.querySelector(".grid.grid-cols-2.md\\:grid-cols-4");
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // Add click effects
  addClickEffects();

  // Animate hero card
  const heroCard = document.querySelector(".hero-card");
  if (heroCard) {
    heroCard.style.opacity = "0";
    setTimeout(() => {
      heroCard.style.transition = "opacity 0.8s, transform 0.8s";
      heroCard.style.opacity = "1";
    }, 100);
  }
});

// Prevent mobile menu close when clicking inside
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuContent = document.querySelector(".mobile-menu-content");
  if (mobileMenuContent) {
    mobileMenuContent.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
});

// Handle window resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Refresh gallery layout
    const grid = document.getElementById("galleryGrid");
    if (grid) {
      grid.style.opacity = "0";
      setTimeout(() => {
        grid.style.opacity = "1";
      }, 100);
    }
  }, 250);
});
