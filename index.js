/*
 * express-www
 *
 * npm: express-www
 * github: https://github.com/jacenko/express-www
 *
 * Forked from: https://github.com/emilioTe/express-nudist
 *
 */

module.exports = function(domain) {

  return function(req, res, next) {

    if (!req.hostname.match(/^www\./i))
      return res.redirect(req.protocol + '://www.' + domain + req.url);

    next();

  };

};
