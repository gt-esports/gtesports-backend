import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/api", (req: Request, res: Response) => {
    res.send("sending api response");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});