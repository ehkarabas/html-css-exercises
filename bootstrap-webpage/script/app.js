// Placeholder changing responsively

const sendBtn = document.querySelector("#contact button");
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

const mediaQuery = window.matchMedia("(max-width: 450px)");

const inputTel = document.querySelector("#contact input[type='tel']");

const placeholderChanger = () => {
  if (mediaQuery.matches) {
    inputTel.placeholder = "Phone";
  } else {
    inputTel.placeholder = "Phone Number";
  }
};

mediaQuery.addListener(placeholderChanger);

// Disabling card stretch responsively

const cardStretchMedia = window.matchMedia("(min-width: 2450px)");

const cards = document.querySelectorAll(
  ".col-12.col-md-4.px-2.bg-transparent.d-flex.align-items-stretch"
);

console.log(cards);

const stretchRemover = () => {
  if (cardStretchMedia.matches) {
    cards.forEach((card) => {
      card.className = "col-12 col-md-4 px-2 bg-transparent";
    });
  } else {
    cards.forEach((card) => {
      card.className =
        "col-12 col-md-4 px-2 bg-transparent d-flex align-items-stretch";
    });
  }
};

cardStretchMedia.addListener(stretchRemover);