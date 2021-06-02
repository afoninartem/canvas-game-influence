const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const areaSize = 250;
canvas.height = areaSize * 3;
canvas.width = areaSize * 7;

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const homeWorld_1 = {
  size: getRandom(190, 210),
  location: {
    x: getRandom(5, 10),
    y: getRandom(canvas.height / 2 + areaSize, canvas.height / 2),
  },
};
console.log(homeWorld_1);

const homeWorld_2 = {
  size: getRandom(190, 210),
  location: {
    x: getRandom(canvas.width - 300, canvas.width - 200),
    y: getRandom(canvas.height / 2 + areaSize, canvas.height / 2),
  },
};
console.log(homeWorld_2);

const planets = [
  "img/pluto.png",
  "img/earth.png",
  "img/neptune.png",
  "img/venus.png",
  "img/mercury.png",
  "img/mars.png",
  "img/uranus.png",
  "img/someplanet.png",
]; //array filled by links to planet imgs to set random skins

const getPlanet = () => {
  const randomIndex = getRandom(0, planets.length - 1);
  return planets.splice(randomIndex, 1)[0] || null;
};

const hm1 = new Image();
hm1.src = getPlanet();
const hm2 = new Image();
hm2.src = getPlanet();
const p0 = new Image();
p0.src = getPlanet();
const p1 = new Image();
p1.src = getPlanet();
const p2 = new Image();
p2.src = getPlanet();
const p3 = new Image();
p3.src = getPlanet();
const p4 = new Image();
p4.src = getPlanet();
const p5 = new Image();
p5.src = getPlanet();

const pSize = getRandom(120, 180);

document.querySelector("#start").addEventListener("click", () => {
  ctx.drawImage(
    hm1,
    homeWorld_1.location.x,
    homeWorld_1.location.y,
    homeWorld_1.size,
    homeWorld_1.size
  );
  ctx.drawImage(
    hm2,
    homeWorld_2.location.x,
    homeWorld_2.location.y,
    homeWorld_2.size,
    homeWorld_2.size
  );
  ctx.drawImage(
    p0,
    getRandom(areaSize, areaSize * 2),
    getRandom(15, 350 - pSize),
    // getRandom(15, canvas.height - pSize - 15),
    pSize,
    pSize
  );
  ctx.drawImage(
    p1,
    getRandom(areaSize, areaSize * 2),
    getRandom(390, 735-pSize),
    pSize,
    pSize
  );
  ctx.drawImage(
    p2,
    getRandom(areaSize * 3, areaSize * 4),
    getRandom(15, 350 - pSize),
    pSize,
    pSize
  );
  ctx.drawImage(
    p3,
    getRandom(areaSize * 3, areaSize * 4),
    getRandom(390, 735-pSize),
    pSize,
    pSize
  );
  ctx.drawImage(
    p4,
    getRandom(areaSize * 4, areaSize * 5),
    getRandom(15, 350 - pSize),
    pSize,
    pSize
  );
  ctx.drawImage(
    p5,
    getRandom(areaSize * 4, areaSize * 5),
    getRandom(390, 735-pSize),
    pSize,
    pSize
  );
});
