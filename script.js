const projects = [
  {
    title: "📱 E-Commerce App",
    subtitle: "Flutter & Firebase",
    description: "Aplikasi e-commerce lengkap dengan fitur shopping cart, payment gateway integration, real-time notification, dan user authentication. Menggunakan Flutter dan Firebase untuk backend.",
    tech: ["Flutter", "Firebase", "Dart", "REST API"],
    difficulty: "Intermediate",
    status: "Published",
    color: "yellow",
    icon: "📱",
    features: [
      "Shopping cart & checkout system",
      "Payment gateway integration",
      "Real-time push notifications",
      "User authentication & profiles"
    ]
  },
  {
    title: "🤖 Task Manager App",
    subtitle: "Android Native Kotlin",
    description: "Aplikasi task manager dengan fitur reminder, kategori tugas, dan cloud sync. Dibangun dengan Android Native menggunakan Kotlin dan arsitektur MVVM.",
    tech: ["Kotlin", "Room DB", "MVVM", "WorkManager"],
    difficulty: "Advanced",
    status: "Published",
    color: "cyan",
    icon: "🤖",
    features: [
      "Task scheduling & reminders",
      "Category management",
      "Cloud sync dengan Firebase",
      "Material Design 3 UI"
    ]
  },
  {
    title: "⚛️ Social Media App",
    subtitle: "React Native",
    description: "Aplikasi sosial media cross-platform dengan fitur posting, like, comment, dan real-time chat. Menggunakan React Native dengan Node.js backend.",
    tech: ["React Native", "Redux", "Node.js", "Socket.io"],
    difficulty: "Intermediate",
    status: "Published",
    color: "red",
    icon: "⚛️",
    features: [
      "Post, like & comment system",
      "Real-time chat messaging",
      "User profiles & following",
      "Push notifications"
    ]
  },
  {
    title: "🌐 Portfolio Website",
    subtitle: "HTML, CSS, JavaScript",
    description: "Website portfolio responsive dengan animasi modern, UI interaktif, dan desain yang menarik. Menggunakan HTML, CSS, TailwindCSS, dan JavaScript.",
    tech: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    difficulty: "Beginner",
    status: "Live",
    color: "orange",
    icon: "🌐",
    features: [
      "Responsive design",
      "Modern animations",
      "Interactive UI components",
      "SEO optimized"
    ]
  },
];

// Create particles effect
function createParticles() {
  const container = document.getElementById('particles');
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
    container.appendChild(particle);
  }
}

