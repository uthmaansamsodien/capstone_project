//productsconst db = require("../config");
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require("../middleware/AuthenticateUser")

class Products  {
  fetchProducts(req, res) {
    const query = `
    SELECT userID, userName, userSurname, userAdd, userPass, userImg
    FROM Users;
        `
        db.query(query, 
            (err, results)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
            })
  }
  fetchProducts(req, res) {
    const query = `
    SELECT userID, userName, userSurname, userAdd, userPass, userImg
    FROM Users
    WHERE userID = ${req.params.id};
    `
    db.query(query,
        (err, result) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
  }
  addProduct(req, res) {
    const query = `
        INSERT INTO Products
        SET ?;
    `
    db.query(query, [req.body],
         (err) => {
        if (err) throw err
        res.json({
            status: res.statusCode,
            msg:"Successfully Added"
        })
    })
};
  
  updateProducts(req, res) {
    const query = `
    UPDATE Products
    SET ?
    WHERE userID = ?
    `
    db.query(query,
         [req.body, req.params.id],
         (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Update Complete"
            })
         })
  }
  deleteUser(req, res) {
    const query = `
    DELETE FROM Products
    WHERE userID = ${req.params.id};
    `
    db.query(query, (err)=>{
        if(err) throw err
        res.json({
            status: statusCode,
            msg: "Removal Complete"
        })
    })
  }
}

module.exports = Products
