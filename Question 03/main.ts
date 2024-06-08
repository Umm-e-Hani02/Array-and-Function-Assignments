// Assignment 3: Company Product Catalog

// Define the inventory object
let inventory = {
    products:[] as {
        name: string,
        model: number,
        cost: number,
        quantity: Number
    }[]
}

// Define some products
let product1 = {
    name: "Infinix",
    model: 2023,
    cost: 20000,
    quantity: 5
};
let product2 = {
    name: "Laptop",
    model: 2023,
    cost: 45000,
    quantity: 13
};
let product3 = {
    name: "Car",
    model: 2022,
    cost: 87000,
    quantity: 2
}

// Add products to the inventory
inventory.products.push(product1, product2, product3)

// Define another product and add it to the inventory
let product4 = {
    name:"ipad",
    model: 2024,
    cost: 22000,
    quantity: 5
}
inventory.products.push(product4)

// Print details of each product to the console
inventory.products.forEach(product => console.log(product));