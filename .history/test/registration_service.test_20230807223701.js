import assert from "assert";
import pgPromise from "pg-promise";
import dotenv from "dotenv";


import registration_service from "../services/registration_service.js";

dotenv.config();

const connectionOptions = {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  };
  
  const pgp = pgPromise();
  
  const db = pgp(connectionOptions);


describe("Registration Number", function () {
  
  
    const registration = registration_service(db)
 
    it("This should test if the registration number has been added", async function () {
     
     


      await registration.insert_registration_number("CJ3124");

      const newCount = (await registration.get_all_registration_numbers()).length;
    
   
      assert.equal(1 , newCount);
    });
    
  });
  