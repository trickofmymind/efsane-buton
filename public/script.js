const socket = io(); // Otomatik olarak ayný domain üzerinden baðlanýr

const sayacSpan = document.getElementById("sayac");
const buton = document.getElementById("buton");

// Butona týklanýnca sunucuya haber ver
buton.addEventListener("click", () => {
    socket.emit("butonaTiklandi");
});

// Sunucudan gelen güncel týklama sayýsýný göster
socket.on("updateClickCount", (count) => {
    sayacSpan.textContent = count;
});

// (Opsiyonel) baðlantý testi için logla
socket.on("connect", () => {
    console.log("Socket baðlantýsý baþarýlý:", socket.id);
});
