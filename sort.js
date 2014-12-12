var bubbleSort = function (inputArray) {
  var sorted = false;
  var i;

  while (!sorted) {
    sorted = true;
    for(i = 0; i < inputArray.length - 1; i++) {
      if (inputArray[i] > inputArray[i+1]) {
        var j = inputArray[i+1];
        inputArray[i+1] = inputArray[i];
        inputArray[i] = j;
        sorted = false;
      }
    }
  }

  return inputArray;
};


var substrings = function (inputString) {
  var substringArray = new Array;
  var i, j;

  for (i = 0; i < inputString.length; i++) {
    for (j = i+1; j < inputString.length + 1; j++) {
      substringArray.push(inputString.substring(i, j));
    }
  }

  return substringArray;
};
