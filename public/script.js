const socket = io();

const sayacSpan = document.getElementById("sayac");
const buton = document.getElementById("buton");

buton.addEventListener("click", () => {
  socket.emit("butonaTiklandi");
});

socket.on("updateClickCount", (count) => {
  sayacSpan.textContent = count;
});
