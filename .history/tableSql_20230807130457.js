await db.none(
    "CREATE TABLE IF NOT EXISTS registration_project.registration (name TEXT PRIMARY KEY, count INTEGER NOT NULL DEFAULT 0 )"
  );