let nbr = parseInt(prompt("Veuillez entrer un nombre"));

let calcul = 0;
for (let i = 1; i < 11; i++) {
  calcul = nbr * i;
  alert(`${nbr} x ${i} = ${calcul}`);
}

/*const num = parseInt(prompt("Entrez un nombre : "));
for (let i = 0; i <= 10; i++) {
  console.log(`${num}x${i}=${num * i}`);
}*/
