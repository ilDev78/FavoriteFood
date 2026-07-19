require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const connectDB = require("./src/config/db.config");
const PORT = process.env.PORT;

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
app.set("layout", "layouts/main");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./src/routes/home.route"));

app.use((req, res) => {
  res.status(404).render("404", { title: "404 - ไม่พบหน้านี้" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});