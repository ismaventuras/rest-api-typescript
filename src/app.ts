import express from "express";
import errorHandler from "./middleware/errorHandler";
import notFound from "./middleware/notFound";
import router from "./routes";

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api', router);

app.use(notFound);
app.use(errorHandler);

export default app