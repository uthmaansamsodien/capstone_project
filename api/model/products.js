const db = require('../config/config')
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require("../middleware/AuthenticateUser")

class Products  {
  fetchProducts(req, res) {
    const query = `
    SELECT * FROM Products;
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
  fetchProduct(req, res) {
    const query = `
    SELECT prodID, prodName, prodInfo, prodBrand, prodPrice, prodImg
    FROM Products
    WHERE prodID = ${req.params.id};
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
  addProducts(req, res) {
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
    WHERE prodID = ?
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
  deleteProduct(req, res) {
    const query = `
    DELETE FROM Products
    WHERE prodID = ${req.params.id};
    `
    db.query(query, (err)=>{
        if(err) throw err
        res.json({
            status: res.statusCode,
            msg: "Removal Complete"
        })
    })
  }
}

module.exports = Products
