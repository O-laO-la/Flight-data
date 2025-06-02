// Navigation Outline Functionality
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navOutline = document.getElementById("nav-outline");
  const navLinks = document.querySelectorAll(".nav-outline-link");
  const body = document.body;

  // Mobile navigation toggle
  navToggle.addEventListener("click", function () {
    navOutline.classList.toggle("active");
    body.classList.toggle("nav-open");
  });

  // Close navigation when clicking outside on mobile
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      if (!navOutline.contains(e.target) && !navToggle.contains(e.target)) {
        navOutline.classList.remove("active");
        body.classList.remove("nav-open");
      }
    }
  });

  // Smooth scroll functionality
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Calculate offset for fixed navigation
        const offset = window.innerWidth > 768 ? 280 : 0;
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 100; // Additional offset for better visibility

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Close mobile navigation after clicking
        if (window.innerWidth <= 768) {
          navOutline.classList.remove("active");
          body.classList.remove("nav-open");
        }

        // Update active link
        updateActiveLink(this);
      }
    });
  });

  // Update active link based on scroll position
  function updateActiveLink(activeLink = null) {
    if (activeLink) {
      navLinks.forEach((link) => link.classList.remove("active"));
      activeLink.classList.add("active");
    } else {
      // Auto-detect based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const offset = window.innerWidth > 768 ? 280 : 0;

        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
          link.classList.add("active");
        }
      });
    }
  }

  // Throttled scroll event listener
  let isScrolling = false;
  window.addEventListener("scroll", function () {
    if (!isScrolling) {
      window.requestAnimationFrame(function () {
        updateActiveLink();
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navOutline.classList.remove("active");
      body.classList.remove("nav-open");
    }
  });

  // Initialize active link on page load
  updateActiveLink();
});
