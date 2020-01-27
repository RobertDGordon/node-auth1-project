const router = require('express').Router();

const Users = require('./users-model.js');
const authorization = require('../auth/auth-middleware.js')

router.get('/', authorization, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;