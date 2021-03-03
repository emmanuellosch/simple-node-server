import { v4 as uuidv4 } from "uuid";
import { loadFromDb, writeToDb } from "../lib/databaseHelpers.js";

function postProduct(request, response) {
  const newProduct = { ...request.body, id: uuidv4() };

  const database = loadFromDb();
  database.products.push(newProduct);

  writeToDb(database);

  response.json(newProduct);
}

function getProducts(request, response) {
  const database = loadFromDb();
  response.json({ products: database.products });
}

export { postProduct, getProducts };
