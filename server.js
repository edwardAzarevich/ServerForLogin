const express = require('express'),
    mongoose = require('mongoose'),
    PORTS = 5000,
    DB_URL = 'mongodb://localhost:27017/autorization',
    authRouter = require('./authRouter');

const app = express();
app.use(express.json());
app.use("/auth", authRouter);


const start = async () => {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORTS, () => { console.log(`Start server on port ${PORTS}`) })
    } catch {
        e => { console.log(e) }
    }
}
start();