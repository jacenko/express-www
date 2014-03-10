/*
 * express-nudist
 *
 * npm: express-nudist
 * github: https://github.com/emilioTe/express-nudist
 *
 */



module.exports = function(domain) {

  return function(req, res, next) {
  
    if (req.host.match(/^www\./i))
      return res.redirect((req.secure ? 'https://' : 'http://') + domain + req.url);

    next();
  
  };

};
