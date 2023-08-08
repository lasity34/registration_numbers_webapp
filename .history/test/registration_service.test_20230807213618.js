import assert from "assert";
import pgPromise from "pg-promise";
import dotenv from "dotenv";


import registration_service from "../services/registration_service.js";

dotenv.config();

const db = pgPromise()(process.env.DATABASE_URL);


describe("Registration Number", function () {
    this.timeout(5000);
  
    const registration = registration_service(db)
 
    it("This should test if the registration number has been added", async function () {
     
        const allRegistrationNumbers = await registration.get_all_registration_numbers();
        console.log('allRegistrationNumbers:', allRegistrationNumbers);
        const initialCount = allRegistrationNumbers.length;
        
    
   
      assert.equal(initialCount + 1, newCount);
    });
    
  });
  