// Open modal with project details
function openModal(index) {
  const project = projects[index];
  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  const difficultyColors = {
    Beginner: "text-green-400",
    Intermediate: "text-yellow-400",
    Advanced: "text-red-400",
  };

  const difficultyBgColors = {
    Beginner: "bg-green-900/30 border-green-600",
    Intermediate: "bg-yellow-900/30 border-yellow-600",
    Advanced: "bg-red-900/30 border-red-600",
  };

  content.innerHTML = `
    <div class="text-center mb-6">
      <div class="text-6xl mb-4">${project.icon}</div>
      <h2 class="text-2xl mb-2 text-${project.color}-400 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
        ${project.title}
      </h2>
      <p class="pixel-text text-sm text-gray-400">${project.subtitle}</p>
    </div>
    
    <div class="bg-black/50 p-5 rounded-lg border-2 border-gray-700 mb-6">
      <p class="pixel-text text-xs leading-relaxed text-gray-300">
        ${project.description}
      </p>
    </div>
    
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="${difficultyBgColors[project.difficulty]} p-4 rounded-lg border-2">
        <div class="pixel-text text-xs mb-2 text-gray-400">⚙️ Difficulty</div>
        <div class="pixel-text text-sm ${difficultyColors[project.difficulty]}">
          ${project.difficulty}
        </div>
      </div>
      <div class="bg-green-900/30 p-4 rounded-lg border-2 border-green-600">
        <div class="pixel-text text-xs mb-2 text-gray-400">📊 Status</div>
        <div class="pixel-text text-sm text-green-400">${project.status}</div>
      </div>
    </div>
    
    <div class="bg-black/50 p-5 rounded-lg border-2 border-gray-700 mb-6">
      <div class="pixel-text text-xs text-purple-400 mb-4">🔧 Technologies Used:</div>
      <div class="flex flex-wrap gap-2">
        ${project.tech
          .map(
            (tech) => `
          <span class="bg-blue-900/40 border-2 border-blue-600 px-3 py-2 rounded pixel-text text-xs text-blue-300">
            ${tech}
          </span>
        `
          )
          .join("")}
      </div>
    </div>
    
    <div class="bg-black/50 p-5 rounded-lg border-2 border-gray-700">
      <div class="pixel-text text-xs text-cyan-400 mb-4">📋 Features:</div>
      <ul class="space-y-2">
        ${project.features
          .map(
            (feature) => `
          <li class="pixel-text text-xs text-gray-300 flex items-start gap-2">
            <span class="text-green-400">✓</span>
            <span>${feature}</span>
          </li>
        `
          )
          .join("")}
      </ul>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal(event) {
  if (event && event.target !== event.currentTarget && !event.target.classList.contains('minecraft-button')) {
    return;
  }
  
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
  document.body.style.overflow = 'auto';
}

// About Modal Functions
function openAboutModal() {
  const modal = document.getElementById("aboutModal");
  modal.classList.add("active");
  document.body.style.overflow = 'hidden';
}

function closeAboutModal(event) {
  if (event && event.target !== event.currentTarget && !event.target.classList.contains('minecraft-button')) {
    return;
  }
  
  const modal = document.getElementById("aboutModal");
  modal.classList.remove("active");
  document.body.style.overflow = 'auto';
}

// Contact Modal Functions
function openContactModal() {
  const modal = document.getElementById("contactModal");
  modal.classList.add("active");
  document.body.style.overflow = 'hidden';
}

function closeContactModal(event) {
  if (event && event.target !== event.currentTarget && !event.target.classList.contains('minecraft-button')) {
    return;
  }
  
  const modal = document.getElementById("contactModal");
  modal.classList.remove("active");
  document.body.style.overflow = 'auto';
}

// Mobile Menu Functions
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileMenuOverlay');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  
  // Toggle hamburger icon
  if (mobileMenu.classList.contains('active')) {
    hamburgerBtn.querySelector('span').textContent = '✕';
    document.body.style.overflow = 'hidden';
  } else {
    hamburgerBtn.querySelector('span').textContent = '☰';
    document.body.style.overflow = 'auto';
  }
}

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (e.key >= "1" && e.key <= "4") {
    openModal(parseInt(e.key) - 1);
  }
  if (e.key === "Escape") {
    closeModal({ target: document.getElementById("modal") });
    closeAboutModal({ target: document.getElementById("aboutModal") });
    closeContactModal({ target: document.getElementById("contactModal") });
    
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      toggleMobileMenu();
    }
  }
});

// Smooth scroll animation for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Create particle effects
  createParticles();
  
  // Observe project cards for scroll animation
  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
  });
  
  // Add click sound effect simulation
  document.querySelectorAll('.project-card, .minecraft-button').forEach(el => {
    el.addEventListener('click', function() {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 100);
    });
  });
});

// Prevent modal close when clicking inside modal content
document.addEventListener('DOMContentLoaded', () => {
  const modalContent = document.querySelector('.modal-content');
  if (modalContent) {
    modalContent.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
});

// Add parallax effect on mouse move
document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.project-card');
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  
  cards.forEach((card, index) => {
    const speed = (index + 1) * 2;
    const x = (mouseX - 0.5) * speed;
    const y = (mouseY - 0.5) * speed;
    
    card.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Reset transform on mouse leave
document.addEventListener('mouseleave', () => {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.style.transform = '';
  });
});

// function untuk menghitung total harga dengan pajak
function calculateTotalPrice(price, taxRate) {
  const taxAmount = price * taxRate;
  return price + taxAmount;
}