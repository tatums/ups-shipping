'use strict';

var async     = require('async');
var config    = require('yaml-config');
var settings  = config.readConfig('./config/app.yml')
var upsAPI    = require('./../node_modules/shipping-ups/lib/index');
var shipments = require('./../data.json')

var ups = new upsAPI({
  environment:  'sandbox',
  access_key:   settings.ups.access_key,
  username:     settings.ups.username,
  password:     settings.ups.password
});

var quote = function(shipment, callback) {
  ups.rates(shipment, function(error, resp) {
    if(error) {
      return console.log(error);
    }
    callback(false, {shipments: resp.RatedShipment});
  });
};

exports.index = function(req, res){
  async.map(shipments, quote,
    function(err, results) {
    if(err) {
      console.log(err);
      res.send(500,"Server Error");
      return;
    }
    res.render('index', {title: 'Shipments', results: results, service_codes: ups.service_codes} );
  });
};
