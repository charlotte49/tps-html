let age = parseInt(prompt("Quel est ton age ?"));
if (age >= 7 && age <= 9) {
  alert("Tu es poussin");
} else if (age >= 10 && age <= 11) {
  alert("Tu es pupille");
} else if (age >= 12 && age <= 13) {
  alert("Tu es benjamin");
} else if (age >= 14 && age <= 15) {
  alert("Tu es minime");
} else if (age >= 16 && age <= 17) {
  alert("Tu es cadet");
} else {
  alert("cette personne ne rentre dans aucune catégorie");
}
