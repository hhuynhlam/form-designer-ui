const partner1 = require('../../_mock/partner1.json');

exports.partner1 = (req, res) => {
  res.status(200).json(partner1);
};
