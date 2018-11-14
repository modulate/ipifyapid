exports = module.exports = function(authenticate, errorLogging, realms) {
  
  
  function respond(req, res, next) {
    var body = {
      ip: req.ip
    }
    
    res.json(body);
  }

  /**
   * GET /me
   */
  return [ respond ];
};

exports['@require'] = [];
