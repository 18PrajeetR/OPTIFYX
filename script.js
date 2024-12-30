// script.js
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const imageCards = document.querySelectorAll(".image-card");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
  
        imageCards.forEach(card => {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });
  