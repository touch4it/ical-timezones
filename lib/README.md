# VTIMEZONE iCalendar component generator

[![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/touch4it/ical-timezones/blob/master/lib/LICENSE.md)
[![npm version](https://img.shields.io/npm/v/@touch4it/ical-timezones)](https://www.npmjs.com/package/@touch4it/ical-timezones)
[![node version](https://img.shields.io/node/v/@touch4it/ical-timezones)](https://www.npmjs.com/package/@touch4it/ical-timezones)
[![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@touch4it/ical-timezones)](https://www.npmjs.com/package/@touch4it/ical-timezones)
[![last commit](https://img.shields.io/github/last-commit/touch4it/ical-timezones)](https://github.com/touch4it/ical-timezones)

Library to generate RFC 5545 VTIMEZONE iCalendar component

## Usage

### Installation

```bash
npm install @touch4it/ical-timezones
```

```javascript
const tz = require('@touch4it/ical-timezones');
```

### Generate VTIMEZONE calendar object

```javascript
const vtimezone = tz.getVtimezone('Europe/Bratislava');
```

or

```javascript
const vtimezone = await tz.getVtimezoneAsync('Europe/Bratislava');
```

Generated output

```ical
BEGIN:VCALENDAR
PRODID:-//tzurl.org//NONSGML Olson 2018g-rearguard//EN
VERSION:2.0
BEGIN:VTIMEZONE
TZID:Europe/Bratislava
TZURL:http://tzurl.org/zoneinfo-outlook/Europe/Bratislava
X-LIC-LOCATION:Europe/Bratislava
BEGIN:DAYLIGHT
TZOFFSETFROM:+0100
TZOFFSETTO:+0200
TZNAME:CEST
DTSTART:19700329T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:+0200
TZOFFSETTO:+0100
TZNAME:CET
DTSTART:19701025T030000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE
END:VCALENDAR
```

### Generate VTIMEZONE calendar component

```javascript
const vtimezone = tz.getVtimezoneComponent('Europe/Bratislava');
```

or

```javascript
const vtimezone = await tz.getVtimezoneComponentAsync('Europe/Bratislava');
```

Generated output

```ical
BEGIN:VTIMEZONE
TZID:Europe/Bratislava
TZURL:http://tzurl.org/zoneinfo-outlook/Europe/Bratislava
X-LIC-LOCATION:Europe/Bratislava
BEGIN:DAYLIGHT
TZOFFSETFROM:+0100
TZOFFSETTO:+0200
TZNAME:CEST
DTSTART:19700329T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:+0200
TZOFFSETTO:+0100
TZNAME:CET
DTSTART:19701025T030000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE
```

## Data sources

https://github.com/benfortuna/tzurl

https://github.com/champtar/z-push/blob/master/src/lib/utils/timezoneutil.php

http://www.healthstream.com/hlchelp/Administrator/Classes/HLC_Time_Zone_Abbreviations.htm
