import { v4 as uuidv4 } from "uuid";

function postCustomer(request, response) {
  const newCustomer = { ...request.body, id: uuidv4 };
  response.json(newCustomer);
}

function customerForm(request, response) {
  response.send(`
  <form method="POST" action="/customer">
  <label>First Name:</label>
  <input type="text" name="fName"><br>
  <label>Last Name:</label>
  <input type="text" name="lName"><br>
  <label>Email:</label>
  <input type="text" name="email"><br>
  <button>Add Customer</button>
  </form>   
      `);
}

export { postCustomer, customerForm };
