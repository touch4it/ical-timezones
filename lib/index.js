const fs = require('fs');
const path = require('path');
const zones = require('./zones.js');

const timezoneFormat = /^UTC((\+1[34]:00)|(?:[+-](?:1[0-2]|0\d):00)|(?:[+-]0[39]:30)|(?:\+0[456]:30)|(?:\+10:30)|(?:\+0[58]:45)|(?:\+12:45))$/;

function getVtimezone(timezone) {
  const zoneFile = zones[timezone];
  if (zoneFile) {
    const tzPath = path.join(__dirname, 'zones', zoneFile);
    try {
      return fs.readFileSync(tzPath, 'utf8');
    } catch {}
  }

  return null;
}

function extractVTZ(content) {
  return content.slice(
    content.indexOf('BEGIN:VTIMEZONE'),
    content.indexOf('END:VCALENDAR'),
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
    return fs.promises.readFile(tzPath, 'utf8');
  }

  return Promise.reject(new Error('Time zone does not exist'));
}

async function getVtimezoneComponentAsync(timezone) {
  const ics = await getVtimezoneAsync(timezone);
  return extractVTZ(ics);
}

function timezoneExists(timezone) {
  if (zones[timezone]) {
    return true;
  }

  return timezoneFormat.test(timezone);
}

module.exports = {
  getVtimezone,
  getVtimezoneComponent,
  getVtimezoneAsync,
  getVtimezoneComponentAsync,
  timezoneExists,
};
