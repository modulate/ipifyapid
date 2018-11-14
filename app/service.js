exports = module.exports = function(infoHandler) {
  var service = require('express')();
  
  service.use(require('morgan')('common'));
  service.get('/', infoHandler);
    
  return service;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@require'] = [
  'handlers/info'
];
