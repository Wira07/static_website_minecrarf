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

// FAQ Toggle Function - FIXED VERSION
// FAQ Toggle Function - VERSI DIPERBAIKI
function initializeFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    // Pastikan jawaban awalnya tersembunyi
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");
    answer.classList.remove("show"); // pastikan tertutup saat load

    item.addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      // Tutup semua FAQ lain
      faqItems.forEach((otherItem) => {
        if (otherItem !== this) {
          otherItem.classList.remove("active");
          const otherAnswer = otherItem.querySelector(".faq-answer");
          const otherIcon = otherItem.querySelector(".faq-icon");
          if (otherAnswer) {
            otherAnswer.classList.remove("show");
          }
          if (otherIcon) {
            otherIcon.textContent = "+";
          }
        }
      });

      // Toggle FAQ yang diklik
      if (isActive) {
        // Tutup yang sedang aktif
        this.classList.remove("active");
        answer.classList.remove("show");
        icon.textContent = "+";
      } else {
        // Buka yang ini
        this.classList.add("active");
        answer.classList.add("show");
        icon.textContent = "−";
      }
    });
  });
}

// Character Counter
function updateCharCount() {
  const messageInput = document.getElementById("message");
  const charCount = document.getElementById("charCount");
  const maxLength = 500;

  messageInput.addEventListener("input", function () {
    const currentLength = this.value.length;
    charCount.textContent = `${currentLength} / ${maxLength} characters`;

    // Change color based on length
    if (currentLength >= maxLength) {
      charCount.style.color = "#ef4444";
      this.value = this.value.substring(0, maxLength);
    } else if (currentLength >= maxLength * 0.8) {
      charCount.style.color = "#eab308";
    } else {
      charCount.style.color = "#9ca3af";
    }
  });
}

// Form Validation
function validateForm(formData) {
  const errors = [];

  // Validate name
  if (formData.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long");
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    errors.push("Please enter a valid email address");
  }

  // Validate subject
  if (formData.subject.trim().length < 3) {
    errors.push("Subject must be at least 3 characters long");
  }

  // Validate message
  if (formData.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long");
  }

  return errors;
}

// Show notification
function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  const bgColor = type === "success" ? "bg-green-900/90" : "bg-red-900/90";
  const borderColor = type === "success" ? "border-green-500" : "border-red-500";
  const icon = type === "success" ? "✅" : "❌";

  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 1000;
    max-width: 400px;
    animation: slideInRight 0.5s ease-out, fadeOut 0.5s 4.5s ease-out;
  `;

  notification.className = `${bgColor} border-2 ${borderColor} rounded-lg p-4 shadow-xl`;
  notification.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="text-2xl">${icon}</span>
      <div>
        <div class="pixel-text text-xs text-white">${message}</div>
      </div>
    </div>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.5s ease-out";
    setTimeout(() => notification.remove(), 500);
  }, 4500);
}

// Add slide animations
const style = document.createElement("style");
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  
  @keyframes fadeOut {
    to {
      opacity: 0.5;
    }
  }
`;
document.head.appendChild(style);

// Handle Form Submission
function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const successMessage = document.getElementById("successMessage");

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Validate form
  const errors = validateForm(formData);

  if (errors.length > 0) {
    showNotification(errors[0], "error");
    return;
  }

  // Show loading state
  submitButton.disabled = true;
  submitButton.classList.add("submitting");
  const originalText = submitButton.innerHTML;
  submitButton.innerHTML = '<span class="pixel-text text-xs">Sending...</span>';

  // Simulate API call
  setTimeout(() => {
    // Reset button
    submitButton.disabled = false;
    submitButton.classList.remove("submitting");
    submitButton.innerHTML = originalText;

    // Show success message
    successMessage.classList.remove("hidden");
    showNotification("Message sent successfully! 🎉", "success");

    // Reset form
    form.reset();
    document.getElementById("charCount").textContent = "0 / 500 characters";

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.add("hidden");
    }, 5000);

    // Add confetti effect
    createConfetti();
  }, 2000);
}

