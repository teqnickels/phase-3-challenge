const pgp = require('pg-promise')()
const connectDb = `postgres://${process.env.USER}@localhost:5432/grocery_store`
const db = pgp(connectDb)

const filteredList = (filter) => {
    return db.any('SELECT name, section FROM products WHERE section = ${filter}')
}


module.exports = { filteredList }