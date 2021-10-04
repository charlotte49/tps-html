let nbrDebut = parseInt(prompt("Veuillez entre nombre de debut :"));
let nbrFin = parseInt(prompt("Veuillez entrer nombre de fin :"));
let tabDebut = parseInt(prompt("Veuillez entrer table de début :"));
let tabFin = parseInt(prompt("Veuillez entrer table de fin :"));
let calcul = 0;
for (let i = nbrDebut; i < nbrFin + 1; i++) {
  for (let j = tabDebut; j < tabFin + 1; j++) {
    calcul = i * j;
    alert(`${i} x ${j} = ${calcul}`);
  }
  console.log("___");
}

/*let nbr_debut = parseInt(prompt("Entrez un premier nombre"));
let nbr_fin = parseInt(prompt("Entrez un deuxième nombre"));
let tab_debut = parseInt(prompt("Entrez un troisième nombre"));
let tab_fin = parseInt(prompt("Entrez un quatrième nombre"));

for (let i = nbr_debut; i <= nbr_fin; i++) {
  for (let j = tab_debut; j <= tab_fin; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("___");
}*/
