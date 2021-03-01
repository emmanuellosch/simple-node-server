function customerForm(request, response) {
  response.send(`
  <form method="POST" action="/">
  <label>First Name:</label>
  <input type="text" name="fName"><br>
  <label>Last Name:</label>
  <input type="text" name="lName"><br>
  <label>Email1:</label>
  <input type="text" name="email"><br>
  <button>Send</button>
  </form>   
      `);
}
exports.customerForm = customerForm;
