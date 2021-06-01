const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
// canvas.height = window.innerHeight * 0.8;
// canvas.width = window.innerWidth * 0.95;

const area = 250;
canvas.height = area * 3;
canvas.width = area * 7;

const getRandomSizeOrLocation = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const homeWorld_1 = {
  size: getRandomSizeOrLocation(area - 70, area - 30),
  location: {
    x: getRandomSizeOrLocation(area - 200, area - 100),
    y: getRandomSizeOrLocation(area - 200, area - 100),
  },
};

const homeWorld_2 = {
  size: getRandomSizeOrLocation(area - 70, area - 30),
  location: {
    x: getRandomSizeOrLocation(area * 7 - 300, area * 7 - 200),
    y: getRandomSizeOrLocation(area * 3 - 300, area * 3 - 200),
  },
};

console.log(homeWorld_2);

const planets = [
  "img/pluto.png",
  "img/earth.png",
  "img/neptune.png",
  "img/uranus.png",
  "img/mercury.png",
  "img/mars.png",
]; //array filled by links to planet imgs to set random skins

// const pluto = new Image();
// pluto.src = "img/pluto.png";

const test = new Image();
test.src = "img/mars.png";
ctx.drawImage(test, 50, 50);

// const draw = () => {
//   for (let i = 0; i < 6; i += 1) {
//     const planet = planets.splice(
//       getRandomSizeOrLocation(0, planets.length - 1),
//       1
//     )[0];
//     if (i === 0) {
//       const hm1 = new Image();
//       hm1.src = planet;
//       ctx.drawImage(
//         hm1,
//         homeWorld_1.location.x,
//         homeWorld_1.location.y,
//         homeWorld_1.size,
//         homeWorld_1.size
//       );
//     }

//     if (i === 1) {
//       const hm2 = new Image();
//       hm2.src = planet;
//       ctx.drawImage(
//         hm2,
//         homeWorld_2.location.x,
//         homeWorld_2.location.y,
//         homeWorld_2.size,
//         homeWorld_2.size
//       );
//     }

//   }
// };

// draw()

/** */

// window.addEventListener("resize", () => {
//   canvas.height = window.innerHeight;
//   canvas.width = window.innerWidth;
// });

// window.addEventListener("load", () => {
//   const canvas = document.querySelector("#canvas");
//   const ctx = canvas.getContext("2d");
// });

/** */
