document.addEventListener("mouseout", (e) => {
  if (Cookies.get("popup_mostrado") == undefined) {
    if (!e.relatedTarget) {
      Cookies.set("popup_mostrado", true, {
        expires: new Date(new Date().getTime() + 1 * 60 * 2000),
      });

      document.querySelector(".popup").classList.add("show");
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className == "fechar") {
    document.querySelector(".popup").classList.remove("show");
  }
});
