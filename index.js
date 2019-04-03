const express = require("express");
const search = require("./routes/search");
const app = express();

app.use(express.json());
app.use("/search", search);

const port = process.env.PORT || 8080;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
