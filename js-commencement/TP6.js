nbr = prompt("saisir un nombre compris entre 1 et 3");

while (nbr < 1 || nbr > 3) {
  alert("le nombre ne correspond pas");
  nbr = prompt("saisir un nombre compris entre 1 et 3");
}
if (nbr >= 1 && nbr <= 3) {
  alert("le nombre est bien compris entre 1 et 3");
}
