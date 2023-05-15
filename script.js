document.querySelector("button").addEventListener("click", () => {
  document.querySelector(".body").classList.add("blur");
  document.querySelector(".auth").classList.remove("hide");

  //   document.querySelector(".container").style.border = "none";
});

document.querySelector("body").addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    document.querySelector(".body").classList.remove("blur");
    document.querySelector(".auth").classList.toggle("hide");
  }
});
