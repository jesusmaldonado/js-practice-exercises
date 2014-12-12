var uniq = function( inputArray ) {
  // arr.indexOf(searchElement[, fromIndex = 0])
  // for(prop in array)

  var destArray = new Array;

  for(var i = 0; i < inputArray.length; i++) {
    if ( destArray.indexOf(inputArray[i]) === -1 ) {
      destArray.push(inputArray[i]);
    }
  }

  return destArray;
};

var twoSum = function( inputArray ) {

  var destArray = new Array;

  for (var i= 0; i < inputArray.length - 1; i++) {
    for (var j=i+1; j < inputArray.length; j++ ) {
      if (inputArray[i] + inputArray[j] == 0) {
        destArray.push([i, j]);
      }
    }
  }

  return destArray;
};

var transpose = function( inputArray ) {
  var destArray = new Array;

  for(var i in inputArray) {
    destArray.push([]);
    for(var j in inputArray[i]) {
      destArray[i][j] = inputArray[j][i];
    }
  }

  return destArray;

};

var testT = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
