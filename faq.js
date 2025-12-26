// Create particles effect
function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;
  
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

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");
    
    if (header) {
      header.addEventListener("click", function () {
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
          const icon = item.querySelector(".faq-icon");
          if (icon) icon.textContent = "+";
        } else {
          item.classList.add("active");
          const icon = item.querySelector(".faq-icon");
          if (icon) icon.textContent = "−";
          
          // Scroll into view smoothly
          setTimeout(() => {
            item.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }, 100);
        }
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

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  createParticles();
  initializeFAQ();
  initializeSearch();
  initializeKeyboardNav();
  
  // Set first filter as active
  const firstFilter = document.querySelector('.faq-filter-btn[data-filter="all"]');
  if (firstFilter) {
    firstFilter.classList.add("active");
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
