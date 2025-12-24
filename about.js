// Add parallax effect on mouse move and scroll
function addParallaxEffect() {
  let mouseX = 0;
  let mouseY = 0;
  let scrollY = 0;

  // Mouse parallax
  document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Scroll parallax
  window.addEventListener("scroll", () => {
    scrollY = window.pageYOffset;
  });

  function animate() {
    // Hero section parallax
    const heroCard = document.querySelector(".hero-card");
    if (heroCard) {
      const heroOffset = scrollY * 0.3;
      heroCard.style.transform = `translateY(${heroOffset}px) translateX(${mouseX * 10}px) translateZ(0)`;
    }

    // Profile image parallax
    const profileImg = document.querySelector(".hero-card img");
    if (profileImg) {
      profileImg.style.transform = `translateX(${mouseX * 15}px) translateY(${mouseY * 15}px) scale(${1 + Math.abs(mouseX) * 0.05})`;
    }

    // Stats cards parallax
    const statsCards = document.querySelectorAll(".grid.grid-cols-1.md\\:grid-cols-3 .project-card");
    statsCards.forEach((card, index) => {
      const cardOffset = scrollY * (0.15 - index * 0.02);
      const mouseOffset = mouseX * (15 + index * 5);
      card.style.transform = `translateY(${cardOffset}px) translateX(${mouseOffset}px) rotate(${mouseX * 2}deg)`;
    });

    // Content cards parallax (Story, Skills, Interests)
    const contentCards = document.querySelectorAll(".max-w-4xl > .project-card");
    contentCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const screenCenter = window.innerHeight / 2;
      const distance = (cardCenter - screenCenter) / screenCenter;

      const parallaxAmount = distance * 30;
      const mouseParallax = mouseX * (10 + index * 3);

      card.style.transform = `translateY(${parallaxAmount}px) translateX(${mouseParallax}px) perspective(1000px) rotateY(${mouseX * 3}deg)`;
    });

    // Skill bars parallax
    const skillBars = document.querySelectorAll(".bg-gray-700.rounded.overflow-hidden .h-full");
    skillBars.forEach((bar, index) => {
      const parentCard = bar.closest(".project-card");
      if (parentCard) {
        const rect = parentCard.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const progress = 1 - rect.top / window.innerHeight;
          bar.style.transform = `scaleX(${Math.min(progress * 1.2, 1)}) translateZ(${mouseX * 5}px)`;
        }
      }
    });

    // Interest cards micro-parallax
    const interestCards = document.querySelectorAll(".bg-black\\/50.p-4.rounded-lg.border-2");
    interestCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      const distanceX = (cardCenterX - window.innerWidth / 2) / window.innerWidth;
      const distanceY = (cardCenterY - window.innerHeight / 2) / window.innerHeight;

      card.style.transform = `
        translateX(${mouseX * 8 * (1 - distanceX)}px) 
        translateY(${mouseY * 8 * (1 - distanceY)}px)
        scale(${1 + (Math.abs(mouseX) + Math.abs(mouseY)) * 0.02})
      `;
    });

    // Particles parallax
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle, index) => {
      const speed = ((index % 3) + 1) * 5;
      particle.style.transform = `translateX(${mouseX * speed}px) translateY(${mouseY * speed}px)`;
    });

    // CTA section parallax
    const ctaSection = document.querySelector(".inline-block.bg-gradient-to-r");
    if (ctaSection) {
      ctaSection.style.transform = `
        translateY(${scrollY * -0.1}px) 
        translateX(${mouseX * 12}px)
        scale(${1 + Math.abs(mouseY) * 0.03})
        rotateX(${mouseY * 5}deg)
      `;
    }

    requestAnimationFrame(animate);
  }

  animate();
}

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

  // Toggle hamburger icon
  if (mobileMenu.classList.contains("active")) {
    hamburgerBtn.querySelector("span").textContent = "✕";
    document.body.style.overflow = "hidden";
  } else {
    hamburgerBtn.querySelector("span").textContent = "☰";
    document.body.style.overflow = "auto";
  }
}

// Smooth scroll animation for cards
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

