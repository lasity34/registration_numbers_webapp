


async function createTables() {
    try {
      // Create towns table
      await db.none(`CREATE TABLE IF NOT EXISTS registration_project.towns (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL UNIQUE
      )`);
  
      // Create registration numbers table
      await db.none(`CREATE TABLE IF NOT EXISTS registration_project.registration (
        id SERIAL PRIMARY KEY,
        registration_number TEXT NOT NULL,
        town_id INTEGER REFERENCES registration_project.towns(id),
        UNIQUE (registration_number)
      )`);
  
      console.log("Tables created successfully");
    } catch (err) {
      console.error("Failed to create tables", err);
    }
  }
  

  