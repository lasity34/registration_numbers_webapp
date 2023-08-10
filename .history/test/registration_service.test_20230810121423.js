import assert from "assert";
import pgPromise from "pg-promise";
import dotenv from "dotenv";

import registration_service from "../services/registration_service.js";

dotenv.config();

const connectionOptions = {
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
};

const pgp = pgPromise();

const db = pgp(connectionOptions);

describe("Registration Number", function () {
  this.timeout(5000);

  const registration = registration_service(db);

  beforeEach(async function () {
    // Truncate the registration table
    await db.none(
      "TRUNCATE TABLE registration_project.registration RESTART IDENTITY CASCADE"
    );

    // If there are other tables you need to reset, you can add more TRUNCATE statements here
  });

  it("This should test if the registration number has been added", async function () {
    const initialCount = (await registration.get_all_registration_numbers())
      .length;
    await registration.insert_registration_number("CA3124");
    const newCount = (await registration.get_all_registration_numbers()).length;
    assert.equal(initialCount + 1, newCount);
  });



  it("This should test if the registration number CJ has been added", async function () {
    const initialCount = (await registration.get_all_registration_numbers())
      .length;

    await registration.insert_registration_number("CJ3124");
    const newCount = (await registration.get_all_registration_numbers()).length;
    assert.equal(initialCount + 1, newCount);
  });



  it("This should test if the incorrect registration number is chosen and it should not add", async function () {
    const initialCount = (await registration.get_all_registration_numbers())
      .length;

    await registration.insert_registration_number("CX3124");

    const newCount = (await registration.get_all_registration_numbers()).length;

    assert.equal(initialCount, newCount);
  });


  it("This should test if the incorrect registration number is chosen and it should not add", async function () {
    const initialCount = (await registration.get_all_registration_numbers())
      .length;

    await registration.insert_registration_number("CJ312432143");

    const newCount = (await registration.get_all_registration_numbers()).length;

    assert.equal(initialCount, newCount);
  });



  it("This should test if the incorrect registration number is chosen and it should display a message", async function () {
    await registration.insert_registration_number("CX3124");

    assert.equal("Invalid registration number", registration.getMessage().text);
  });


  it("This should test if to see if number plate has already been used", async function () {
    await registration.insert_registration_number("CA3124");
    await registration.insert_registration_number("CA3124");

    assert.equal(
      "Registration number already exists",
      registration.getMessage().text
    );
  });

  it("This should test if to see if number plate is blank", async function () {
    await registration.insert_registration_number("");


    assert.equal(
      "Registration number cannot be blank",
      registration.getMessage().text
    );
  });



  after(function () {
    db.$pool.end();
  });
});
