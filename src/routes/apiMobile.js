const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const multer = require('multer');
const UserModel = require('../app/models/User');
const ProductModels = require('../app/models/Course');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

var Storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads')
  },
  filename: function(req, file, cb) {
      let filename = file.originalname;
      arr = filename.split('.');
      let newFileName = '';
      for (let i = 0; i < arr.length; i++) {
          if (i != arr.length - 1) {
              newFileName += arr[i];
          } else {
              newFileName += ('-' + Date.now() + "1" + '.' + "png");
          }
      }
      cb(null, newFileName)

  }
})
var upload = multer({ storage: Storage })


//USER
router.post('/add', (req, res) => {
  const user = new UserModel(req.body);
    user.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.json(user);
      }
    });
})

router.get('/user', (req, res) => {
  UserModel.find((err, users) => {
    if (err) {
      res.send(err);
    } else {
      res.json(users);
    }
  });
})

//get id
router.get('/user/:user_id', (req, res) => {
  UserModel.findById(req.params.user_id, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.json(user);
    }
  });
})

router.put('/user/:user_id', (req, res) => {
  UserModel.findById(req.params.user_id, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      user.img = req.body.img || user.img
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;

      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.json(user);
        }
      });
    }
  });
})

router.delete('/users/:user_id', (req, res) => {
  UserModel.remove({
    _id: req.params.user_id
  }, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'User deleted!' });
    }
  });
})
 

//product
router.get('/products', (req, res) => {
  ProductModels.find((err, products) => {
    if (err) {
      res.send(err);
    } else {
      res.json(products);
    }
  });
})

router.post('/add', (req, res) => {
  const product = new ProductModels(req.body);
    product.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.json(product);
      }
    });
})

router.get('/products/:product_id', (req, res) => {
  ProductModels.findById(req.params.product_id, (err, product) => {
    if (err) {
      res.send(err);
    } else {
      res.json(product);
    }
  });
})

router.put('/products/:product_id', (req, res) => {
  ProductModels.findById(req.params.product_id, (err, product) => {
    if (err) {
      res.send(err);
    } else {
      product.name = req.body.name || product.name;
      product.price = req.body.price || product.price;
      product.desc = req.body.desc || product.desc;
      product.img = req.body.img || product.img;

      product.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.json(product);
        }
      });
    }
  });
})

router.delete('/products/:product_id', (req, res) => {
  ProductModels.remove({
    _id: req.params.product_id
  }, (err, product) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Product deleted!' });
    }
  });
})
module.exports = router;