import itemsData from "../data/items.js";
import { pool } from "./database.js";
import './dotenv.js';

const createItemsTable = async () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS items (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price MONEY NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      category VARCHAR(255) NOT NULL
    )
    `
    try {
        await pool.query(createTableQuery)
        console.log('🎉 items table created successfully')
    } catch (err) {
        console.error('⚠️ error creating items table', error)
    }
}

// const seedItemsTable = async () => {
//     await createItemsTable()

//     itemsData.forEach((item) => {
//         const insertQuery = {
//             text: 'INSERT INTO items (name, price, image, description, category) VALUES ($1, $2, $3, $4, $5)'
//         }

//         const values = [
//             item.name,
//             item.price,
//             item.image,
//             item.description,
//             item.category
//         ]

//         pool.query(insertQuery, values, (err, res) => {
//             if (err) {
//                 console.error('⚠️ error inserting item', error)
//                 return
//             }
//             console.log(`✅ ${item.name} added successfully`)
//         })
//     })
// }

// seedItemsTable()

const createUsersTable = async () => {
    const createUsersTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `
    try {
        const res = await pool.query(createUsersTableQuery)
        console.log('🎉 users table created successfully')
    } catch (error) {
        console.error('⚠️ error creating users table', error)
    }
}

// createUsersTable()

const createOrdersTable = async () => {
    const createOrdersTableQuery = `
        CREATE TABLE IF NOT EXISTS orders (
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
            total_amount NUMERIC(10,2) NOT NULL,
            status VARCHAR(50) DEFAULT 'PENDING',
            payment_id TEXT,                     
            payment_status TEXT,                 
            payment_receipt_url TEXT,             
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `
    try {
        const res = await pool.query(createOrdersTableQuery)
        console.log('🎉 orders table created successfully')
    } catch (error) {
        console.error('⚠️ error creating orders table', error)
    }
}

// createOrdersTable();

const createOrderItemsTable = async () => {
    const createOrderItemsTableQuery = `
        CREATE TABLE IF NOT EXISTS order_items (
            id SERIAL PRIMARY KEY,
            order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
            item_id INTEGER REFERENCES items(id),
            quantity INTEGER NOT NULL,
            unit_price NUMERIC(10,2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `
    // ON DELETE CASCADE means if you delete an order, the related order items are deleted automatically.
    try {
        const res = await pool.query(createOrderItemsTableQuery)
        console.log('🎉 order_items table created successfully')
    } catch (error) {
        console.error('⚠️ error creating order_items table', error)
    }
}

createOrderItemsTable();

const createCartsTable = async () => {
    const createCartsTableQuery = `
        CREATE TABLE IF NOT EXISTS carts (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `
    try {
        const res = await pool.query(createCartsTableQuery)
        console.log('🎉 carts table created successfully')
    } catch (error) {
        console.error('⚠️ error creating carts table', error)
    }
}

// createCartsTable();

const createCartItemsTable = async () => {
    const createCartItemsTableQuery = `
        CREATE TABLE IF NOT EXISTS cart_items (
            id SERIAL PRIMARY KEY,
            cart_id INTEGER NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
            item_id INTEGER NOT NULL REFERENCES items(id),
            quantity INTEGER NOT NULL,
            unit_price NUMERIC(10,2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `
    try {
        const res = await pool.query(createCartItemsTableQuery)
        console.log('🎉 cart_items table created successfully')
    } catch (error) {
        console.error('⚠️ error creating cart_items table', error)
    }
}

// createCartItemsTable();