// Animate skill bars on scroll
const skillBarObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector(".h-full");
        if (progressBar && !progressBar.classList.contains("animated")) {
          progressBar.classList.add("animated");
          progressBar.style.animation = "progressFill 1.5s ease-out forwards";
        }
      }
    });
  },
  { threshold: 0.5 }
);

// Animate stats counter
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + (target >= 100 ? "" : "+");
  }, 16);
}

// Stats counter observer
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        entry.target.classList.add("counted");
        const targetText = entry.target.textContent;
        const targetNumber = parseInt(targetText);

        if (!isNaN(targetNumber)) {
          entry.target.textContent = "0";
          animateCounter(entry.target, targetNumber);
        }
      }
    });
  },
  { threshold: 0.5 }
);

// Add parallax effect on mouse move
function addParallaxEffect() {
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
  });

  function animate() {
    const cards = document.querySelectorAll(".project-card");
    const dx = mouseX - 0.5;
    const dy = mouseY - 0.5;

    currentX += (dx - currentX) * 0.1;
    currentY += (dy - currentY) * 0.1;

    cards.forEach((card, index) => {
      const speed = (index + 1) * 3;
      const x = currentX * speed;
      const y = currentY * speed;

      card.style.transform = `translate(${x}px, ${y}px)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// Add click effect to buttons and cards
function addClickEffects() {
  document.querySelectorAll(".minecraft-button, .project-card, .tech-tag").forEach((el) => {
    el.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("div");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
      `;

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);

      // Scale effect
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "";
      }, 100);
    });
  });
}

// Add ripple animation
function addRippleAnimation() {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes ripple {
      from {
        transform: scale(0);
        opacity: 1;
      }
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Close mobile menu if open
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu && mobileMenu.classList.contains("active")) {
      toggleMobileMenu();
    }
  }
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Create particle effects
  createParticles();

  // Observe project cards for scroll animation
  document.querySelectorAll(".project-card").forEach((card) => {
    observer.observe(card);
  });

  // Observe skill bars
  document.querySelectorAll(".bg-gray-700.rounded.overflow-hidden").forEach((bar) => {
    skillBarObserver.observe(bar);
  });

  // Observe stats counters
  document.querySelectorAll(".text-3xl.text-green-400, .text-3xl.text-yellow-400, .text-3xl.text-purple-400").forEach((stat) => {
    statsObserver.observe(stat);
  });

  // Add parallax effect (only on desktop)
  if (window.innerWidth > 768) {
    addParallaxEffect();
  }

  // Add click effects
  addRippleAnimation();
  addClickEffects();

  // Animate hero card on load
  const heroCard = document.querySelector(".hero-card");
  if (heroCard) {
    heroCard.style.opacity = "0";
    setTimeout(() => {
      heroCard.style.transition = "opacity 0.8s, transform 0.8s";
      heroCard.style.opacity = "1";
    }, 100);
  }

  // Add hover sound effect simulation for interest cards
  document.querySelectorAll(".bg-black\\/50.p-4.rounded-lg.border-2").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add loading animation complete class
  document.body.classList.add("loaded");
});

// Handle window resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Reset parallax on resize
    document.querySelectorAll(".project-card").forEach((card) => {
      card.style.transform = "";
    });
  }, 250);
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

// Add Easter Egg - Konami Code
let konamiCode = [];
const konamiSequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.key);
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
    // Easter egg activated!
    document.body.style.animation = "rainbow 2s linear infinite";
    setTimeout(() => {
      document.body.style.animation = "";
    }, 5000);

    const style = document.createElement("style");
    style.textContent = `
      @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    // Show achievement notification
    const achievement = document.createElement("div");
    achievement.textContent = "🏆 Achievement Unlocked: Secret Code Master!";
    achievement.style.cssText = `
      position: fixed;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
      border: 4px solid #ff8c00;
      padding: 1rem 2rem;
      border-radius: 8px;
      font-size: 0.7rem;
      color: #000;
      z-index: 1000;
      animation: slideDown 0.5s ease-out, fadeOut 0.5s 4.5s ease-out;
      box-shadow: 0 10px 30px rgba(255, 215, 0, 0.5);
    `;
    document.body.appendChild(achievement);

    setTimeout(() => achievement.remove(), 5000);
  }
});
