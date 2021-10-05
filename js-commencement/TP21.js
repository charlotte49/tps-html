function Etudiant(nom, prenom, age, genre, pays, option, listeDesCours) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.genre = genre;
  this.pays = pays;
  this.option = option;
  this.listeDesCours = listeDesCours;
}

const etudiants = [];

const qteEtudiants = parseInt(prompt("entrez le nombre d'étudiants"));

for (let i = 0; i <= qteEtudiants; i++) {
  const nom = prompt("nom de l'étudiant :");
  const prenom = prompt("prénom de l'étudiant :");
  const age = prompt("age de l'étudiant :");
  const genre = prompt("genre de l'étudiant :");
  const pays = prompt("pays de l'étudiant :");
  const option = prompt("option de l'étudiant :");
  const listeDesCours = prompt("liste des cours :");
  const etudiant = new Etudiant(
    nom,
    prenom,
    age,
    genre,
    pays,
    option,
    listeDesCours
  );
  etudiants.push(etudiant);
}

for (let i = 0; i < etudiants.length; i++) {
  console.log(etudiants[i]);
}

/*document.write("<h1>Etudiants</h1>");
document.write(
  '<table border="1"><thead><tr><th>Nom</th><th>Prénom</th><th>Age</th><th>Genre</th><th>Pays</th><th>Option</th><th>Liste des cours</th></tr></thead><tbody>'
);
for (let i = 0; i < etudiants.length; i++) {
  document.write(
    `<tr><td>${etudiants[i].nom}</td><td>${etudiants[i].prenom}</td><td>${etudiants[i].age}</td><td>${etudiants[i].genre}</td><td>${etudiants[i].pays}</td><td>${etudiants[i].option}</td><td>${etudiants[i].listeDesCours}</td></tr>`
  );
}
document("</tbody></table>");*/
