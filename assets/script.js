const submit = document.querySelector("#submit");
const result = document.querySelector("#result");
const poids = document.getElementById("poids");
const age = document.getElementById("age");
const taille = document.getElementById("taille");
const td = document.querySelector("td");

const ano = document.querySelector("#ano");
const anoC = document.querySelector("#anoChiffre");

const normale = document.querySelector("#normale");
const normaleC = document.querySelector("#normaleChiffre");

const surpoids = document.querySelector("#surpoids");
const surpoidsC = document.querySelector("#surpoidsChiffre");

const obesmod = document.querySelector("#obesmod");
const obesmodC = document.querySelector("#obesmodChiffre");

const obesever = document.querySelector("#obesever");
const obeseverC = document.querySelector("#obeseverChiffre");

const obesmorb = document.querySelector("#obesmorb");
const obesmorbC = document.querySelector("#obesmorbChiffre");

//Mettre tous ces objets dans un tableau pour les remettre en noir au début

submit.addEventListener("click", () => {
  const imc = poids.value / (taille.value * 10 ** -2) ** 2;

  result.textContent = "Votre IMC est de : " + Math.round(imc * 100) / 100;
  result.style.visibility = "visible";

  if (imc < 18.5) {
    ano.style.color = "red";
    anoC.style.color = "red";
  } else if (imc > 18.5 && imc < 25.0) {
    normale.style.color = "red";
    normaleC.style.color = "red";
  } else if (imc > 25.0 && imc < 30.0) {
    surpoids.style.color = "red";
    surpoidsC.style.color = "red";
  } else if (imc > 30.0 && imc < 35.0) {
    obesmod.style.color = "red";
    obesmodC.style.color = "red";
  } else if (imc > 35.0 && imc < 40.0) {
    obesever.style.color = "red";
    obeseverC.style.color = "red";
  } else if (imc > 40.0) {
    obesmorb.style.color = "red";
    obesmorbC.style.color = "red";
  }
});
