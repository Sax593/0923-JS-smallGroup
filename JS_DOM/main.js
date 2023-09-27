const container = document.querySelector(".container");
const sizeEl = document.querySelector(".size");
const color = document.querySelector(".color");
const resetBtn = document.querySelector(".btn");

let size = sizeEl.value;
let draw = false;

function populate(size) {
  container.style.setProperty("--size", size);
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");

    div.addEventListener("mouseover", function () {
      console.log("Click");
      if (!draw) return;
      div.style.backgroundColor = color.value;
    });
    div.addEventListener("mousdown", function () {
      console.log("clac");
      div.style.backgroundColor = color.value;
    });

    container.appendChild(div);
  }
}

window.addEventListener("mousedown", function () {
  console.log("clic");
  draw = true;
});
window.addEventListener("mouseup", function () {
  draw = false;
});

function reset() {
  container.innerHTML = "";
  populate(size);
}

resetBtn.addEventListener("click", reset);

sizeEl.addEventListener("keyup", function () {
  size = sizeEl.value;
  reset();
});

populate(size);
