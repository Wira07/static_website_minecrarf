// Gallery data
const galleryData = [
  {
    id: 1,
    title: "Platformer Game Level 1",
    category: "games",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2387CEEB' width='400' height='300'/%3E%3Crect fill='%238B4513' y='250' width='400' height='50'/%3E%3Crect fill='%23FFD700' x='50' y='200' width='30' height='30'/%3E%3Crect fill='%23FFD700' x='150' y='180' width='30' height='30'/%3E%3Ctext x='200' y='150' fill='%23000' font-family='Arial' font-size='24'%3ELevel 1%3C/text%3E%3C/svg%3E",
    description: "Level pertama dari platformer game dengan mekanik jump dan coin collection. Player harus menghindari musuh dan mengumpulkan semua koin.",
    tags: ["Tynker", "Block Coding", "Platformer"],
  },
  {
    id: 2,
    title: "Character Sprite Animation",
    category: "art",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%232d2d2d' width='400' height='300'/%3E%3Crect fill='%23FFB6C1' x='150' y='80' width='100' height='120'/%3E%3Crect fill='%23FFA500' x='160' y='90' width='80' height='40'/%3E%3Ctext x='200' y='250' fill='%23FFF' font-family='Arial' font-size='20' text-anchor='middle'%3ESprite Sheet%3C/text%3E%3C/svg%3E",
    description: "Sprite sheet karakter dengan animasi walk cycle, jump, dan attack. Dibuat dengan pixel art style 16x16.",
    tags: ["Pixel Art", "Animation", "Character Design"],
  },
  {
    id: 3,
    title: "Minecraft Custom Mob",
    category: "mods",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%236B8E23' width='400' height='300'/%3E%3Crect fill='%23228B22' y='200' width='400' height='100'/%3E%3Crect fill='%23FF0000' x='180' y='120' width='40' height='60'/%3E%3Crect fill='%23000' x='185' y='130' width='10' height='10'/%3E%3Crect fill='%23000' x='205' y='130' width='10' height='10'/%3E%3Ctext x='200' y='280' fill='%23FFF' font-family='Arial' font-size='18' text-anchor='middle'%3ECustom Mob%3C/text%3E%3C/svg%3E",
    description: "Custom mob untuk Minecraft dengan AI behavior unik. Mob ini bisa menyerang player dan drop item khusus.",
    tags: ["Minecraft", "Java", "Forge API"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "web",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231a1a1a' width='400' height='300'/%3E%3Crect fill='%233b82f6' width='400' height='50'/%3E%3Crect fill='%23404040' x='20' y='80' width='160' height='100'/%3E%3Crect fill='%23404040' x='220' y='80' width='160' height='100'/%3E%3Ctext x='200' y='250' fill='%2322c55e' font-family='Arial' font-size='20' text-anchor='middle'%3EPortfolio%3C/text%3E%3C/svg%3E",
    description: "Website portfolio dengan Minecraft theme menggunakan HTML, CSS, dan JavaScript. Responsive design dengan berbagai animasi.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Python Text Game",
    category: "games",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23000' width='400' height='300'/%3E%3Ctext x='20' y='40' fill='%2300FF00' font-family='monospace' font-size='14'%3E%3E Welcome to Adventure%3C/text%3E%3Ctext x='20' y='70' fill='%2300FF00' font-family='monospace' font-size='14'%3E%3E You are in a dark cave%3C/text%3E%3Ctext x='20' y='100' fill='%2300FF00' font-family='monospace' font-size='14'%3E%3E What do you do?%3C/text%3E%3Ctext x='20' y='140' fill='%23FFD700' font-family='monospace' font-size='14'%3E1. Go North%3C/text%3E%3Ctext x='20' y='170' fill='%23FFD700' font-family='monospace' font-size='14'%3E2. Go South%3C/text%3E%3C/svg%3E",
    description: "Game petualangan berbasis teks dengan sistem inventory, battle, dan quest. Menggunakan OOP principles.",
    tags: ["Python", "OOP", "Game Logic"],
  },
  {
    id: 6,
    title: "Minecraft Custom Items",
    category: "mods",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23404040' width='400' height='300'/%3E%3Crect fill='%23FFD700' x='100' y='80' width='60' height='60'/%3E%3Crect fill='%23C0C0C0' x='240' y='80' width='60' height='60'/%3E%3Crect fill='%23FF4500' x='100' y='180' width='60' height='60'/%3E%3Crect fill='%2300CED1' x='240' y='180' width='60' height='60'/%3E%3Ctext x='200' y='270' fill='%23FFF' font-family='Arial' font-size='16' text-anchor='middle'%3ECustom Items Collection%3C/text%3E%3C/svg%3E",
    description: "Koleksi custom items untuk Minecraft termasuk tools, weapons, dan armor dengan stats khusus.",
    tags: ["Minecraft", "Items", "Crafting"],
  },
  {
    id: 7,
    title: "Pixel Art Character Set",
    category: "art",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3Crect fill='%23FF6B6B' x='50' y='100' width='50' height='80'/%3E%3Crect fill='%234ECDC4' x='120' y='100' width='50' height='80'/%3E%3Crect fill='%23FFD93D' x='190' y='100' width='50' height='80'/%3E%3Crect fill='%239B59B6' x='260' y='100' width='50' height='80'/%3E%3Ctext x='200' y='250' fill='%23333' font-family='Arial' font-size='18' text-anchor='middle'%3ECharacter Set%3C/text%3E%3C/svg%3E",
    description: "Set karakter pixel art dengan berbagai pose dan ekspresi. Cocok untuk game 2D platformer.",
    tags: ["Pixel Art", "Characters", "Game Assets"],
  },
  {
    id: 8,
    title: "Interactive Dashboard",
    category: "web",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231e1e1e' width='400' height='300'/%3E%3Crect fill='%2322c55e' x='20' y='20' width='100' height='80' rx='8'/%3E%3Crect fill='%233b82f6' x='150' y='20' width='100' height='80' rx='8'/%3E%3Crect fill='%23eab308' x='280' y='20' width='100' height='80' rx='8'/%3E%3Cpath d='M 50 180 L 100 150 L 150 170 L 200 140 L 250 160 L 300 130' stroke='%2322c55e' stroke-width='3' fill='none'/%3E%3Ctext x='200' y='280' fill='%23999' font-family='Arial' font-size='14' text-anchor='middle'%3EAnalytics Dashboard%3C/text%3E%3C/svg%3E",
    description: "Dashboard interaktif dengan chart dan real-time data visualization menggunakan JavaScript libraries.",
    tags: ["JavaScript", "Data Viz", "Web App"],
  },
  {
    id: 9,
    title: "Puzzle Game Mechanics",
    category: "games",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23222' width='400' height='300'/%3E%3Crect fill='%23FF6B6B' x='80' y='80' width='60' height='60'/%3E%3Crect fill='%234ECDC4' x='160' y='80' width='60' height='60'/%3E%3Crect fill='%23FFD93D' x='240' y='80' width='60' height='60'/%3E%3Crect fill='%239B59B6' x='120' y='160' width='60' height='60'/%3E%3Crect fill='%23F38181' x='200' y='160' width='60' height='60'/%3E%3Ctext x='200' y='270' fill='%23FFF' font-family='Arial' font-size='16' text-anchor='middle'%3EPuzzle Blocks%3C/text%3E%3C/svg%3E",
    description: "Game puzzle dengan mekanik match-3 dan physics simulation. Level progresif dengan tingkat kesulitan bertambah.",
    tags: ["Tynker", "Puzzle", "Game Design"],
  },
  {
    id: 10,
    title: "Minecraft Biome Mod",
    category: "mods",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2387CEEB' width='400' height='300'/%3E%3Crect fill='%23FF69B4' y='150' width='400' height='150'/%3E%3Ccircle fill='%23FFB6C1' cx='80' cy='120' r='30'/%3E%3Ccircle fill='%23FFB6C1' cx='200' cy='100' r='35'/%3E%3Ccircle fill='%23FFB6C1' cx='320' cy='110' r='28'/%3E%3Ctext x='200' y='280' fill='%23FFF' font-family='Arial' font-size='18' text-anchor='middle'%3ECherry Blossom Biome%3C/text%3E%3C/svg%3E",
    description: "Custom biome untuk Minecraft dengan pohon sakura, custom blocks, dan mob khusus untuk area ini.",
    tags: ["Minecraft", "World Gen", "Biomes"],
  },
  {
    id: 11,
    title: "UI Component Library",
    category: "web",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f8f9fa' width='400' height='300'/%3E%3Crect fill='%233b82f6' x='40' y='40' width='120' height='40' rx='8'/%3E%3Ctext x='100' y='67' fill='%23FFF' font-family='Arial' font-size='14' text-anchor='middle'%3EButton%3C/text%3E%3Crect fill='%23FFF' stroke='%23d1d5db' stroke-width='2' x='240' y='40' width='120' height='40' rx='8'/%3E%3Crect fill='%2322c55e' x='40' y='120' width='320' height='8' rx='4'/%3E%3Crect fill='%23FFF' stroke='%23d1d5db' stroke-width='2' x='40' y='160' width='320' height='40' rx='8'/%3E%3Ctext x='200' y='270' fill='%23666' font-family='Arial' font-size='14' text-anchor='middle'%3EComponent Library%3C/text%3E%3C/svg%3E",
    description: "Library komponen UI reusable dengan Minecraft theme. Termasuk buttons, cards, forms, dan animations.",
    tags: ["CSS", "Components", "Design System"],
  },
  {
    id: 12,
    title: "Isometric Tile Art",
    category: "art",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e8f5e9' width='400' height='300'/%3E%3Cpath d='M 200 80 L 280 120 L 200 160 L 120 120 Z' fill='%238BC34A'/%3E%3Cpath d='M 200 160 L 280 120 L 280 180 L 200 220 Z' fill='%23689F38'/%3E%3Cpath d='M 120 120 L 200 160 L 200 220 L 120 180 Z' fill='%237CB342'/%3E%3Ctext x='200' y='270' fill='%23333' font-family='Arial' font-size='16' text-anchor='middle'%3EIsometric Tiles%3C/text%3E%3C/svg%3E",
    description: "Koleksi isometric tile untuk game strategy atau city builder. Berbagai terrain dan building tiles.",
    tags: ["Pixel Art", "Isometric", "Tiles"],
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
    games: "🕹️",
    mods: "⛏️",
    web: "🌐",
    art: "🎨",
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
