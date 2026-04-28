const button = document.getElementById("button");
const countDisplay = document.getElementById("countDisplay");

button.addEventListener("click", function () {
  let count = 0;

  return function () {
    count += 1;

    //This will make the counter number apper on the browser :
    countDisplay.textContent = `Count ${count}`;

    if (count === 2) {
      alert("This alert appears every other press!");
      count = 0;
    }
  };
}());
