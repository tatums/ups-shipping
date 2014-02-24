
var async = require('async');
var config = require('yaml-config');
var settings = config.readConfig('./config/app.yaml')


exports.index = function(req, res){

  'use strict';

  var upsAPI = require('./../node_modules/shipping-ups/lib/index');
  var util = require('util');
  var fs = require('fs');

  var results = {};


  console.log(settings.ups)

  var ups = new upsAPI({
    environment: settings.ups.environment,
    access_key: settings.ups.access_key,
    username: settings.ups.username,
    password: settings.ups.password
  });


  var shipping_data = {
                        shipper: {
                          name: 'Tatum Szymczak',
                          shipper_number: 'E8F100',
                          address: {
                            address_line_1: '1424 W Taylor ST',
                            city: 'Chicago',
                            state_code: 'IL',
                            country_code: 'US',
                            postal_code: '60607'
                          }
                        },
                        ship_to: {
                          name: 'Blah Person',
                          address: {
                            address_line_1: '10556 Erie Drive',
                            city: 'Crown Point',
                            state_code: 'IN',
                            country_code: 'US',
                            postal_code: '46307'
                          }
                        },
                        packages: [
                          {
                            description: 'My Package',
                            weight: 10
                          }
                        ]
                      };

  async.parallel([

    function(callback) {
      ups.rates(shipping_data, function(error, resp) {
        if(error) {
          return console.log(error);
        }
        callback(false, {shipments: resp.RatedShipment});
        // console.log(util.inspect(res, {depth: null}));
        // should return an array of rates
      });

    },

    function(callback) {
      ups.rates(shipping_data, function(error, resp) {
        if(error) {
          return console.log(error);
        }
        callback(false, {shipments: resp.RatedShipment});
        // console.log(util.inspect(res, {depth: null}));
        // should return an array of rates
      });

    },

    function(callback) {
      ups.rates(shipping_data, function(error, resp) {
        if(error) {
          return console.log(error);
        }
        callback(false, {shipments: resp.RatedShipment});
        // console.log(util.inspect(res, {depth: null}));
        // should return an array of rates
      });

    },

    function(callback) {
      ups.rates(shipping_data, function(error, resp) {
        if(error) {
          return console.log(error);
        }
        callback(false, {shipments: resp.RatedShipment});
        // console.log(util.inspect(res, {depth: null}));
        // should return an array of rates
      });

    },

    function(callback) {
      ups.rates(shipping_data, function(error, resp) {
        if(error) {
          return console.log(error);
        }
        callback(false, {shipments: resp.RatedShipment});
        // console.log(util.inspect(data, {depth: null}));
        // should return an array of rates
      });
    },
  ],
  /*
   * Collate results
   */
  function(err, results) {
    if(err) {
      console.log(err);
      res.send(500,"Server Error");
      return;
    }
    // console.log(util.inspect(results, {depth: null}));

    res.render('index', {title: 'Shipments', results: results, service_codes: ups.service_codes} );
  });

};
