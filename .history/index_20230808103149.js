import express from "express";
import { engine } from "express-handlebars";
import pgPromise from "pg-promise";
import createTables from "./tableSql.js";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import { ifEquals , townName } from "./handlebar-helpers/helpers.js";
dotenv.config();
// routes
import registration_route from "./routes/registration_route.js";


// services
import registration_service from "./services/registration_service.js";


const app = express()

const connection = {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  };

const pgp = pgPromise()


const db = pgp(connection)

createTables(db)
  .then(() => {

    const registrationService = registration_service(db);



    const registrationRoute = registration_route(registrationService);

    app.engine('handlebars', engine({
      defaultLayout: 'main',
      helpers: { ifEquals, townName  },

    }));
    app.set("view engine", "handlebars");
    app.set("views", "./views");
    app.use(express.static("public"));

      // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  app.use(bodyParser.json());



    app.get('/reg_numbers', registrationRoute.show);
    app.post("/reg_numbers", registrationRoute.add)






    const PORT = process.env.PORT || 3012;

    app.listen(PORT, function () {
      console.log("App has started", PORT);
    });
  })
  .catch(err => {
    console.error("Failed to create tables and start server", err);
  });