// Confetti Effect
function createConfetti() {
  const colors = ["#fbbf24", "#22c55e", "#3b82f6", "#a855f7", "#ef4444"];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}%;
      top: -20px;
      opacity: 1;
      transform: rotate(${Math.random() * 360}deg);
      animation: confettiFall ${2 + Math.random() * 2}s linear forwards;
      z-index: 9999;
      pointer-events: none;
    `;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }

  const confettiStyle = document.createElement("style");
  confettiStyle.textContent = `
    @keyframes confettiFall {
      to {
        transform: translateY(100vh) rotate(${360 + Math.random() * 360}deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(confettiStyle);
}

// Add input focus effects
function addInputEffects() {
  const inputs = document.querySelectorAll(".minecraft-input");

  inputs.forEach((input) => {
    // Add focus effect
    input.addEventListener("focus", function () {
      this.parentElement.style.transform = "scale(1.02)";
      this.parentElement.style.transition = "transform 0.3s";
    });

    input.addEventListener("blur", function () {
      this.parentElement.style.transform = "scale(1)";
    });

    // Add typing sound effect simulation
    input.addEventListener("input", function () {
      this.style.borderColor = "#22c55e";
      setTimeout(() => {
        if (!this.matches(":focus")) {
          this.style.borderColor = "";
        }
      }, 200);
    });
  });
}

// Add hover effects to contact items
function addContactItemEffects() {
  const contactItems = document.querySelectorAll(".contact-item");

  contactItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const emoji = this.querySelector(".text-3xl");
      emoji.style.transition = "transform 0.3s";
      emoji.style.transform = "scale(1.2) rotate(10deg)";
    });

    item.addEventListener("mouseleave", function () {
      const emoji = this.querySelector(".text-3xl");
      emoji.style.transform = "scale(1) rotate(0deg)";
    });
  });
}

// Add social link animations
function addSocialLinkEffects() {
  const socialLinks = document.querySelectorAll(".social-link");

  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Create ripple effect
      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 8px;
        top: 0;
        left: 0;
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;

      this.style.position = "relative";
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);

      showNotification("Social link clicked! 🔗", "success");
    });
  });
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

// Email copy functionality
function setupEmailCopy() {
  const emailItem = document.querySelector(".contact-item:first-child");
  if (emailItem) {
    emailItem.style.cursor = "pointer";
    emailItem.addEventListener("click", function () {
      const email = "wira.sukma@example.com";
      navigator.clipboard
        .writeText(email)
        .then(() => {
          showNotification("Email copied to clipboard! 📋", "success");
        })
        .catch(() => {
          showNotification("Failed to copy email", "error");
        });
    });
  }
}

// Handle window resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Adjust particles on resize
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle) => {
      particle.style.left = Math.random() * 100 + "%";
    });
  }, 250);
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Create particle effects
  createParticles();

  // Initialize FAQ
  initializeFAQ();

  // Setup form
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }

  // Initialize character counter
  updateCharCount();

  // Add input effects
  addInputEffects();

  // Add contact item effects
  addContactItemEffects();

  // Add social link effects
  addSocialLinkEffects();

  // Setup email copy
  setupEmailCopy();

  // Mobile menu event listeners
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeMobileMenu = document.getElementById("closeMobileMenu");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", toggleMobileMenu);
  }
  if (closeMobileMenu) {
    closeMobileMenu.addEventListener("click", toggleMobileMenu);
  }
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", toggleMobileMenu);
  }

  // Animate hero card on load
  const heroCard = document.querySelector(".hero-card");
  if (heroCard) {
    heroCard.style.opacity = "0";
    setTimeout(() => {
      heroCard.style.transition = "opacity 0.8s, transform 0.8s";
      heroCard.style.opacity = "1";
    }, 100);
  }

  // Add click effects to buttons
  document.querySelectorAll(".minecraft-button").forEach((button) => {
    button.addEventListener("click", function (e) {
      if (this.type !== "submit") {
        this.style.transform = "scale(0.98)";
        setTimeout(() => {
          this.style.transform = "";
        }, 100);
      }
    });
  });
});
