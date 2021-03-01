function postProduct(request, response) {
  const { productname, price } = request.body;
  response.send(`<h1>Product ${productname} with ${price} has been added.`);
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

exports.postProduct = postProduct;
exports.productForm = productForm;
