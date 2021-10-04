const mobile = {
  distanceParcourue: prompt("entrez la distance parcourure"),
  temps: prompt("entrez la vitesse"),
  calculVitesse() {
    return this.distanceParcourue / this.temps;
  },
};

console.log(`Distance ${mobile.distanceParcourue}`);
console.log(`Temps${mobile.temps}`);
console.log(`Vitesse${mobile.calculVitesse}`);
