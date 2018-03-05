const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 2592000000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
require('./routes/billingRoutes')(app); // same as above line and line 10 together

const PORT = process.env.PORT || 5000;
app.listen(PORT);