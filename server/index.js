import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import { userRoute } from "./routes/userRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.use("/api/v1/user", userRoute);
