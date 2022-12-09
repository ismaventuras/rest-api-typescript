import app from "./app";
import { logger } from "./utils/logger";

const port = 3000;

app.listen(port, ()=> {
    logger.info(`listening on http://127.0.0.1:${port}`)
})