import { useEffect } from "react";
import "@fortawesome/fontawesome-free";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Add the FontAwesome star icon to the library
library.add(faStar);

// Configurations for star effect
const config = {
  starAnimationDuration: 1500,
  minimumTimeBetweenStars: 250,
  minimumDistanceBetweenStars: 75,
  glowDuration: 75,
  maximumGlowPointSpacing: 10,
  colors: ["244, 217, 142"],
  sizes: ["1.4rem", "1rem", "0.6rem"],
  animations: ["fall-1", "fall-2", "fall-3"],
};

// Helper functions
const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const selectRandom = (items: string[]) => items[rand(0, items.length - 1)];

const px = (value: number) => `${value}px`;
const ms = (value: number) => `${value}ms`;

const calcDistance = (
  a: { x: number; y: number },
  b: { x: number; y: number }
) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const createStar = (position: { x: number; y: number }) => {
  const star = document.createElement("span");
  const color = selectRandom(config.colors);

  star.className = "star fa-solid fa-star";
  star.style.left = px(position.x);
  star.style.top = px(position.y);
  star.style.fontSize = selectRandom(config.sizes);
  star.style.color = `rgb(${color})`;
  star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
  star.style.animationName = config.animations[rand(0, 2)];
  star.style.animationDuration = ms(config.starAnimationDuration);

  document.body.appendChild(star);
  setTimeout(
    () => document.body.removeChild(star),
    config.starAnimationDuration
  );
};

const createGlowPoint = (position: { x: number; y: number }) => {
  const glow = document.createElement("div");
  glow.className = "glow-point";
  glow.style.left = px(position.x);
  glow.style.top = px(position.y);

  document.body.appendChild(glow);
  setTimeout(() => document.body.removeChild(glow), config.glowDuration);
};

const determinePointQuantity = (distance: number) =>
  Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1);

const createGlow = (
  last: { x: number; y: number },
  current: { x: number; y: number }
) => {
  const distance = calcDistance(last, current);
  const quantity = determinePointQuantity(distance);

  const dx = (current.x - last.x) / quantity;
  const dy = (current.y - last.y) / quantity;

  Array.from(Array(quantity)).forEach((_, index) => {
    createGlowPoint({ x: last.x + dx * index, y: last.y + dy * index });
  });
};

// const ShootingStarCursor = () => {
//   const [lastStar, setLastStar] = useState({
//     timestamp: Date.now(),
//     position: { x: 0, y: 0 },
//   });
//   const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent | TouchEvent) => {
//       let mousePosition;

//       if (event instanceof TouchEvent) {
//         const touch = event.touches[0];
//         mousePosition = { x: touch.clientX, y: touch.clientY };
//       } else {
//         mousePosition = { x: event.clientX, y: event.clientY };
//       }

//       if (lastMousePosition.x === 0 && lastMousePosition.y === 0) {
//         setLastMousePosition(mousePosition);
//       }

//       const now = Date.now();
//       const hasMovedFarEnough =
//         calcDistance(lastStar.position, mousePosition) >=
//         config.minimumDistanceBetweenStars;
//       const hasBeenLongEnough =
//         now - lastStar.timestamp > config.minimumTimeBetweenStars;

//       if (hasMovedFarEnough || hasBeenLongEnough) {
//         createStar(mousePosition);
//         setLastStar({ timestamp: now, position: mousePosition });
//       }

//       createGlow(lastMousePosition, mousePosition);
//       setLastMousePosition(mousePosition);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("touchmove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("touchmove", handleMouseMove);
//     };
//   }, [lastStar, lastMousePosition]);
// };

const useShootingStarCursor = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent | TouchEvent) => {
      let mousePosition;

      if (event instanceof TouchEvent) {
        const touch = event.touches[0];
        mousePosition = { x: touch.clientX, y: touch.clientY };
      } else {
        mousePosition = { x: event.clientX, y: event.clientY };
      }

      createStar(mousePosition);
      createGlow(mousePosition, mousePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
    };
  }, []);
};

export default useShootingStarCursor;
