import fs from "fs";

const writeToDb = (database, databaseFile = "db.json") => {
  fs.writeFile(databaseFile, JSON.stringify(database, null, 2), (error) => {
    if (error) console.error(error.message);
  });
};

const loadFromDb = (databaseFile = "db.json") => {
  const database = fs.readFileSync(databaseFile);
  return JSON.parse(database);
};

export { loadFromDb, writeToDb };
