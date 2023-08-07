import express from "express";




const app = express()



app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");








const PORT = process.env.PORT || 3012;

  app.listen(PORT, function () {
    console.log("App has started", PORT);
  });