# paypalAPI_e-commerce

Ce code permet de créer un paiement via l'API de PayPal en utilisant le module Node.js paypal-rest-sdk. Le paiement est créé avec un objet JSON create_payment_json qui contient des informations sur le paiement, telles que le montant total, le nom de l'article, la devise, etc.

Voici une explication de chaque champ de l'objet JSON :

"intent": spécifie l'intention du paiement. Dans ce cas, "sale" indique que le paiement est final.

"payer": spécifie la méthode de paiement. Dans ce cas, "paypal" indique que le paiement est effectué via un compte PayPal.

"redirect_urls": spécifie les URL vers lesquelles les utilisateurs seront redirigés après avoir effectué ou annulé le paiement.

Une fois l'objet JSON create_payment_json créé, la méthode paypal.payment.create() est appelée pour créer le paiement. Si la création du paiement est réussie, le code redirigera l'utilisateur vers l'URL d'approbation du paiement.

avant d'utiliser ce code sur un site e-commerce en production, il est important de tester soigneusement le processus de paiement en mode sandbox pour s'assurer que tout fonctionne correctement. Vous devez également remplacer les identifiants de client client_id et client_secret par ceux fournis par votre compte PayPal en mode live.

#bruce_tech
