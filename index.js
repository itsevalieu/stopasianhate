import express from 'express';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 9999;
dotenv.config();

app.get('/', (req, res) => {
    res.send(
        "HELLO WORLD, I'm awaiting some purdy frontend magic and wicked backend dazzle. I'll show you some charts when I'm done. Check me out on da twitter @itsevalieu",
    );
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
