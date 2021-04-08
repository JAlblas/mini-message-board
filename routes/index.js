var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

/* GET new message form. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Form' });
});

router.post('/new', function(req, res, next) {
  if (req.body.name && req.body.text) {
    const messageUser = req.body.name;
    const messageText = req.body.text;
    messages.push({text: messageText, user: messageUser, added: new Date()});
    res.redirect('/')
  } else {
    throw next(Error("Form data missing!"));
  }

});

module.exports = router;
  