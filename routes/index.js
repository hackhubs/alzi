const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user , menuId:'home'
  })
);
router.get('/about', ensureAuthenticated, function(req, res, next) {
  res.render('about', { menuId:'about'});
});

router.get('/contact', ensureAuthenticated, function(req, res, next) {
  res.render('contact', { menuId:'contact'});
});
router.get('/service', function(req, res, next) {
  res.render('service', { menuId:'service'});
});

module.exports = router;
