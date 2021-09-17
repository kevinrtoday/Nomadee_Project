const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/article");
const articleRouter = require("./routes/articles");
const methodOverride = require("method-override");
const app = express();

mongoose.connect(
  "mongodb+srv://KevinrToday:kevinrtoday@nomadee.bsw8d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

  (err) => {
    if (err) throw err;
    console.log("connected to MongoDB");
  }
);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articleRouter);

app.listen(5000);
