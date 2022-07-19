export default function theme_toggler(setTheme) {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
    return "light";
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    return "dark";
  }
}
