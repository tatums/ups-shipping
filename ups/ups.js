



var addressValidation = require('./node_modules/ups_node/lib/addressValidation');
var confirmShipment = new ShipConfirm('1CCC22AAA9A9C1F3', 'tatumszymczak', 'Pa88word');





var addressValidation = require('./node_modules/ups_node/lib/addressValidation');
var address = new addressValidation('1CCC22AAA9A9C1F3', 'tatumszymczak', 'Pa88word');
var result = {}


address.useSandbox(true);
address.setJsonResponse(true);

address.makeRequest({
        customerContext : "Customer Data",
        city : "Chicago",
        stateProvinceCode: "IL"
}, function(err, data) {
  if (err) {
    result.error = err;
  }

  if (data) {
    result.data = data;
  }
});





var rating = require('./node_modules/ups_node/lib/rating');
var rate = new rating('1CCC22AAA9A9C1F3', 'tatumszymczak', 'Pa88word');
var result = {}

rate.useSandbox(true);
rate.setJsonResponse(true);


rate.makeRequest({
    customerContext: "Rating and Service",
    pickUpType: {
        code: "07",
        description: "Rate"
    },
    shipment: {
        description: "Rate Description",
        name: "Name",
        phoneNumber: "1234567890",
        shipperNumber: "Ship Number",
        shipper: {
            address: {
                addressLine: "Ashland Studios",
                city: "Chicago",
                StateProvinceCode: "IL",
                PostalCode: "60607",
                countryCode: "US"
            }
        },
        shipTo: {
            companyName: "Company Name",
            phoneNumber: "1234567890",
            address: {
                addressLine: "Address Line",
                city: "Boca Raton",
                stateProvinceCode: "FL",
                postalCode: "33434",
                countryCode: "US"
            }
        },
        shipFrom: {
            companyName: "Ashland Studios",
            attentionName: "Tatum",
            phoneNumber: "1234567890",
            faxNumber: "1234567890",
            address: {
                addressLine: "2134 W Taylor ST",
                city: "Chicago",
                stateProvinceCode: "IL",
                postalCode: "60607",
                countryCode: "US"
            }
        },
        service: {
            code: "03"
        },
        paymentInformation: {
            accountNumber: "Ship Number"
        },
        package: [
            {
                code: "02",
                weight: "1"
            },
            {
                code: "02",
                weight: "1"
            }
        ],
        schedule: {
            pickUpDay: "02",
            method: "02"
        }
    }
}, function(err, data) {
  if (err) {
    result.error = err;
  }

  if (data) {
    result.data = data;
  }
});
