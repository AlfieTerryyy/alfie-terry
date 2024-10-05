const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect('mongodb://localhost:27017/chat', { useNewUrlParser: true, useUnifiedTopology: true });

const messageSchema = new mongoose.Schema({
    content: String,
    timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

app.use(express.static('public'));

io.on('connection', (socket) => {
    Message.find().sort('timestamp').exec((err, messages) => {
        if (err) return console.error(err);
        socket.emit('chat history', messages);
    });

    socket.on('send message', (data) => {
        const newMessage = new Message({ content: data });
        newMessage.save((err) => {
            if (err) return console.error(err);
            io.emit('new message', newMessage);
        });
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
