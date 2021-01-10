const sign_in_btn = document.querySelector("#si-btn");
const sign_up_btn = document.querySelector("#su-btn");
const container = document.querySelector(".sr-container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up");
});