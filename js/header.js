const SearchBoxEL = document.querySelector(".search-box");
SearchBoxEL.addEventListener("click", () => {
  SearchBoxEL.classList.toggle("active");
});
// dropdown - item
const items = document.querySelectorAll(".dropdown-item");
const megaContents = document.querySelectorAll(".mega-content");

items.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const target = item.dataset.target;
    megaContents.forEach((mc) => {
      mc.style.display = mc.id === target ? "block" : "none";
    });
  });
  
});

//کادر طوسی
const dropdownLinks = document.querySelectorAll(".dropdown-left li a");
const dropdownLeft = document.querySelector(".dropdown-left");

dropdownLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    dropdownLinks.forEach((l) => l.classList.remove("highlight"));
    link.classList.add("highlight");
  });
});
dropdownLeft.addEventListener("mouseleave", () => {
  dropdownLinks.forEach((l) => l.classList.remove("highlight"));
});
