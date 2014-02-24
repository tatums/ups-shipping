
var ShipConfirm = require('./node_modules/ups_node/lib/shipConfirm');
var confirmShipment = new ShipConfirm('1CCC22AAA9A9C1F3', 'tatumszymczak', 'CHANGEME');
var result = {};
confirmShipment.useSandbox(true);
confirmShipment.setJsonResponse(false);


confirmShipment.makeRequest({
  validate: "nonvalidate",
  shipment: {
      description: "Shipment to Philippines",
      shipper: {
        name: "Metro Inc Limited",
        attentionName: "John Doe",
        phone: "12311",
        shipperNumber: "E8F100"
        phone: "1212311",
        address: {
          address1: "Flat 9999",
          address2: "Sun West Center Mall",
          address3: "25 West Yip Street",
          city: "Miami",
          state: "HK",
          country: "HK",
          zip: "75093"
        }
    },
    shipTo: {
        companyName: "Company Name",
        attentionName: "Pedro Calunsod",
        phone: "12321341",
        address : {
          address1: "999 Warrior St.",
          address2: "Maria Cons. Subd. Shiper",
          address3: "Stage, Valley",
          city: "Stage City",
          state: "PH",
          country: "PH",
          zip: "2010"
        }
    },
    payment : {
      accountNumber : "1CCC22AAA9A9C1F3"
    },
    service : {
      code : "expedited"
    },
    package : [
      {
        code : "02",
        weight : "1"
      },
      {
        code : "02",
        weight : "1"
      }
     ]
    }
 });
