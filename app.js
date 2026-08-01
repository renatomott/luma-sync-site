const supportedLanguages = ["pt-BR", "en"];

function chooseInitialLanguage() {
  return navigator.language.toLowerCase().startsWith("pt") ? "pt-BR" : "en";
}

function setLanguage(language) {
  const selected = supportedLanguages.includes(language) ? language : "en";
  document.documentElement.lang = selected;
  document.querySelectorAll("[data-lang]").forEach((element) => {
    element.hidden = element.dataset.lang !== selected;
  });
  document.querySelectorAll("[data-language-button]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.languageButton === selected));
  });
}

document.querySelectorAll("[data-language-button]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.languageButton));
});

setLanguage(chooseInitialLanguage());
