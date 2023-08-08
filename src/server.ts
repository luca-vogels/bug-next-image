import express, { Request, Response } from "express";
import next from "next";

const dev = true;
const HTTP_BIND = "0.0.0.0";
const HTTP_PORT = 80;


const app = express();
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {

    // all frontend routes
    app.all('*', (req: Request | any, res: Response) => {
        return nextHandler(req, res);
    });

    // start server
    app.listen(HTTP_PORT, HTTP_BIND, () => {
        console.log("Server running at "+HTTP_BIND+":"+HTTP_PORT+" in "+(dev ? "development" : "production")+" mode");
    });
});