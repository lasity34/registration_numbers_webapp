import express from "express";
import { engine } from "express-handlebars";
import pgPromise from "pg-promise";

// routes
import registration_route from "./routes/registration_route";


// services
import registration_service from "./services/regsitration_service";


const app = express()

const connection = {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } // or true, depending on your certificate setup
  };

const pgp = pgPromise()


const db = pgp(connection)

const registrationRoute = registration_route()






app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");








app.get('/')




const PORT = process.env.PORT || 3012;

  app.listen(PORT, function () {
    console.log("App has started", PORT);
  });