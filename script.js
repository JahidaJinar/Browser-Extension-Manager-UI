// script.js (updated)
document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.querySelector(".theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
    themeToggle.textContent = document.body.classList.contains("dark-theme")
      ? "☀️"
      : "🌙";
  });

  // Filter Functionality (fixed)
  const filterBtns = document.querySelectorAll(".filter-btn");
  const extensionCards = document.querySelectorAll(".extension-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.textContent.toLowerCase();
      extensionCards.forEach((card) => {
        const isActive = card.querySelector('input[type="checkbox"]').checked;
        card.style.display =
          filter === "all"
            ? "flex"
            : filter === "active" && isActive
            ? "flex"
            : filter === "inactive" && !isActive
            ? "flex"
            : "none";
      });
    });
  });

  // Toggle Switch Functionality (new)
  document.querySelectorAll(".switch input").forEach((switchInput) => {
    switchInput.addEventListener("change", (e) => {
      const card = e.target.closest(".extension-card");
      // Add any additional logic for active/inactive state changes
    });
  });

  // Remove Functionality
  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.closest(".extension-card").remove();
    });
  });

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.classList.add(
    savedTheme === "dark" ? "dark-theme" : "light-theme"
  );
  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
});
