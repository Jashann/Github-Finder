const ThemeHandler = (function () {
  //
  function changeTheme(ifDarkModeEnabled) {
    const body = document.body;
    if (ifDarkModeEnabled === "true" || ifDarkModeEnabled === true)
      body.classList.add("dark");
    else {
      if (body.classList.contains("dark")) body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", ifDarkModeEnabled);
  }

  function initializeTheme() {
    const ifDarkModeEnabledLS = localStorage.getItem("darkMode");
    changeTheme(ifDarkModeEnabledLS);

    const toggleBtn = document.querySelector("#togBtn");
    if (ifDarkModeEnabledLS === "true" || ifDarkModeEnabledLS === true)
      toggleBtn.checked = true;
    else toggleBtn.checked = false;

    toggleBtn.addEventListener("change", (e) => {
      changeTheme(e.target.checked);
    });
  }

  return {
    changeTheme,
    initializeTheme,
  };
})();

export default ThemeHandler;
