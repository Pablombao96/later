/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['date/timezone.js']) {
  _$jscoverage['date/timezone.js'] = [];
  _$jscoverage['date/timezone.js'][13] = 0;
  _$jscoverage['date/timezone.js'][16] = 0;
  _$jscoverage['date/timezone.js'][17] = 0;
  _$jscoverage['date/timezone.js'][18] = 0;
  _$jscoverage['date/timezone.js'][21] = 0;
  _$jscoverage['date/timezone.js'][24] = 0;
  _$jscoverage['date/timezone.js'][25] = 0;
  _$jscoverage['date/timezone.js'][26] = 0;
  _$jscoverage['date/timezone.js'][27] = 0;
  _$jscoverage['date/timezone.js'][28] = 0;
  _$jscoverage['date/timezone.js'][29] = 0;
  _$jscoverage['date/timezone.js'][30] = 0;
  _$jscoverage['date/timezone.js'][33] = 0;
  _$jscoverage['date/timezone.js'][37] = 0;
  _$jscoverage['date/timezone.js'][38] = 0;
  _$jscoverage['date/timezone.js'][41] = 0;
}
_$jscoverage['date/timezone.js'].source = ["/**","* Timezone","* (c) 2013 Bill, BunKat LLC.","*","* Configures helper functions to switch between useing local time and UTC. Later","* uses UTC time by default.","*","* Later is freely distributable under the MIT license.","* For all details and documentation:","*     http://github.com/bunkat/later","*/","","later.date.timezone = function(useLocalTime) {","","  // configure the date builder used to create new dates in the right timezone","  later.date.build = useLocalTime ?","    function(Y, M, D, h, m, s) { return new Date(Y, M, D, h, m, s); } :","    function(Y, M, D, h, m, s) { return new Date(Date.UTC(Y, M, D, h, m, s)); };","","  // configure the accessor methods","  var get = useLocalTime ? 'get' : 'getUTC',","      d = Date.prototype;","","  later.date.getYear = d[get + 'FullYear'];","  later.date.getMonth = d[get + 'Month'];","  later.date.getDate = d[get + 'Date'];","  later.date.getDay = d[get + 'Day'];","  later.date.getHour = d[get + 'Hours'];","  later.date.getMin = d[get + 'Minutes'];","  later.date.getSec = d[get + 'Seconds'];","","  // set the isUTC flag","  later.date.isUTC = !useLocalTime;","};","","// friendly names for available timezones","later.date.UTC = function() { later.date.timezone(false); };","later.date.localTime = function() { later.date.timezone(true); };","","// use UTC by default","later.date.UTC();"];
_$jscoverage['date/timezone.js'][13]++;
later.date.timezone = (function (useLocalTime) {
  _$jscoverage['date/timezone.js'][16]++;
  later.date.build = (useLocalTime? (function (Y, M, D, h, m, s) {
  _$jscoverage['date/timezone.js'][17]++;
  return new Date(Y, M, D, h, m, s);
}): (function (Y, M, D, h, m, s) {
  _$jscoverage['date/timezone.js'][18]++;
  return new Date(Date.UTC(Y, M, D, h, m, s));
}));
  _$jscoverage['date/timezone.js'][21]++;
  var get = (useLocalTime? "get": "getUTC"), d = Date.prototype;
  _$jscoverage['date/timezone.js'][24]++;
  later.date.getYear = d[(get + "FullYear")];
  _$jscoverage['date/timezone.js'][25]++;
  later.date.getMonth = d[(get + "Month")];
  _$jscoverage['date/timezone.js'][26]++;
  later.date.getDate = d[(get + "Date")];
  _$jscoverage['date/timezone.js'][27]++;
  later.date.getDay = d[(get + "Day")];
  _$jscoverage['date/timezone.js'][28]++;
  later.date.getHour = d[(get + "Hours")];
  _$jscoverage['date/timezone.js'][29]++;
  later.date.getMin = d[(get + "Minutes")];
  _$jscoverage['date/timezone.js'][30]++;
  later.date.getSec = d[(get + "Seconds")];
  _$jscoverage['date/timezone.js'][33]++;
  later.date.isUTC = (! useLocalTime);
});
_$jscoverage['date/timezone.js'][37]++;
later.date.UTC = (function () {
  _$jscoverage['date/timezone.js'][37]++;
  later.date.timezone(false);
});
_$jscoverage['date/timezone.js'][38]++;
later.date.localTime = (function () {
  _$jscoverage['date/timezone.js'][38]++;
  later.date.timezone(true);
});
_$jscoverage['date/timezone.js'][41]++;
later.date.UTC();
