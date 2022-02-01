const button = document.querySelector("button");
const counter = document.querySelector(".count");
let count = 0;

button.onclick = function () {
  button.disabled = true;
  count = 0;

  const intervalId = setInterval(() => {
    count++;
    counter.innerHTML = `${count}`;
    if (count === 7) {
      clearInterval(intervalId);
      button.disabled = false;
    }
  }, 1000);
};
