import express from "express";
import { engine } from "express-handlebars";
import pgPromise from "pg-promise";

// routes
import registration_route from "./routes/registration_route";


// services
import registration_service from "./services/regsitration_service";


const app = express()


const pgp = pgPromise()

const registrationRoute = registration_route()






app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");








app.get('/')




const PORT = process.env.PORT || 3012;

  app.listen(PORT, function () {
    console.log("App has started", PORT);
  });