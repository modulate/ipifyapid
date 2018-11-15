exports = module.exports = function(authenticate, errorLogging, realms) {
  
  
  function respond(req, res, next) {
    console.log(req.ip)
    console.log(req.ips)
    
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
