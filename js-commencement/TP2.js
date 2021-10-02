//let age = parseInt(prompt("Quel est ton age ?"));
//if (age >= 7 && age <= 9) {
//  alert("Tu es poussin");
//} else if (age >= 10 && age <= 11) {
//  alert("Tu es pupille");
//} else if (age >= 12 && age <= 13) {
//  alert("Tu es benjamin");
//} else if (age >= 14 && age <= 15) {
//  alert("Tu es minime");
//} else if (age >= 16 && age <= 17) {
//  alert("Tu es cadet");
//} else {
//  alert("cette personne ne rentre dans aucune catégorie");
//}

//let i = 0;

//for (i = 1; i <= 100; i = i + 2) {
//  console.log(i);
//}

let mail = prompt("rentrez votre adresse mail");
let mdp = prompt("rentrez votre mdp");
let mailpotentiel = prompt("quel est votre mail?");
let mdppotentiel = prompt("quel est votre mdp?");
let i = 0;

while (mailpotentiel !== mail || mdppotentiel !== mdp) {
  i = i + 1;
  alert("Identifiants incorrects");
  mailpotentiel = prompt("quel est votre mail?");
  mdppotentiel = prompt("quel est votre mdp?");
  if (i > 5) {
    alert("vous avez essayé de vous connecter plus de 5 fois");
    break;
  }
}
if (mailpotentiel === mail && mdppotentiel === mdp) {
  alert("Bienvenue dans votre espace client");
}

//alert("Inscription");
//let user = prompt("Veuillez rentrer votre adresse mail :");
//let mdp = prompt("Veuillez entrer votre mot de passe :");
//alert("Connexion");
//let userConnexion = prompt("Email :");
//let mdpConnexion = prompt("Mot de passe :");
//while (userConnexion != user || mdpConnexion != mdp) {
//  alert("Identifiants incorrects");
//  userConnexion = prompt("Email :");
//  mdpConnexion = prompt("Mot de passe :");
//}
//if (userConnexion === user && mdpConnexion === mdp) {
//  alert("Bienvenue dans votre espace");
//}
