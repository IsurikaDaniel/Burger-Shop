// Initialize an array to store customers
const customers = [];
const orders = [];

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


let isUpdating = false;
let currentItemId = null;

// Initialize an empty array to store menu items
let menuItems = [];



function ItemsAdd() {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-overlay');

    const form = document.createElement('form');
    form.classList.add('form-modal');
    form.innerHTML = `
        <h2>${isUpdating ? 'Update Item' : 'Add New Item'}</h2>
        <div class="mb-3">
            <label for="itemName" class="form-label">Item Name</label>
            <input type="text" class="form-control" id="itemName" required>
        </div>
        <div class="mb-3">
            <label for="itemPrice" class="form-label">Price</label>
            <input type="number" class="form-control" id="itemPrice" required>
        </div>
        <div class="mb-3">
            <label for="itemImage" class="form-label">Image URL</label>
            <input type="text" class="form-control" id="itemImage" required>
        </div>
        <button type="submit" class="btn btn-primary">${isUpdating ? 'Update Item' : 'Add Item'}</button>
        <button type="button" class="btn btn-secondary" onclick="closeForm()">Cancel</button>
    `;

    formContainer.appendChild(form);
    document.body.appendChild(formContainer);

    // Handle form submission
    form.onsubmit = function(event) {
        event.preventDefault(); 

        const itemName = document.getElementById('itemName').value;
        const itemPrice = document.getElementById('itemPrice').value;
        const itemImage = document.getElementById('itemImage').value;

        if (isUpdating) {
            // Update the existing item
            const itemIndex = menuItems.findIndex(item => item.id === currentItemId);
            if (itemIndex > -1) {
                menuItems[itemIndex].name = itemName;
                menuItems[itemIndex].price = itemPrice;
                menuItems[itemIndex].image = itemImage;

                // Update the item in the DOM
                const itemCard = document.querySelector(`[data-id="${currentItemId}"]`);
                itemCard.querySelector('.card-title').innerHTML = `${menuItems[itemIndex].name}`;
                itemCard.querySelector('.card-text').innerHTML = `Price: Rs.${menuItems[itemIndex].price}.00`;
                itemCard.querySelector('img').src = menuItems[itemIndex].image;
            }
        } else {
            // Add new item
            const newItem = {
                id: Date.now(), // Unique ID
                name: itemName,
                price: itemPrice,
                image: itemImage
            };

            menuItems.push(newItem);

            // Add new item to the DOM
            const newItemHTML = `
                <div class="col-md-6">
                    <div class="card mb-3" style="max-width: 540px;" data-id="${newItem.id}" onclick="editItem('${newItem.id}')">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${newItem.image}" class="img-fluid rounded-start menuImg" alt="${newItem.name}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${newItem.name}</h5>
                                    <p class="card-text">Price: Rs.${newItem.price}.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            const itemsContainer = document.getElementById('itemsContainer');
            itemsContainer.insertAdjacentHTML('beforeend', newItemHTML);
        }

        // Reset form and close
        form.reset();
        closeForm();
    };
}

function closeForm() {
    const formOverlay = document.querySelector('.form-overlay');
    if (formOverlay) {
        document.body.removeChild(formOverlay);
    }
    isUpdating = false;
    currentItemId = null;
}

function editItem(itemId) {
    isUpdating = true;
    currentItemId = parseInt(itemId); // Ensure itemId is an integer

    // Find the item in the array
    const item = menuItems.find(item => item.id === currentItemId); // Match with item.id

    if (item) {
        // Open the form with pre-filled data
        ItemsAdd();

        // After form is opened, populate the fields with existing data
        document.getElementById('itemName').value = item.name;
        document.getElementById('itemPrice').value = item.price;
        document.getElementById('itemImage').value = item.image;
    } else {
        console.error("Item not found");
    }
}


// Function to close the form and overlay
function closeForm() {
    const formOverlay = document.querySelector('.form-overlay');
    if (formOverlay) {
        document.body.removeChild(formOverlay);
    }
    isUpdating = false;
    currentItemId = null;
}

// Function to view the menu items (Optional: You can use this for displaying in another part of the app)
function viewMenuItems() {
    console.log("Current menu items:", menuItems);
    let menuList = 'Menu:\n';
    menuItems.forEach(item => {
        menuList += `Name: ${item.name}, Price: Rs.${item.price}.00\n`;
    });
    alert(menuList);
}

// Function to add an order
function addOrder() {
    const customerId = document.querySelector('input[name="customerId"]').value;
    const customerName = document.querySelector('input[name="customerName"]').value;
    const itemCode = document.querySelector('input[name="itemCode"]').value;
    const itemName = document.querySelector('input[name="itemName"]').value;
    const itemQuantity = document.querySelector('input[name="itemQuantity"]').value;

    // Basic validation
    if (!customerId || !customerName || !itemCode || !itemName || !itemQuantity) {
        alert('Please fill in all fields.');
        return;
    }

    // Find the menu item based on the item code
    const menuItem = menuItems.find(item => item.code === itemCode);
    if (!menuItem) {
        alert('Invalid item code.');
        return;
    }

    // Calculate total price
    const totalPrice = menuItem.price * itemQuantity;

    // Display order summary
    const orderSummary = `
        Customer ID: ${customerId}
        Customer Name: ${customerName}
        Item Ordered: ${itemName}
        Quantity: ${itemQuantity}
        Total Price: $${totalPrice.toFixed(2)}
    `;
    alert(orderSummary);

    // Here you can add code to send the order to your backend server if needed.
}
