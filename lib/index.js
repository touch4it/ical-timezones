const fs = require('fs');
const zones = require('./zones');

function getVtimezone(timezone) {
  if (timezone in zones && fs.existsSync(`${__dirname}/zones/${zones[timezone]}`)) {
    const file = fs.readFileSync(`${__dirname}/zones/${zones[timezone]}`);
    return file.toString();
  }

  return null;
}

module.exports.getVtimezone = getVtimezone;
