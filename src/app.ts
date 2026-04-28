import express, { Application } from "express";
import cardRoutes from "./routes/card.routes";

const app: Application = express();

app.use(express.json());
app.use("/card", cardRoutes);

export default app;