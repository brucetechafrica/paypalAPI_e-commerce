// Création d'un paiement via l'API de PayPal

const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', // ou 'live' pour l'environnement de production
  'client_id': 'CLIENT_ID',
  'client_secret': 'CLIENT_SECRET'
});

let create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "https://example.com/success",
        "cancel_url": "https://example.com/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": "10.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "10.00"
        },
        "description": "Description de l'achat"
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
  if (error) {
    throw error;
  } else {
    for(let i = 0;i < payment.links.length;i++){
      if(payment.links[i].rel === 'approval_url'){
        res.redirect(payment.links[i].href);
      }
    }
  }
});
