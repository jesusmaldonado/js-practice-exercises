var range = function(inputArray, start, end) {
  var destArray = new Array;
  if (start > end) {
    return destArray;
  }
  console.log(start);
  destArray.push(inputArray[start]);
  destArray = destArray.concat(range(inputArray, start + 1, end));

  return destArray;
};

var sumArray = function(inputArray) {
  if ( inputArray.length === 0){
    return 0;
  }
  var destValue = inputArray.shift();

  destValue += sumArray(inputArray);

  return destValue;
};


var exponentiation = function(base, pow) {
  if (pow === 1){
    return base;
  }
  var result = base * exponentiation(base, pow - 1);

  return result;
};

var fibonnaci = function(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1,1];
  }

  var fib = fibonnaci(n-1);
  var len = fib.length;

  fib[len] = fib[len-1] + fib[len-2];
  return fib;
};

var bsearch = function (inputArray, target) {
  if (inputArray.length === 1) {
    if (inputArray[0] === target) {
      return 0;
    } else {
      return null;
    }
  }
  var len = Math.floor(inputArray.length / 2);
  var idx;
  if (inputArray[len] <= target) {
    idx = bsearch(inputArray.slice(len, inputArray.length), target);
      if (idx === null) {
        return null;
      } else {
        idx += len;
    }
  } else {
    idx = bsearch(inputArray.slice(0, len), target);
  }

  return idx;
};

var makeChange = function (value, coinsArray) {
  console.log(value);
  var result = new Array;
  var topCoin = coinsArray.shift();
  var bestGuessLength = value + 1;
  var bestGuess, currentGuess;

  if (value % topCoin === 0) {
    for (var i = 0; i < value; i += topCoin) {
      result.push(topCoin);
    }
    coinsArray.unshift(topCoin);
    return result;
  }

  for (var i = 0; i < value; i += topCoin) {
    currentGuess = makeChange(value - i, coinsArray);
    if (currentGuess.length < bestGuessLength) {
      bestGuess = currentGuess;
      bestGuessLength = bestGuess.length;
    }

    // result.push(topCoin);
    // value -= topCoin;
  }
  result = result.concat(bestGuess);

  // result = result.concat(makeChange(value, coinsArray));

  coinsArray.unshift(topCoin);
  return result;
};

var mergeSort = function(array) {
  var left, right, len, mid;
  len = array.length
  if (len <= 1) {
    return array;
  }

  mid = len / 2;
  left = mergeSort(array.slice(0, mid));
  right = mergeSort(array.slice(mid, len));

  return merge(left,right);
};



var merge = function(array1, array2) {
  var mergedArray = new Array;

  while(array1.length > 0 && array2.length > 0) {
    if (array1[0] < array2[0]) {
      mergedArray.push(array1.shift());
    } else {
      mergedArray.push(array2.shift());
    }
  }

  if (array1.length > 0) {
    mergedArray.push(array1.shift());
  } else {
    mergedArray.push(array2.shift());
  }

  return mergedArray;
};
