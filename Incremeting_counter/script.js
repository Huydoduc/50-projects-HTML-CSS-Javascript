// const counters = document.querySelectorAll(".counter");
// counters.forEach((counter) => {
//   counter.innerText = "0";
//   const updateCounter = () => {
//     const target = Number(counter.getAttribute("data-target"));
//     const c = Number(counter.innerText);

//     const increment = target / 100;

//     if (c < target) {
//       counter.innerText = `${Math.ceil(c + increment)}`;
//     } else {
//       counter.innerText = target;
//     }
//   };

//   setInterval(updateCounter, 10);
// });

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const target = Number(counter.getAttribute("data-target"));
  let current = 0;

  const interval = setInterval(() => {
    const increment = target / 100;

    if (current < target) {
      current = Math.min(current + increment, target);
      counter.innerText = `${Math.ceil(current)}`;
    } else {
      clearInterval(interval); // Clear the interval when the target is reached
    }
  }, 10);
});
