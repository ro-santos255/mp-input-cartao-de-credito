const formatCardNumber = (string) => {
  const sanitizedString = string.replace(/[^0-9]/g, "");
  if (sanitizedString) {
    const fourNumbers = sanitizedString.match(/.{1,4}/g);
    return fourNumbers.join(" ");
  }

  return "";
};

// Form items

const ccNumberInput = document.querySelector("#cc-number");
const ccNameInput = document.querySelector("#cc-name");
const ccExpMonth = document.querySelector("#cc-exp-month");
const ccExpYear = document.querySelector("#cc-exp-year");
const ccCVV = document.querySelector("#cc-cvv");

// Card Items

const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".card-name");
const cardExpMonth = document.querySelector(".card-exp-month");
const cardExpYear = document.querySelector(".card-exp-year");
const cardCVV = document.querySelector(".card-cvv");

const frontCard = document.querySelector(".front-card");
const backCard = document.querySelector(".back-card");

ccNumberInput.addEventListener("input", (e) => {
  const numberResult = formatCardNumber(e.target.value);
  ccNumberInput.value = numberResult;
  cardNumber.textContent = numberResult || "#### #### #### ####";
});

ccNameInput.addEventListener("input", (e) => {
  cardName.textContent = ccNameInput.value || "Seu Nome";
});

ccExpMonth.addEventListener("input", (e) => {
  cardExpMonth.textContent = ccExpMonth.value || "MM";
});

ccExpYear.addEventListener("input", (e) => {
  cardExpYear.textContent = ccExpYear.value || "AA";
});

ccCVV.addEventListener("input", (e) => {
  cardCVV.textContent = ccCVV.value || "##";
});

ccCVV.addEventListener("focus", (e) => {
  frontCard.classList.remove("flip-card", "flip-card-2");
  backCard.classList.remove("flip-card", "flip-card-2");
  frontCard.classList.add("flip-card");
  setTimeout(() => {
    frontCard.classList.remove("flip-card");
    frontCard.style.display = "none";
    backCard.style.display = "flex";
    backCard.classList.add = "flip-card-2";
  }, 250);
});
ccCVV.addEventListener("blur", (e) => {
  frontCard.classList.remove("flip-card", "flip-card-2");
  backCard.classList.remove("flip-card", "flip-card-2");
  setTimeout(() => {
    frontCard.classList.remove("flip-card");
    frontCard.style.display = "flex";
    backCard.style.display = "none";
    frontCard.classList.add("flip-card-2");
  }, 250);
});
