console.log("Le fichier Panier.js est bien chargé !");

console.log("ntm")


const incrementButton = document.querySelector("#Plus1");
const articleCountElement = document.querySelector("#nb-article");

incrementButton.addEventListener("click",() =>{
    let currentCount = parseInt(articleCountElement.textContent);
    currentCount++;
    articleCountElement.textContent = currentCount;

});


const incrementButton2 = document.querySelector("#Plus1");
const articleCountPrice = document.querySelector("#prixclick");
incrementButton2.addEventListener("click", () => {
  let currentPrice = parseFloat(articleCountPrice.textContent.replace(",", ".").replace(" €", ""));
  currentPrice += 79,99;

  articleCountPrice.textContent = currentPrice.toFixed(2).replace(".", ",") + " €";
});
