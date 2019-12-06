var express = require('express');
var router = express.Router();



var ProductDAO = require("../daos/ProductDAO.js");

router.get('/', function (req, res) {
  res.redirect('/home');
});

router.get("/home",async function(req,res) {
  var products = await ProductDAO.getAll();
  res.render("customer/home.ejs",{products : products});
})

router.get("/viewproduct/:id",async function(req,res) {
 var id = req.params.id;
 var product = await ProductDAO.getDetails(id);
  res.render("customer/detailProduct.ejs",{product : product});
})

router.post("/addtocart",function(req,res){
  var id = req.body.txtID;
  var quantity = parseInt(req.body.txtQuantity);


})


module.exports = router;