const socket = io();

const buton = document.getElementById("buton");
const sayac = document.getElementById("sayac");

buton.addEventListener("click", () => {
    socket.emit("butonaTiklandi");
});

socket.on("updateClickCount", (count) => {
    sayac.textContent = count;
});
