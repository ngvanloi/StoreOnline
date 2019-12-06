var express = require('express');
var router = express.Router();
// middleware
var multer = require('multer');
var upload = multer({});
// daos
var ProductDAO = require('../daos/ProductDAO.js');
// routes
router.get('/', function (req, res) {
  res.send('<h2>ADMIN HOME</h2>');
});

router.get('/addproduct', function (req, res) {
  res.render('admin/addproduct.ejs');
});

router.post('/addproduct', upload.single('fileImage'), async function (req, res) {
  var name = req.body.txtName;
  var price = parseInt(req.body.txtPrice);
  if (req.file) {
    var image = req.file.buffer.toString('base64');
    var product = { name: name, price: price, image: image };
    var result = await ProductDAO.insert(product);
    if (result) {
      res.send('OK BABY!');
    } else {
      res.send('SORRY BABY!');
    }
  }
});

module.exports = router;