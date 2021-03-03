import { v4 as uuidv4 } from "uuid";
import fs from "fs";

function postCustomer(request, response) {
  const newCustomer = { ...request.body, id: uuidv4() };

  fs.readFile("db.json", (error, fileContents) => {
    if (error) {
      console.error(error.message);
    }

    const database = JSON.parse(fileContents);
    const customer = database.customer;
    customer.push(newCustomer);

    fs.writeFile("db.json", JSON.stringify(database, null, 2), (error) => {
      if (error) {
        console.error(error.message);
        response.json({ error: error.message });
        return;
      }
      response.json(newCustomer);
    });
  });
}

function getCustomers(request, response) {
  fs.readFile("db.json", (error, fileContents) => {
    const database = JSON.parse(fileContents);
  });
  response.json({ customers });
}

/*
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
      */

export { postCustomer, getCustomers };
