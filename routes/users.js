var express = require('express');
var usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', function(req, res, next) {
  res.send({  "id" : 1,
              "username": "ferdi",
              "nr_of_posts_curr": 10 
});
});

module.exports = usersRouter;
