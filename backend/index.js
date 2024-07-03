const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('./config');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User')
const Order = require('./models/Order')




///////////////////////////////////////  MIDDLEWARE SECTION  ///////////////////////////////
app.use(cors());
const bodyParser = require('body-parser');




// parse application/json
app.use(bodyParser.json());

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}


///////////////////////////////////// PASSPORT middleware section //////////////////////////
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


////////////////////////////////////////// Passport session section //////////////////////
passport.use(new LocalStrategy({ usernameField: 'email' },
  async function (email, password, done) {
    const user = await User.findOne({ email: email });
    if (!user) {
      return done(null, false, { message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return done(null, false, { message: 'Invalid email or password' });
    }
    return done(null, user);
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

/////////////////////////////////////// API's SECTION ////////////////////////////////////

app.get('/home', isAuthenticated, function (req, res) {
  res.json({ user: req.user });
  console.log(req.user);
});



app.post('/login', passport.authenticate('local'), (req, res) => {
  req.login(req.user, function(err) {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Server Error' });
    }

    // Return the user object as part of the response
    return res.json(req.user);
  });
});



app.post('/register', async (req, resp) => {

  // console.log(req.body);

  try {
    const hashed = await bcrypt.hash(req.body.password, 10);
    //const userData = { username: req.body.username, password: hashed };
    const userData = {
      username: req.body.username,
      password: hashed,
      fullname: req.body.fullname,
      email: req.body.email,
    };
    console.log(userData);
    const fluffy = new User(userData);
    await fluffy.save();
    //resp.render('home', { user });
    resp.send("Registration successful")
  } catch (err) {

    console.log("User already exists!");
    resp.send("Enter valid Details!")
    console.log(err);
  }
});

/////////////////////////////////////////ORDER AND RETRIEV DATA //////////////////////////////////
app.post('/order', async (req, res) => {
 
  try {
    console.log('Received request body:', req.body);
    const {customerName,customerEmail,items} = req.body;
    console.log(customerName);
    console.log(items);
    // Find an existing order for the provided email
    let existingOrder = await Order.findOne({customerEmail});

    if (!existingOrder) {
      // If no order exists, create a new order document
      existingOrder = new Order({
        customerName,
        customerEmail,
       // items: [{customerName: customerName, ...items}],
        items:[...items]
      });
    } 
    else {
        // If an order exists, push the new items
       // existingOrder.items.push({customerName: customerName, ...items});
       existingOrder.items.push(...items);
    }

    // Save the order document
    await existingOrder.save();
    res.json({ success: true });
  } 
  catch (error) {
    console.log("error in backend");
    console.error('Error creating/updating order:', error);
    res.status(500).json({ error: 'Failed to create/update order' });
  }
});

// Route for retrieving orders for a specific user
app.post('/myOrder', async (req, res) => {
  try {
    const { customerEmail } = req.body;

    // Find orders for the provided email
    const userOrders = await Order.find({ customerEmail});

    if (userOrders.length === 0) {
      res.status(404).json({ message: 'No orders found for the user' });
    } else {
      res.status(200).json({ orderData: userOrders });
    }
  } catch (error) {
    console.error('Error retrieving orders:', error);
    res.status(500).json({ error: 'Failed to retrieve orders' });
  }
});



//////////////////////////////////////////////// APi's initialization /////////////////////////////

app.listen(5000, () => {
  console.log('Server started on port 5000');
});