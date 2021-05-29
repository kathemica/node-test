import { app } from './src/app.js';

let server;
const port=8090;

server = app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
