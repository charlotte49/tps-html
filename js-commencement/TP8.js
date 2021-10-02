nbr = prompt("saisir un nombre compris entre 10 et 20");

while (nbr < 10 || nbr > 20) {
  alert("le nombre ne correspond pas");
  if (nbr < 10) {
    alert("Plus grand !");
    nbr = prompt("saisir un nombre compris entre 10 et 20");
  }
  if (nbr > 20) {
    alert("Plus petit!");
    nbr = prompt("saisir un nombre compris entre 10 et 20");
  }
}
if (nbr >= 10 && nbr <= 20) {
  alert("le nombre est bien compris entre 10 et 20");
}
