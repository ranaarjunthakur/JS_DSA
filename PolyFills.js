// What is Polyfill? (Simple Definition)
// 👉 Polyfill = पुराने browser में missing JavaScript feature को खुद से बना देना

// 📌 Example:
// अगर browser में map() नहीं है,
// तो हम खुद map() बना देते हैं → polyfill

////////////////////////////////MAP METHOD ////////////////////////////////////////

if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    var result = [];

    for (var i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }

    return result;
  };

  // USE IN EXAMPLE //
  
  var nums = [1, 2, 3];
  var output = nums.map(function (n) {
    return n * 2;
  });

console.log(output); // [2,4,6]

//////////////////////////////FILTER METHOD/////////////////////////////////////////////

if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback) {
    var result = [];

    for (var i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }

    return result;
  };
}
//////////////////////////////FOREACH METHOD//////////////////////////////////////////

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
}

  [10, 20, 30].forEach(function (n) {
  console.log(n);
});
  
///////////////////////////REDUCE METHOD////////////////////////////////////////////////////

  if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue) {
    var accumulator = initialValue;
    var startIndex = 0;

    if (accumulator === undefined) {
      accumulator = this[0];
      startIndex = 1;
    }

    for (var i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}
