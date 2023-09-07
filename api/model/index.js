//indexconst Users = require('./Users')
const products = require('./products')
const users = require('./users')
const orders = require('./orders')
//export all objects
module.exports = {
    products: new products(),
    users: new users(),
    orders: new orders(),
}