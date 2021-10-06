const nomInput = document.querySelector("#nom");
const prenomInput = document.querySelector("#prenom");
const ageInput = document.querySelector("#age");
const genreInput = document.querySelector("#genre");
const paysInput = document.querySelector("#pays");
const optionInput = document.querySelector("#option");
const listeDesCoursInput = document.querySelector("#listeDesCours");

const form = document.querySelector("#form");

const tabEtudiants = document.querySelector("#tabEtudiants");

form.addEventListener("button", function (e) {
  e.preventDefault();
  const tr = document.createElement("tr");

  const nom = document.createElement("td");
  nom.innerText = nomInput.value;

  const prenom = document.createElement("td");
  prenom.innerText = prenomInput.value;

  const age = document.createElement("td");
  age.innerText = ageInput.value;

  const genre = document.createElement("td");
  genre.innerText = genreInput.value;

  const pays = document.createElement("td");
  pays.innerText = paysInput.value;

  const option = document.createElement("td");
  option.innerText = optionInput.value;

  const listeDesCours = document.createElement("td");
  listeDesCours.innerText = listeDesCoursInput.value;

  tabEtudiants.append(tr);
  tr.append(nom, prenom, age, genre, pays, option, listeDesCours);
});
