const express = require("express");
const app = express();
const connectToMongo = require("./db");
connectToMongo();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World! ---");
});

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

app.listen(port, () => console.log(`Server is Listening on port ${port}...`));
