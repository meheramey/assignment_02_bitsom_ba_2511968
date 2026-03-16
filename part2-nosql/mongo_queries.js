
/** * 2.2 MongoDB Operations 
 */

// OP1: insertMany() — insert all 3 documents from sample_documents.json
db.products.insertMany([
  { "product_id": "ELEC101", "name": "Gaming Laptop", "category": "Electronics", "price": 75000, "specifications": { "processor": "Intel i7", "ram": "16GB", "voltage": "220V", "warranty_months": 24 }, "tags": ["laptop", "tech"] },
  { "product_id": "CLO202", "name": "Classic Denim Jacket", "category": "Clothing", "price": 2500, "attributes": { "size": ["M", "L", "XL"], "material": "Organic Cotton", "color": "Indigo" } },
  { "product_id": "GROC303", "name": "Organic Almond Milk", "category": "Groceries", "price": 350, "expiry_date": "2024-12-15", "nutritional_info": { "calories": 60, "vegan": true } }
]);

// OP2: find() — retrieve all Electronics products with price > 20000
db.products.find({
  "category": "Electronics",
  "price": { $gt: 20000 }
});

// OP3: find() — retrieve all Groceries expiring before 2025-01-01
db.products.find({
  "category": "Groceries",
  "expiry_date": { $lt: "2025-01-01" }
});

// OP4: updateOne() — add a "discount_percent" field to a specific product
db.products.updateOne(
  { "product_id": "ELEC101" },
  { $set: { "discount_percent": 15 } }
);

// OP5: createIndex() — create an index on category field and explain why
db.products.createIndex({ "category": 1 });
/* EXPLANATION: This index improves query performance by allowing MongoDB to 
quickly locate documents in a specific category without scanning the entire collection.
*/