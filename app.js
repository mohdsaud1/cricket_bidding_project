// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { log } = require('console');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Add this line for parsing form data
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error('MONGODB_URI environment variable not set');
}

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// Check connection
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});
db.on('error', (err) => {
  console.error(err);
});
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



// // Define a schema and model
// const Schema = mongoose.Schema;
// const DataSchema = new Schema({
//   name:String,
//   age:Number,
//   batsman:Boolean,
//   bowler:Boolean,
//   wicketKeeper:Boolean,
//   allRounder:Boolean,
//   mobileNo:Number
// });

// const DataModel = mongoose.model('Data', DataSchema);


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
//   });

//   app.post('/submit-data', async (req, res) => {
//     const { name, age, batsman, bowler, wicketKeeper, allRounder, mobileNo} = req.body;
//     const isBatsman = !!batsman;
//     const isBowler = !!bowler;
//     const isWicketKeeper = !!wicketKeeper;
//     const isAllRounder = !!allRounder;
//     // console.log(name);
//     // console.log(age);
//     // console.log(isBatsman);
//     // console.log(isBowler);
//     // console.log(isWicketKeeper);
//     // console.log(isAllRounder);
//     // console.log(mobileNo);
//    // const isActive = !!active; // Convert to boolean
  
//     try {
//       const newData = new DataModel({ name, age, batsman:isBatsman, bowler:isBowler, wicketKeeper:isWicketKeeper, allRounder:isAllRounder, mobileNo});
//       await newData.save();
//       console.log(newData);
//       res.send('Data saved successfully');
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   });

// // Fetch all data route
// app.get('/data', async (req, res) => {
//   try {
//     const data = await DataModel.find();
//     res.json(data);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.get('/count-data', async (req, res) => {
//     try {
//       const count = await DataModel.countDocuments();
//       res.render('index', { count });
//       //res.json({ count });
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   });


