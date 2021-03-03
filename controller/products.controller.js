import { v4 as uuidv4 } from "uuid";
import fs from "fs";

function postProduct(request, response) {
  const newProduct = { ...request.body, id: uuidv4() };

  fs.readFile("db.json", (error, fileContents) => {
    if (error) {
      console.error(error.message);
    }

    const database = JSON.parse(fileContents);
    const products = database.products;
    products.push(newProduct);

    fs.writeFile("db.json", JSON.stringify(database, null, 2), (error) => {
      if (error) {
        console.error(error.message);
        response.json({ error: error.message });
        return;
      }
      response.json(newProduct);
    });
  });
}

function getProducts(request, response) {
  fs.readFile("db.json", (error, fileContents) => {
    const database = JSON.parse(fileContents);
  });
  response.json({ products });
}

export { postProduct, getProducts };
