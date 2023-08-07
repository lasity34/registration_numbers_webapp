import express from "express";
import { engine } from "express-handlebars";


// routes
import registration_route from "./routes/registration_route";


// services
import registration_service from "./services/regsitration_service";


const app = express()



app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");



app.get('/')




const PORT = process.env.PORT || 3012;

  app.listen(PORT, function () {
    console.log("App has started", PORT);
  });