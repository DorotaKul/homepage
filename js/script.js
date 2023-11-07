{
  const toggleBackground = () => {
    const bodyElement = document.querySelector(".body");
    const themeNameElement = document.querySelector(".js-themeName");

    bodyElement.classList.toggle("dark");
    themeNameElement.innerText = bodyElement.classList.contains("dark")
      ? "jasne"
      : "ciemne";
  };

  const init = () => {
    const buttonElement = document.querySelector(".js-button");
    buttonElement.addEventListener("click", toggleBackground);
  };

  init();
}
