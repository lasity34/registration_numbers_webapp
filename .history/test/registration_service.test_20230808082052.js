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
    this.timeout(5000)
  
    const registration = registration_service(db)


    beforeEach(async function() {
        // Truncate the registration table
        await db.none('TRUNCATE TABLE registration_project.registration RESTART IDENTITY CASCADE');
        
        // If there are other tables you need to reset, you can add more TRUNCATE statements here
      });
    

 
    it("This should test if the registration number has been added", async function () {
     
     
      const initialCount = (await registration.get_all_registration_numbers()).length;

      await registration.insert_registration_number("CA3124");

      const newCount = (await registration.get_all_registration_numbers()).length;
    
      assert.equal(initialCount  + 1 , newCount);
    });

    it("This should test if the registration number CL is chosen", async function () {
     
     
        const initialCount = (await registration.get_all_registration_numbers()).length;
  
        await registration.insert_registration_number("CL3124");
  
        const newCount = (await registration.get_all_registration_numbers()).length;
      
        assert.equal(initialCount  + 1 , newCount);
      });
    
  });
  