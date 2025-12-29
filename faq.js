// Create particles effect
function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;
  
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 3 + "s";
    particle.style.animationDuration = Math.random() * 2 + 2 + "s";
    particle.style.width = (Math.random() * 4 + 2) + "px";
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}

// Create Parallax Stars
function createParallaxStars() {
  const container = document.getElementById("parallaxContainer");
  if (!container) return;

  // Create 3 layers of stars for depth
  for (let layer = 1; layer <= 3; layer++) {
    const starLayer = document.createElement("div");
    starLayer.className = `parallax-layer parallax-layer-${layer}`;
    
    const starCount = layer === 1 ? 30 : layer === 2 ? 50 : 80;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "parallax-star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      const size = layer === 1 ? (Math.random() * 3 + 2) : layer === 2 ? (Math.random() * 2 + 1) : (Math.random() * 1.5 + 0.5);
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.animationDelay = Math.random() * 3 + "s";
      starLayer.appendChild(star);
    }
    container.appendChild(starLayer);
  }
}

// Parallax scroll effect
function initParallax() {
  const layers = document.querySelectorAll('.parallax-layer');
  const floatingIcons = document.querySelectorAll('.floating-icon');
  const heroCard = document.querySelector('.hero-card');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    layers.forEach((layer, index) => {
      const speed = (index + 1) * 0.1;
      layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
    
    // Parallax for floating icons
    floatingIcons.forEach((icon, index) => {
      const speed = (index % 3 + 1) * 0.15;
      const direction = index % 2 === 0 ? 1 : -1;
      icon.style.transform = `translateY(${scrollY * speed * direction}px) rotate(${scrollY * 0.02}deg)`;
    });
    
    // Hero card parallax
    if (heroCard) {
      heroCard.style.transform = `translateY(${scrollY * 0.1}px)`;
    }
  });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("mobileMenuOverlay");
  const hamburgerBtn = document.getElementById("hamburgerBtn");

  if (!mobileMenu || !overlay) return;

  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");

  if (hamburgerBtn) {
    if (mobileMenu.classList.contains("active")) {
      hamburgerBtn.querySelector("span").textContent = "✕";
      document.body.style.overflow = "hidden";
    } else {
      hamburgerBtn.querySelector("span").textContent = "☰";
      document.body.style.overflow = "auto";
    }
  }
}

// Initialize FAQ Accordion
function initializeFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");
  console.log("Found FAQ items:", faqItems.length);

  faqItems.forEach((item, index) => {
    const header = item.querySelector(".faq-header");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");
    
    if (header) {
      // Remove any existing listeners by cloning
      const newHeader = header.cloneNode(true);
      header.parentNode.replaceChild(newHeader, header);
      
      newHeader.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log("FAQ item clicked:", index);
        const isActive = item.classList.contains("active");

        // Close all other FAQs with smooth animation
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active");
            const otherIcon = otherItem.querySelector(".faq-icon");
            if (otherIcon) {
              otherIcon.textContent = "+";
            }
          }
        });

        // Toggle current FAQ
        if (isActive) {
          item.classList.remove("active");
          const currentIcon = item.querySelector(".faq-icon");
          if (currentIcon) currentIcon.textContent = "+";
        } else {
          item.classList.add("active");
          const currentIcon = item.querySelector(".faq-icon");
          if (currentIcon) currentIcon.textContent = "−";
          
          // Scroll into view smoothly
          setTimeout(() => {
            item.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }, 150);
        }
      });
      
      // Also make the entire header area clickable via touch
      newHeader.addEventListener("touchend", function(e) {
        e.preventDefault();
        this.click();
      });
    }
  });
}

// Filter FAQ by Category
function filterFAQ(category) {
  const faqItems = document.querySelectorAll(".faq-item");
  const filterBtns = document.querySelectorAll(".faq-filter-btn");
  const noResults = document.getElementById("noResults");
  let visibleCount = 0;

  // Update active filter button
  filterBtns.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.filter === category) {
      btn.classList.add("active");
    }
  });

  // Filter FAQ items
  faqItems.forEach((item, index) => {
    const itemCategory = item.dataset.category;
    
    // Close all open FAQs when filtering
    item.classList.remove("active");
    const icon = item.querySelector(".faq-icon");
    if (icon) icon.textContent = "+";

    if (category === "all" || itemCategory === category) {
      item.classList.remove("hidden");
      item.style.animationDelay = (visibleCount * 0.05) + "s";
      visibleCount++;
    } else {
      item.classList.add("hidden");
    }
  });

  // Show/hide no results message
  if (noResults) {
    if (visibleCount === 0) {
      noResults.classList.remove("hidden");
    } else {
      noResults.classList.add("hidden");
    }
  }
}

