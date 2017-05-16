var User = require('../../models/').User

module.exports = {
  getAll: (req, res, next) => {
    User.findAll().then(users => {
      res.send({
        data: users
      })
    })
  },

  getId: (req, res, next) => {
    res.status(200).send({
      user: req.params.user_id
    })
  },

  getIdWithPost: (req, res, next) => {
    res.status(200).send({
      user: req.params.user_id,
      post: req.params.post_id
    })
  },

  create: (req, res, next) => {
    User.create({first_name: req.body.first_name, last_name: req.body.last_name}).then(user => {
      res.status(201).send({
        result: user
      })
    })
  },

  update: (req, res, next) => {
    res.status(200).send({
      message: 'PUT'
    })
  },

  delete: (req, res, next) => {
    res.status(200).send({
      message: 'DELETE'
    })
  }

}
