// Assignment 3: Company Product Catalog
// Define the inventory object
var inventory = {
    products: []
};
// Define some products
var product1 = {
    name: "Infinix",
    model: 2023,
    cost: 20000,
    quantity: 5
};
var product2 = {
    name: "Laptop",
    model: 2023,
    cost: 45000,
    quantity: 13
};
var product3 = {
    name: "Car",
    model: 2022,
    cost: 87000,
    quantity: 2
};
// Add products to the inventory
inventory.products.push(product1, product2, product3);
// Define another product and add it to the inventory
var product4 = {
    name: "ipad",
    model: 2024,
    cost: 22000,
    quantity: 5
};
inventory.products.push(product4);
// Print details of each product to the console
inventory.products.forEach(function (product) { return console.log(product); });