// Search FAQ
function initializeSearch() {
  const searchInput = document.getElementById("faqSearch");
  const faqItems = document.querySelectorAll(".faq-item");
  const noResults = document.getElementById("noResults");
  const filterBtns = document.querySelectorAll(".faq-filter-btn");

  if (!searchInput) return;

  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase().trim();
    let visibleCount = 0;

    // Reset filter buttons when searching
    if (searchTerm.length > 0) {
      filterBtns.forEach((btn) => {
        btn.classList.remove("active");
        if (btn.dataset.filter === "all") {
          btn.classList.add("active");
        }
      });
    }

    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-header").textContent.toLowerCase();
      const answer = item.querySelector(".faq-answer").textContent.toLowerCase();
      
      // Close all open FAQs when searching
      item.classList.remove("active");
      const icon = item.querySelector(".faq-icon");
      if (icon) icon.textContent = "+";

      if (searchTerm === "" || question.includes(searchTerm) || answer.includes(searchTerm)) {
        item.classList.remove("hidden");
        item.style.animationDelay = (visibleCount * 0.05) + "s";
        visibleCount++;
        
        // Highlight matching text (optional enhancement)
        if (searchTerm.length > 2) {
          highlightText(item, searchTerm);
        } else {
          removeHighlight(item);
        }
      } else {
        item.classList.add("hidden");
      }
    });

    // Show/hide no results message
    if (noResults) {
      if (visibleCount === 0 && searchTerm.length > 0) {
        noResults.classList.remove("hidden");
      } else {
        noResults.classList.add("hidden");
      }
    }
  });
}

// Highlight matching text
function highlightText(item, term) {
  // This is a simple implementation - you can enhance it
  const questionEl = item.querySelector(".faq-header div:last-child");
  if (questionEl) {
    const originalText = questionEl.getAttribute("data-original") || questionEl.textContent;
    questionEl.setAttribute("data-original", originalText);
    
    const regex = new RegExp(`(${escapeRegex(term)})`, "gi");
    questionEl.innerHTML = originalText.replace(regex, '<span class="bg-yellow-500/30 px-1 rounded">$1</span>');
  }
}

// Remove highlight
function removeHighlight(item) {
  const questionEl = item.querySelector(".faq-header div:last-child");
  if (questionEl && questionEl.getAttribute("data-original")) {
    questionEl.textContent = questionEl.getAttribute("data-original");
  }
}

// Escape regex special characters
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Keyboard navigation
function initializeKeyboardNav() {
  const faqItems = document.querySelectorAll(".faq-item");
  
  document.addEventListener("keydown", function(e) {
    // Close all FAQs with Escape
    if (e.key === "Escape") {
      faqItems.forEach((item) => {
        item.classList.remove("active");
        const icon = item.querySelector(".faq-icon");
        if (icon) icon.textContent = "+";
      });
      
      // Also close mobile menu if open
      const mobileMenu = document.getElementById("mobileMenu");
      if (mobileMenu && mobileMenu.classList.contains("active")) {
        toggleMobileMenu();
      }
    }
  });
}

// Scroll reveal animation
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    observer.observe(el);
  });
}

// Cursor trail effect
function initCursorTrail() {
  const trail = [];
  const trailLength = 8;
  
  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.opacity = 1 - (i / trailLength);
    dot.style.transform = 'scale(' + (1 - i / trailLength) + ')';
    document.body.appendChild(dot);
    trail.push({ el: dot, x: 0, y: 0 });
  }
  
  let mouseX = 0, mouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function animateTrail() {
    let x = mouseX;
    let y = mouseY;
    
    trail.forEach((dot, index) => {
      const nextX = x;
      const nextY = y;
      
      dot.el.style.left = dot.x + 'px';
      dot.el.style.top = dot.y + 'px';
      
      dot.x += (nextX - dot.x) * (0.3 - index * 0.02);
      dot.y += (nextY - dot.y) * (0.3 - index * 0.02);
      
      x = dot.x;
      y = dot.y;
    });
    
    requestAnimationFrame(animateTrail);
  }
  
  animateTrail();
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("FAQ page loaded");
  createParticles();
  createParallaxStars();
  initParallax();
  initializeFAQ();
  initializeSearch();
  initializeKeyboardNav();
  initScrollReveal();
  initCursorTrail();
  
  // Set first filter as active
  const firstFilter = document.querySelector('.faq-filter-btn[data-filter="all"]');
  if (firstFilter) {
    firstFilter.classList.add("active");
  }
});

// Fallback: Also initialize on window load in case DOMContentLoaded already fired
window.addEventListener("load", function() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (faqItems.length > 0) {
    // Check if already initialized by looking for click handler
    const firstHeader = faqItems[0].querySelector(".faq-header");
    if (firstHeader && !firstHeader.hasAttribute("data-initialized")) {
      console.log("Fallback FAQ initialization");
      initializeFAQ();
    }
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});
