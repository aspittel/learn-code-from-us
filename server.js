const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use('/static', express.static('build/static'));
app.get('/*', (req, res) => res.sendFile(`${__dirname}/build/index.html`));

app.listen(port, () => console.log(`Listening on port ${port}...`));
