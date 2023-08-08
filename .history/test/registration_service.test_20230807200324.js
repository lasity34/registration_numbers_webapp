import assert from "assert";
import pgPromise from "pg-promise";
import dotenv from "dotenv";


import registration_service from "../services/registration_service";

dotenv.config();

const db = pgPromise()(process.env.DATABASE_URL);


