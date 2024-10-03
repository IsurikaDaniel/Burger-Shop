// Initialize an array to store customers
const customers = [];

function AddCus() {
    // Get the values from the form inputs
    const customerId = document.getElementById("customerId").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value;

    // Validate the required fields
    if (!customerId || !firstName || !lastName || !phoneNumber || !address || !email || !paymentMethod) {
        alert("Please fill out all fields.");
        return;
    }

    // Create a new customer object
    const newCustomer = {
        customerId: customerId,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        address: address,
        email: email,
        paymentMethod: paymentMethod
    };

    // Add the new customer to the customer list array
    customers.push(newCustomer);

    // Display the added customer in the console (or you can display it elsewhere in your UI)
    console.log("Customer added:", newCustomer);
    console.log("Current customer list:", customers);

    // Clear the form after adding the customer
    clearForm();

    alert("Customer added successfully!");
}

function clearForm() {
    document.getElementById("customerId").value = '';
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("phoneNumber").value = '';
    document.getElementById("address").value = '';
    document.getElementById("email").value = '';
    const paymentRadios = document.getElementsByName("paymentMethod");
    paymentRadios.forEach(radio => radio.checked = false);
}
