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
if (! _$jscoverage['constraint/time.js']) {
  _$jscoverage['constraint/time.js'] = [];
  _$jscoverage['constraint/time.js'][12] = 0;
  _$jscoverage['constraint/time.js'][31] = 0;
  _$jscoverage['constraint/time.js'][42] = 0;
  _$jscoverage['constraint/time.js'][49] = 0;
  _$jscoverage['constraint/time.js'][58] = 0;
  _$jscoverage['constraint/time.js'][67] = 0;
  _$jscoverage['constraint/time.js'][77] = 0;
  _$jscoverage['constraint/time.js'][79] = 0;
  _$jscoverage['constraint/time.js'][88] = 0;
  _$jscoverage['constraint/time.js'][89] = 0;
  _$jscoverage['constraint/time.js'][98] = 0;
  _$jscoverage['constraint/time.js'][108] = 0;
  _$jscoverage['constraint/time.js'][110] = 0;
}
_$jscoverage['constraint/time.js'].source = ["/**","* Time Constraint (dy)","* (c) 2013 Bill, BunKat LLC.","*","* Definition for a time of day constraint type. Stored as number of seconds","* since midnight to simplify calculations.","*","* Later is freely distributable under the MIT license.","* For all details and documentation:","*     http://github.com/bunkat/later","*/","later.time = later.t = {","","  /**","  * The name of this constraint.","  */","  name: 'time',","","  /**","  * The rough amount of seconds between start and end for this constraint.","  * (doesn't need to be exact)","  */","  range: 1,","","  /**","  * The time value of the specified date.","  *","  * @param {Date} d: The date to calculate the value of","  */","  val: function(d) {","    return d.t || (d.t =","      (later.h.val(d) * 3600) + (later.m.val(d) * 60) + (later.s.val(d)));","  },","","  /**","  * Returns true if the val is valid for the date specified.","  *","  * @param {Date} d: The date to check the value on","  * @param {Integer} val: The value to validate","  */","  isValid: function(d, val) {","    return later.t.val(d) === val;","  },","","  /**","  * The minimum and maximum valid time values.","  */","  extent: function() {","    return [0, 86399];","  },","","  /**","  * Returns the specified date.","  *","  * @param {Date} d: The specified date","  */","  start: function(d) {","    return d;","  },","","  /**","  * Returns the specified date.","  *","  * @param {Date} d: The specified date","  */","  end: function(d) {","    return d;","  },","","  /**","  * Returns the start of the next instance of the time value indicated.","  *","  * @param {Date} d: The starting date","  * @param {int} val: The desired value, must be within extent","  */","  next: function(d, val) {","    val = val &gt; 86399 ? 0 : val;","","    var next = later.date.next(","      later.Y.val(d),","      later.M.val(d),","      later.D.val(d) + (val &lt;= later.t.val(d) ? 1 : 0),","      0,","      0,","      val);","","    // correct for passing over a daylight savings boundry","    if(!later.date.isUTC &amp;&amp; next.getTime() &lt; d.getTime()) {","      next = later.date.next(","        later.Y.val(next),","        later.M.val(next),","        later.D.val(next),","        later.h.val(next),","        later.m.val(next),","        val + 7200);","    }","","    return next;","  },","","  /**","  * Returns the end of the previous instance of the time value indicated.","  *","  * @param {Date} d: The starting date","  * @param {int} val: The desired value, must be within extent","  */","  prev: function(d, val) {","    val = val &gt; 86399 ? 86399 : val;","","    return later.date.next(","      later.Y.val(d),","      later.M.val(d),","      later.D.val(d) + (val &gt;= later.t.val(d) ? -1 : 0),","      0,","      0,","      val);","  }","","};"];
_$jscoverage['constraint/time.js'][12]++;
later.time = (later.t = {name: "time", range: 1, val: (function (d) {
  _$jscoverage['constraint/time.js'][31]++;
  return (d.t || (d.t = ((later.h.val(d) * 3600) + (later.m.val(d) * 60) + later.s.val(d))));
}), isValid: (function (d, val) {
  _$jscoverage['constraint/time.js'][42]++;
  return (later.t.val(d) === val);
}), extent: (function () {
  _$jscoverage['constraint/time.js'][49]++;
  return [0, 86399];
}), start: (function (d) {
  _$jscoverage['constraint/time.js'][58]++;
  return d;
}), end: (function (d) {
  _$jscoverage['constraint/time.js'][67]++;
  return d;
}), next: (function (d, val) {
  _$jscoverage['constraint/time.js'][77]++;
  val = ((val > 86399)? 0: val);
  _$jscoverage['constraint/time.js'][79]++;
  var next = later.date.next(later.Y.val(d), later.M.val(d), (later.D.val(d) + ((val <= later.t.val(d))? 1: 0)), 0, 0, val);
  _$jscoverage['constraint/time.js'][88]++;
  if (((! later.date.isUTC) && (next.getTime() < d.getTime()))) {
    _$jscoverage['constraint/time.js'][89]++;
    next = later.date.next(later.Y.val(next), later.M.val(next), later.D.val(next), later.h.val(next), later.m.val(next), (val + 7200));
  }
  _$jscoverage['constraint/time.js'][98]++;
  return next;
}), prev: (function (d, val) {
  _$jscoverage['constraint/time.js'][108]++;
  val = ((val > 86399)? 86399: val);
  _$jscoverage['constraint/time.js'][110]++;
  return later.date.next(later.Y.val(d), later.M.val(d), (later.D.val(d) + ((val >= later.t.val(d))? -1: 0)), 0, 0, val);
})});
