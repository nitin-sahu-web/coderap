const express = require('express')
const cors = require('cors')
const { generateFile } = require('./generateFile')
const { executeCpp } = require('./excecuteCpp')
const app = express()
const http = require('http');
const { Server } = require('socket.io')
const PORT1 = process.env.PORT || 3001;
const PORT2 = process.env.PORT || 5000;
const server = http.createServer(app)


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.json({ hello: "World!" })
})
app.post('/run', async (req, res) => {
    const { language = "cpp", code } = req.body;
    console.log(code)
    if (code === undefined) {
        return res.status(400).json({ success: false, error: "Empty code body" })
    }

    try {
        // need to generate a c++ file with content from the request
        const filepath = await generateFile(language, code)
        // we need to run the file and send the response
        const output = await executeCpp(filepath);
        return res.json({ filepath, output })
    } catch (err) {
        res.status(500).json({ err });
    }
})


app.listen(PORT2, () => {
    console.log(`server running at port ${PORT2}`)
})
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        method: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log(`User Connected ${socket.id}`);
    socket.on('join_room', (data) => {
        socket.join(data);
        console.log(`User with ID ${socket.id} joined room ${data}`)
    })

    socket.on('send_message', (data) => {
        socket.to(data.room).emit('recieve_message', data)
        console.log((data))
    })

    socket.on('disconnect', () => {
        console.log('User Disconnected', socket.id)
    })
})
server.listen(PORT1, () => {
    console.log(`Server is running at URL http://localhost:${PORT1}`)
})