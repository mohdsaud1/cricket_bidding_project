const DataModel = require('../models/dataModel');

exports.getAllData = async () => {
  return await DataModel.find();
};

exports.countData = async () => {
  return await DataModel.countDocuments();
};

// exports.getAllData = async () => {
//   return await DataModel.find();
// };

exports.saveData = async (data) => {
  const newData = new DataModel(data);
  await newData.save();
};
