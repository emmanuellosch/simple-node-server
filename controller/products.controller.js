import { v4 as uuidv4 } from "uuid";

function postProduct(request, response) {
  const newProduct = { ...request.body, id: uuidv4() };
  response.json({
    success: true,
    data: newProduct,
  });
}

function getProducts(request, response) {
  response.json({ products });
}

function productForm(request, response) {
  response.send(`
            <form action="/products" method="POST">
            <input type="text" name="productname"> 
            <input type="text" name="price" placeholder="Price here">
            <button>Add product</button>
            </form>   
        `);
}

export { postProduct, productForm };
