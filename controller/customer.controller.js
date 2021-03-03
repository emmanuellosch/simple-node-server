import { v4 as uuidv4 } from "uuid";
import { loadFromDb, writeToDb } from "../lib/databaseHelpers.js";

function postCustomer(request, response) {
  const newCustomer = { ...request.body, id: uuidv4() };
  const database = loadFromDb();
  database.customers.push(newCustomer);
  writeToDb(database);
  response.json(newCustomer);
}

function getCustomers(request, response) {
  const database = loadFromDb();
  response.json({ customers: database.customers });
}

export { getCustomers, postCustomer };
