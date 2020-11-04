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

function getVtimezoneComponent(timezone) {
  const tzPath = path.join(__dirname, 'zones', zones[timezone] || '');
  if (timezone in zones && fs.existsSync(tzPath)) {
    const file = fs.readFileSync(tzPath);
    let content = file.toString();

    content = content.slice(content.indexOf('BEGIN:VTIMEZONE'));
    content = content.slice(0, content.indexOf('END:VCALENDAR'));

    return content;
  }

  return null;
}

module.exports = {
  getVtimezone,
  getVtimezoneComponent
};
