const fs = require('fs');
const zones = require('./zones');

function getVtimezone(timezone) {
  if (zones[timezone] && fs.existsSync(`./zones/${zones[timezone]}`)) {
    const file = fs.readFileSync(`./zones/${zones[timezone]}`);
    const fileArray = file.toString().split('\r\n');

    const start = fileArray.findIndex(el => el === 'BEGIN:VTIMEZONE');
    const end = fileArray.findIndex(el => el === 'END:VTIMEZONE');

    const vtimezone = fileArray.slice(start, end + 1);

    return vtimezone.join('\r\n');
  }

  return null;
}

module.exports.getVtimezone = getVtimezone;

// console.log(getVtimezone('Europe/Bratislava'));
