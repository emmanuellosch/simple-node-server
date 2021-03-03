import { v4 as uuidv4 } from "uuid";

const products = [];

function postProduct(request, response) {
  const newProduct = { ...request.body, id: uuidv4() };
  products.push(newProduct);
  response.json(newProduct);
}

function getProducts(request, response) {
  response.json({ products });
}

export { postProduct, getProducts };
