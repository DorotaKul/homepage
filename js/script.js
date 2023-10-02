console.log("Cześć!");

const buttonElement = document.querySelector(".js-button");
const bodyElement = document.querySelector(".body");
const themeNameElement = document.querySelector(".js-themeName");

buttonElement.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");

  themeNameElement.innerText = bodyElement.classList.contains("dark")
    ? "jasne"
    : "ciemne";
});
