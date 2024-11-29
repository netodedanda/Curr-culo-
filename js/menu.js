document.querySelectorAll("section").forEach((section) => {
    section.addEventListener("mouseenter", () => {
      section.style.backgroundColor = "#f0f8ff";
      section.style.transition = "background-color 0.5s";
    });
  
    section.addEventListener("mouseleave", () => {
      section.style.backgroundColor = "transparent";
    });
  });
  
  const backToTopButton = document.createElement("button");
  backToTopButton.textContent = "↑ Topo";
  backToTopButton.style.position = "fixed";
  backToTopButton.style.bottom = "20px";
  backToTopButton.style.right = "20px";
  backToTopButton.style.padding = "10px";
  backToTopButton.style.backgroundColor = "#007BFF";
  backToTopButton.style.color = "#fff";
  backToTopButton.style.border = "none";
  backToTopButton.style.borderRadius = "5px";
  backToTopButton.style.cursor = "pointer";
  backToTopButton.style.display = "none";
  document.body.appendChild(backToTopButton);
  
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  