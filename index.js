function getColor() {
  // Créer 3 variables pour stocker 3 chiffres aléatoires
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const color = `rgb(${r},${g},${b})`;

  console.log(r, g, b);
  console.log(color);

  // Donner au body une couleur de fond en rgb()

  document.body.style.background = color;
  // window.setInterval(() => {
  //   document.body.style.background = color;
  // }, 1000);

  // Montrer sur le body la couleur rgb()
  document.body.innerHTML = `<h2>${color}</h2>`;
}

setInterval(getColor, 1500);
