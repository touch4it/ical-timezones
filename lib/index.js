const fs = require('fs');
const path = require('path');
const zones = require('./zones');

function getVtimezone(timezone) {
  const zoneFile = zones[timezone];
  if (zoneFile) {
    const tzPath = path.join(__dirname, 'zones', zoneFile);
    try {
      return fs.readFileSync(tzPath, 'utf8');
    } catch (_) {}
  }
  return null;
}

function extractVTZ(content) {
  return content.substring(
    content.indexOf('BEGIN:VTIMEZONE'),
    content.indexOf('END:VCALENDAR')
  );
}

function getVtimezoneComponent(timezone) {
  const ics = getVtimezone(timezone);
  return ics && extractVTZ(ics);
}

function getVtimezoneAsync(timezone) {
  const zoneFile = zones[timezone];
  if (zoneFile) {
    const tzPath = path.join(__dirname, 'zones', zoneFile);
    return new Promise((resolve, reject) => {
      fs.readFile(tzPath, 'utf8', (error, content) => {
        if (error) {
          reject(error);
        } else {
          resolve(content);
        }
      });
    });
  }
  return Promise.reject(new Error('Time zone does not exist'));
}

async function getVtimezoneComponentAsync(timezone) {
  const ics = await getVtimezoneAsync(timezone);
  return extractVTZ(ics);
}

module.exports = {
  getVtimezone,
  getVtimezoneComponent,
  getVtimezoneAsync,
  getVtimezoneComponentAsync,
};
