
const colorPicker = document.getElementById("colorPicker");
const colorDisplay = document.getElementById("colorDisplay");
const colorValue = document.getElementById("colorValue");

colorPicker.addEventListener("input", () => {
  const selectedColor = colorPicker.value;
  colorDisplay.style.backgroundColor = selectedColor;
  colorValue.textContent = selectedColor;
});
