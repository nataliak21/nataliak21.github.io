window.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#navbar-right a");


  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section");
    let currentSectionId = "";

    sections.forEach(section => {
      const offsetTop = section.offsetTop - 200; 
      if (window.scrollY >= offsetTop) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === '#${currentSectionId}') {
        link.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", updateActiveNavLink);

  updateActiveNavLink();
});
  