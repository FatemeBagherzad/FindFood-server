const fs = require('fs');
const uniqid = require('uniqid');
const path = require('path');

const menu = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/data.json`)
);

exports.getMenu = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json(menu);
};
