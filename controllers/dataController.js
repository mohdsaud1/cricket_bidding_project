const dataService = require('../services/dataService');

exports.getHomePage = async (req, res) => {
  try {
    const count = await dataService.countData();
    res.render('index', { count });
  } catch (err) {
    res.status(500).send(err);
  }
};

// exports.getAllData = async (req, res) => {
//   try {
//     const data = await dataService.getAllData();
//     res.json(data);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

exports.submitData = async (req, res) => {
    const { name, age, batsman, bowler, wicketKeeper, allRounder, mobileNo, amt} = req.body;
    const isBatsman = !!batsman;
    const isBowler = !!bowler;
    const isWicketKeeper = !!wicketKeeper;
    const isAllRounder = !!allRounder;
  
    try {
      await dataService.saveData({ name, age, batsman:isBatsman, bowler:isBowler, wicketKeeper:isWicketKeeper, allRounder:isAllRounder, mobileNo, amt});
      res.send('Data saved successfully');
    } catch (err) {
      res.status(500).send(err);
    }
  };

  exports.getAllData = async (req, res) => {
    try {
      const data = await dataService.getAllData();
      res.render('cndct', { data });
    } catch (err) {
      res.status(500).send(err);
    }
  };