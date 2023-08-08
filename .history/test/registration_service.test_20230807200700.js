import assert from "assert";
import pgPromise from "pg-promise";
import dotenv from "dotenv";


import registration_service from "../services/registration_service";

dotenv.config();

const db = pgPromise()(process.env.DATABASE_URL);


describe("Counter", function () {
    this.timeout(5000);
  
    const registration = registration_service(db)
 
   
  
    it("This should test if the registration number has been added", async function () {
      await greeting.setLanguage("English");
      await greeting.greetMessage("bjorn");
      const count = await await greeting.getCount();
      assert.equal(1, count);
    });
    
  });
  