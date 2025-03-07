const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("./config/Mongo-Db")

const app = express();
app.use(express.json())
app.use(cors());
 
const server = http.createServer(app); // Create HTTP server

// Initialize Socket.io with CORS settings
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000", "https://karupati-2.onrender.com"],
        methods: ["GET", "POST"]
    }
});

// ROUTER
const router = require("./router")
app.use('/karupati', router)

// PORT="3001"
// MONGO_URI="mongodb+srv://rahulraw2002:klz2myB74miLiW9t@cluster0.s5p1x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// JWT_SECRET="1213242134213"  

// WebSocket Connection Handling
io.on("connection", (socket) => {
    console.log(`🔗 New WebSocket Connection: ${socket.id}`);

    // User joins a room
    socket.on("joinRoom", (room) => {
        socket.join(room);
        console.log(`👤 User ${socket.id} joined room: ${room}`);
        socket.to(room).emit("message", { msg: `User ${socket.id} joined the chat!` });
    });

    // Chat event
    socket.on("chat", ({ room, message }) => {
        console.log(`📩 Message in ${room}: ${message}`);
        io.to(room).emit("message", { user: socket.id, msg: message });
    });

    // User disconnects
    socket.on("disconnect", () => {
        console.log(`❌ User ${socket.id} Disconnected`);
    });
});

// Start the server
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`🚀 WebSocket Server running at ws://localhost:${PORT}`);
});


// PORT="3001"
// MONGO_URI="mongodb+srv://rahulraw2002:bagKOGoB8by8RZaF@cluster0.s5p1x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// JWT_SECRET="1213242134213"  
