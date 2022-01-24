const switchTheme = document.querySelector("input");

switchTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});