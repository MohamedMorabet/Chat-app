import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // for parsing application/json

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    connectToMongoDB();  // if not woring, change to the iphone wifi
    console.log(`Server running on port ${PORT}`);
});
