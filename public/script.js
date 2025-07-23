const socket = io(); // Otomatik olarak ayn� domain �zerinden ba�lan�r

const sayacSpan = document.getElementById("sayac");
const buton = document.getElementById("buton");

// Butona t�klan�nca sunucuya haber ver
buton.addEventListener("click", () => {
    socket.emit("butonaTiklandi");
});

// Sunucudan gelen g�ncel t�klama say�s�n� g�ster
socket.on("updateClickCount", (count) => {
    sayacSpan.textContent = count;
});

// (Opsiyonel) ba�lant� testi i�in logla
socket.on("connect", () => {
    console.log("Socket ba�lant�s� ba�ar�l�:", socket.id);
});
