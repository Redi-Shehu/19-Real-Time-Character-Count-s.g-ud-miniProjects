const textarea = document.querySelector("#textarea");
const totalCounter = document.querySelector("#total-counter");
const remainingCounter = document.querySelector("#remaining-counter");
console.dir(totalCounter);
console.dir(textarea);

updateCounter();

function updateCounter() {
  totalCounter.textContent = textarea.value.length;
  remainingCounter.textContent =
    textarea.getAttribute("maxlength") - textarea.value.length;
}

textarea.addEventListener("keyup", (e) => {
  updateCounter();
});
