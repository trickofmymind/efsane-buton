const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

let clickCount = 0;

io.on("connection", (socket) => {
    console.log("Bağlandı:", socket.id);
    socket.emit("updateClickCount", clickCount);
    socket.on("butonaTiklandi", () => {
        clickCount++;
        io.emit("updateClickCount", clickCount);
    });
    socket.on("disconnect", () => {
        console.log("Ayrıldı:", socket.id);
    });
});

app.use(express.static("public")); // Statik dosyaları yükle

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
