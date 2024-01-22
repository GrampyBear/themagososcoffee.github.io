const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/datetime', (req, res) => {
    const now = new Date();
    const datetime = {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
    };
    res.json(datetime);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
