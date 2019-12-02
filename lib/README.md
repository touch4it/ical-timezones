#   RFC 5545 VTIMEZONE iCalendar component generator

Library to generate VTIMEZONE iCalendar component

##  Usage

### Installation

```bash
npm install @touch4it/ical-timezones
```

```javascript
const tz = require('@touch4it/ical-timezones');
```

### Generate VTIMEZONE component

```javascript
const vtimezone = tz.getVtimezone('Europe/Bratislava');
```

##  Data sources

https://github.com/benfortuna/tzurl

https://github.com/champtar/z-push/blob/master/src/lib/utils/timezoneutil.php

