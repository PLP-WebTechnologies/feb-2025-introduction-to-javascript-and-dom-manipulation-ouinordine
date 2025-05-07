const button = document.getElementById("btn");
const message = document.getElementById("message");
const bgchange = document.getElementById("background")

button.addEventListener("click", () => {
message.textContent = "Enchanté(e)!";
bgchange.style.backgroundColor = "lightblue";
});