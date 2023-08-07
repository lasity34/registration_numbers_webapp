import express from "express";
import { engine } from "express-handlebars";
import pgPromise from "pg-promise";
import createTables from "./tableSql.js";

// routes
import registration_route from "./routes/registration_route.js";


// services
import registration_service from "./services/regsitration_service.js";


const app = express()

const connection = {
    connectionString: process.env.DATABASE_URL,

  };

const pgp = pgPromise()


const db = pgp(connection)

createTables(db)
  .then(() => {
    const registrationService = registration_service(db);
    const registrationRoute = registration_route(registrationService);

    app.engine("handlebars", engine());
    app.set("view engine", "handlebars");
    app.set("views", "./views");
    app.use(express.static("public"));

    app.get('/', registrationRoute.show);

    const PORT = process.env.PORT || 3012;

    app.listen(PORT, function () {
      console.log("App has started", PORT);
    });
  })
  .catch(err => {
    console.error("Failed to create tables and start server", err);
  });