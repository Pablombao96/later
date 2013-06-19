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
if (! _$jscoverage['date/nextrollover.js']) {
  _$jscoverage['date/nextrollover.js'] = [];
  _$jscoverage['date/nextrollover.js'][14] = 0;
  _$jscoverage['date/nextrollover.js'][15] = 0;
  _$jscoverage['date/nextrollover.js'][18] = 0;
}
_$jscoverage['date/nextrollover.js'].source = ["/**","* Next Rollover","* (c) 2013 Bill, BunKat LLC.","*","* Determines if a value will cause a particualr constraint to rollover to the","* next largest time period. Used primarily when a constraint has a","* variable extent.","*","* Later is freely distributable under the MIT license.","* For all details and documentation:","*     http://github.com/bunkat/later","*/","","later.date.nextRollover = function(d, val, constraint, period) {","  var cur = constraint.val(d),","      max = constraint.extent(d)[1];","","  return (((val || max) &lt;= cur) || val &gt; max) ?","            new Date(period.end(d).getTime() + later.SEC) :","            period.start(d);","};"];
_$jscoverage['date/nextrollover.js'][14]++;
later.date.nextRollover = (function (d, val, constraint, period) {
  _$jscoverage['date/nextrollover.js'][15]++;
  var cur = constraint.val(d), max = constraint.extent(d)[1];
  _$jscoverage['date/nextrollover.js'][18]++;
  return ((((val || max) <= cur) || (val > max))? new Date((period.end(d).getTime() + later.SEC)): period.start(d));
});
