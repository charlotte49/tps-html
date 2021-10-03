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
