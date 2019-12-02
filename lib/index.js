const fs = require('fs');
const zones = require('./zones');

function getVtimezone(timezone) {
  if (zones[timezone] && fs.existsSync(`./zones/${zones[timezone]}`)) {
    const file = fs.readFileSync(`./zones/${zones[timezone]}`);
    return file.toString();
  }

  return null;
}

module.exports.getVtimezone = getVtimezone;
