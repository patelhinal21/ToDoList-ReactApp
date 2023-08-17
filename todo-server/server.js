import app from './api/app.js'

const port = 3003;

app.listen(port, () => {
    console.log(`Server is running at ${port}.`);
});