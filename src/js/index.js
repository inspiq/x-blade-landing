// BURGER MENU
const toggleOpen = document.getElementById("toggle-open");
const toggleClose = document.getElementById("toggle-close");
const menuBurger = document.getElementById("header-burger");

toggleOpen.addEventListener("click", () => {
  menuBurger.classList.add("header-burger-active");
});

toggleClose.addEventListener("click", () => {
  menuBurger.classList.remove("header-burger-active");
});

menuBurger.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    menuBurger.classList.remove("header-burger-active");
  }
});

/* OPEN CHARACTERISTICS */
let charToggle = document.getElementsByClassName(
  "characteristics__item-toggle"
);
let arrow = document.getElementsByClassName("characteristics__item-arrow");

for (let i = 0; i < charToggle.length; i++) {
  charToggle[i].addEventListener("click", function () {
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      arrow[i].style.transform = "rotate(0deg)";
      charToggle[i].style.borderRadius = "24px";
      charToggle[i].style.transition = "1.3s";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      arrow[i].style.transform = "rotate(180deg)";
      charToggle[i].style.borderRadius = "24px 24px 0px 0px";
      charToggle[i].style.transition = "0s";
    }
  });
}

// ONE CHECKBOX MARK
let inputs = document.querySelectorAll("#checkbox-input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", changeCheck);
}

function changeCheck() {
  let checkedInput = this;

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
  checkedInput.checked = true;
}

// BICYCLE COLOR SELECTION
const colorBlack = document.querySelector(".order__checkbox-black");
const colorBeige = document.querySelector(".order__checkbox-beige");
const colorGrey = document.querySelector(".order__checkbox-grey");
const bicycleBlack = document.querySelector(".order__bicycle-black");
const bicycleBeige = document.querySelector(".order__bicycle-beige");
const bicycleGrey = document.querySelector(".order__bicycle-grey");

colorBlack.addEventListener("click", () => {
  bicycleBlack.classList.remove("order__d-none");
  bicycleBeige.classList.add("order__d-none");
  bicycleGrey.classList.add("order__d-none");
});

colorBeige.addEventListener("click", () => {
  bicycleBlack.classList.add("order__d-none");
  bicycleBeige.classList.remove("order__d-none");
  bicycleGrey.classList.add("order__d-none");
});

colorGrey.addEventListener("click", () => {
  bicycleBlack.classList.add("order__d-none");
  bicycleBeige.classList.add("order__d-none");
  bicycleGrey.classList.remove("order__d-none");
});

/* SCROLL DIV */
$(document).ready(function () {
  $('[data-href^="#"]').on("click", function (e) {
    e.preventDefault();
    var t = 50;
    var d = $(this).attr("data-href")
      ? $(this).attr("data-href")
      : $(this).attr("href");
    $("html,body")
      .stop()
      .animate({ scrollTop: $(d).offset().top - 100 }, t);
  });
});
