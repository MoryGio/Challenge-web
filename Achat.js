const prix = document.querySelector("#price");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");

button1.addEventListener("click", () => {
    prix.textContent = "79,99 €"
})

button2.addEventListener("click", () => {
  prix.textContent = "84,00 €";
});

button3.addEventListener("click", () => {
  prix.textContent = "90,00 €";
});

button4.addEventListener("click", () => {
  prix.textContent = "96,00 €";
});


button5.addEventListener("click", () => {
  prix.textContent = "104,00 €";
});



const phraseprix = document.querySelector("#trois-fois");

button1.addEventListener("click", () => {
  let le_prix = prix.textContent;
  var match = le_prix.match(/[0-9,.]*/);
  if (match !== null) {
    var amount = parseFloat(match[0].replace(/,/g, ".")); 
  }
  let roundedAmount = (amount / 3).toFixed(2); 
  console.log(roundedAmount);
  phraseprix.textContent =
    "Ou en 3 fois " + roundedAmount.replace(".", ",") + " €"; 
});

button2.addEventListener("click", () => {
  let le_prix = prix.textContent;
  var match = le_prix.match(/[0-9,.]*/);
  if (match !== null) {
    var amount = parseFloat(match[0].replace(/,/g, "."));
  }
  let roundedAmount = (amount / 3).toFixed(2);
  console.log(roundedAmount);
  phraseprix.textContent =
    "Ou en 3 fois " + roundedAmount.replace(".", ",") + " €";
});

button3.addEventListener("click", () => {
  let le_prix = prix.textContent;
  var match = le_prix.match(/[0-9,.]*/);
  if (match !== null) {
    var amount = parseFloat(match[0].replace(/,/g, "."));
  }
  let roundedAmount = (amount / 3).toFixed(2);
  console.log(roundedAmount);
  phraseprix.textContent =
    "Ou en 3 fois " + roundedAmount.replace(".", ",") + " €";
});

button4.addEventListener("click", () => {
  let le_prix = prix.textContent;
  var match = le_prix.match(/[0-9,.]*/);
  if (match !== null) {
    var amount = parseFloat(match[0].replace(/,/g, "."));
  }
  let roundedAmount = (amount / 3).toFixed(2);
  console.log(roundedAmount);
  phraseprix.textContent =
    "Ou en 3 fois " + roundedAmount.replace(".", ",") + " €";
});

button5.addEventListener("click", () => {
  let le_prix = prix.textContent;
  var match = le_prix.match(/[0-9,.]*/);
  if (match !== null) {
    var amount = parseFloat(match[0].replace(/,/g, "."));
  }
  let roundedAmount = (amount / 3).toFixed(2);
  console.log(roundedAmount);
  phraseprix.textContent =
    "Ou en 3 fois " + roundedAmount.replace(".", ",") + " €";
});