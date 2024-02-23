import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import cors from "cors"
import http from "http";

dotenv.config()

const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const bootstrap = () => {
    try {
        server.listen(PORT)
        console.log(`http://localhost:${PORT}`);
    } catch (error) {
        console.error(error)
    }
}

bootstrap()