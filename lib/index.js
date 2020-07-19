const fs = require('fs');
const path = require('path');
const zones = require('./zones');

function getVtimezone(timezone) {
  const tzPath = path.join(__dirname, 'zones', zones[timezone] || '');
  if (timezone in zones && fs.existsSync(tzPath)) {
    const file = fs.readFileSync(tzPath);
    return file.toString();
  }

  return null;
}

module.exports.getVtimezone = getVtimezone;
