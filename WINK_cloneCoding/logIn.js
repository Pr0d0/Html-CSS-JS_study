let inputCount = 0;
const TOTAL = 2;

function handleInput(event) {
  const button = document.querySelector("#logIn_button").style;
  if (event.target.value === "") inputCount--;
  else inputCount++;
  if (inputCount === TOTAL) button.background = "#0095F6";
  else button.background = "#4db5f9";
}
