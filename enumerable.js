var myEach = function ( inputArray, fun ) {
  for (var i = 0; i < inputArray.length; i++) {
    fun(inputArray[i]);
  }
};

var myMap = function ( inputArray, fun ) {
  var destArray = new Array;

  myEach(inputArray, function (el) {
    destArray.push(fun(el));
  });

  return destArray;
};


var myInject = function ( inputArray, fun ) {
  var destValue = inputArray.shift(1);

  myEach(inputArray, function(el) {
    destValue = fun(destValue, el);
  });

  return destValue;
};
