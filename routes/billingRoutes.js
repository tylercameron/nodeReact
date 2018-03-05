const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = App => {
    app.post('/api/stripe', (req, res) => {
        
    });
};