const express = require("express");
const usersRoutes = require("./src/users/routes");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1/users", usersRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
