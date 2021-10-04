let listeA = [];
let listeB = [];
let listeC = [];

A = parseInt(prompt("rentrez la taille des tableaux"));

for (let i = 0; i < A; i++) {
  listeA[i] = parseInt(prompt("saisissez les nombres du premier tableau"));
}

for (let i = 0; i < A; i++) {
  listeB[i] = parseInt(prompt("saisissez les nombres du deuxieme tableau"));
}

for (let i = 0; i < A; i++) {
  listeC[i] = listeA[i] + listeB[i];
}

alert("liste1");
for (i = 0; i < A; i++) {
  alert(listeA[i]);
}

alert("liste2");
for (i = 0; i < A; i++) {
  alert(listeB[i]);
}

alert("liste3");
for (i = 0; i < A; i++) {
  alert(listeC[i]);
}
