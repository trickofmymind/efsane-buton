const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

let clickCount = 0;

io.on("connection", (socket) => {
    console.log("Bir kullanıcı bağlandı:", socket.id);
    socket.emit("updateClickCount", clickCount);

    socket.on("butonaTiklandi", () => {
        clickCount++;
        io.emit("updateClickCount", clickCount);
    });

    socket.on("disconnect", () => {
        console.log("Bir kullanıcı ayrıldı:", socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
