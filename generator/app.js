const glob = require('glob');
const fs = require('fs');

const files = glob.sync('../lib/zones/**/*.ics');
const zones = {};

for (const zone of files) {
  const name = zone.replace('../lib/zones/', '').replace('.ics', '');

  zones[name] = `${name}.ics`;

  if (name.match(/^Etc\/*/)) {
    const match = name.match(/^Etc\/(.*)/);
    zones[match[1]] = zones[name];
  }
}

zones['Dateline Standard Time'] = zones['GMT-12'];
zones['Samoa Standard Time'] = zones['GMT-11'];
zones['Hawaiian Standard Time'] = zones['GMT-10'];
zones['Alaskan Standard Time'] = zones['GMT-9'];
zones['Pacific Standard Time'] = zones['GMT-8'];
zones['Mountain Standard Time'] = zones['GMT-7'];
zones['Mexico Standard Time 2'] = zones['GMT-7'];
zones['US Mountain Standard Time'] = zones['GMT-7'];
zones['Central Standard Time'] = zones['GMT-6'];
zones['Canada Central Standard Time'] = zones['GMT-6'];
zones['Mexico Standard Time'] = zones['GMT-6'];
zones['Central America Standard Time'] = zones['GMT-6'];
zones['Eastern Standard Time'] = zones['GMT-5'];
zones['US Eastern Standard Time'] = zones['GMT-5'];
zones['SA Pacific Standard Time'] = zones['GMT-5'];
zones['Atlantic Standard Time'] = zones['GMT-4'];
zones['SA Western Standard Time'] = zones['GMT-4'];
zones['Pacific SA Standard Time'] = zones['GMT-4'];
zones['E South America Standard Time'] = zones['GMT-3'];
zones['SA Eastern Standard Time'] = zones['GMT-3'];
zones['Greenland Standard Time'] = zones['GMT-3'];
zones['Mid-Atlantic Standard Time'] = zones['GMT-2'];
zones['Azores Standard Time'] = zones['GMT-1'];
zones['Cape Verde Standard Time'] = zones['GMT-1'];
zones['GMT Standard Time'] = zones.GMT;
zones['Greenwich Standard Time'] = zones.Greenwich;
zones['Central Europe Standard Time'] = zones['GMT+1'];
zones['Central European Standard Time'] = zones['GMT+1'];
zones['Romance Standard Time'] = zones['GMT+1'];
zones['W Europe Standard Time'] = zones['GMT+1'];
zones['W Central Africa Standard Time'] = zones['GMT+1'];
zones['E Europe Standard Time'] = zones['GMT+2'];
zones['Egypt Standard Time'] = zones['GMT+2'];
zones['FLE Standard Time'] = zones['GMT+2'];
zones['GTB Standard Time'] = zones['GMT+2'];
zones['Israel Standard Time'] = zones['GMT+2'];
zones['South Africa Standard Time'] = zones['GMT+2'];
zones['Russian Standard Time'] = zones['GMT+3'];
zones['Arab Standard Time'] = zones['GMT+3'];
zones['E Africa Standard Time'] = zones['GMT+3'];
zones['Arabic Standard Time'] = zones['GMT+3'];
zones['Iran Standard Time'] = zones['GMT+4'];
zones['Arabian Standard Time'] = zones['GMT+4'];
zones['Caucasus Standard Time'] = zones['GMT+4'];
zones['Ekaterinburg Standard Time'] = zones['GMT+5'];
zones['West Asia Standard Time'] = zones['GMT+5'];
zones['Central Asia Standard Time'] = zones['GMT+6'];
zones['Sri Lanka Standard Time'] = zones['GMT+6'];
zones['N Central Asia Standard Time'] = zones['GMT+6'];
zones['Myanmar Standard Time'] = zones['Myanmar Time'];
zones['SE Asia Standard Time'] = zones['GMT+7'];
zones['North Asia Standard Time'] = zones['GMT+7'];
zones['China Standard Time'] = zones['GMT+8'];
zones['Singapore Standard Time'] = zones['GMT+8'];
zones['Taipei Standard Time'] = zones['GMT+8'];
zones['W Australia Standard Time'] = zones['GMT+8'];
zones['North Asia East Standard Time'] = zones['GMT+8'];
zones['Korea Standard Time'] = zones['GMT+9'];
zones['Tokyo Standard Time'] = zones['GMT+9'];
zones['Yakutsk Standard Time'] = zones['GMT+9'];
zones['AUS Central Standard Time'] = zones['Australian Central Standard Time'];
zones['Cen Australia Standard Time'] = zones['Australian Central Standard Time'];
zones['AUS Eastern Standard Time'] = zones['GMT+10'];
zones['E Australia Standard Time'] = zones['GMT+10'];
zones['Tasmania Standard Time'] = zones['GMT+10'];
zones['Vladivostok Standard Time'] = zones['GMT+10'];
zones['West Pacific Standard Time'] = zones['GMT+10'];
zones['Central Pacific Standard Time'] = zones['GMT+11'];
zones['Fiji Islands Standard Time'] = zones['GMT+12'];
zones['New Zealand Standard Time'] = zones['GMT+12'];
zones['Tonga Standard Time'] = zones['GMT+13'];

fs.writeFileSync('../lib/zones.js', 'module.exports = {\n');

// eslint-disable-next-line guard-for-in
for (const index in zones) {
  fs.writeFileSync('../lib/zones.js', `  '${index}': '${zones[index]}',\n`, {flag: 'a'});
}

fs.writeFileSync('../lib/zones.js', '};\n', {flag: 'a'});
