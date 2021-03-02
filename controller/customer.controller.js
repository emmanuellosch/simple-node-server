function postCustomer(request, response) {
  const { fName, lName, email } = request.body;
  response.send(
    `<h1>Please enter your first name: ${fName}, last name: ${lName} and email: ${email}. Thank you!`
  );
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
