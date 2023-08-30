const db = require('../config/config')
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require ('../middleware/AuthenticateUser')
class Orders{
    fetchOrders(req, res){
        const query = `
        SELECT orderID, userID , prodID, orderDate
        FROM Orders;
        `
        db.query(query,
            (err, results)=>{
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
        })
    }
    fetchOrder(req, res){
        const query = `
        SELECT orderID,userID , orderID, orderDate
        FROM Orders
        WHERE orderID = ${req.params.id};
        `
        db.query(query,
            (err, result)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    result
                })
            })
    }
    async registerOrder(req, res){
        const data = req.body
        //query
        const query = `
        INSERT INTO Orders
        SET ?;
        `
        db.query(query,
            [data],
            (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "You registered a order."
            })
        })
    }
    updateOrders(req, res){
        const query = `
        UPDATE Orders
        SET ?
        WHERE orderID = ?
        `
        db.query(query,
            [req.body, req.params.id],
            (err)=>{
                if (err)throw err
                res.json({
                    status: res.statusCode,
                    msg:"The order record was updated."
                })
            })
    }
    deleteOrders(req, res){
        const query = `
        DELETE FROM Orders
        WHERE orderID = ${req.params.id};
        `
        db.query(query,
            (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg:"The order record was removed"
            })
        })
    }
}
module.exports = Orders