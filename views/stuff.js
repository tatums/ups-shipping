'use strict';

var upsAPI = require('./node_modules/shipping-ups/lib/index');
var util = require('util');
var fs = require('fs');

var config = require('yaml-config');
var settings = config.readConfig('./config/app.yaml')

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

var shipments = {};
ups.rates(shipping_data, function(err, res) {
  if(err) {
    return console.log(err);
  }
  shipments = res.RatedShipment
  console.log(util.inspect(shipments, {depth: null}));
  // should return an array of rates
});
