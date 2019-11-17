const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  let hash = req.cookies.shortlyid || '';
  return models.Sessions.get({hash})
    .then(session => {
      if (session) {
        return session;
      }
      return models.Sessions.create();
    })
    .then(session => {
      console.log('*****');
      req.session = session;
      console.log(req.session);
    })
    .then(next())
    .catch(err => {
      console.log(err);
      res.status(500);
      next();
    });
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

