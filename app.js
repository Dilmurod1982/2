const showBtn = document.querySelector(".show-btn");
const modal = document.querySelector(".modal");
const hidden = document.querySelector("hidden");
const closeBtn = document.querySelector(".close-btn");
const blur = document.querySelector(".blur");

const addClass = function () {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
};
showBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  blur.classList.remove("hidden");
});

closeBtn.addEventListener("click", addClass);

blur.addEventListener("click", addClass);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addClass();
  }
});
