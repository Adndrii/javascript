//1)
function findMinLengthOfThreeWords(text1, text2, text3) {
  if (text1.length < text2.length && text1.length < text3.length) {
    return text1.length;
  } else if (text2.length < text1.length && text2.length < text3.length) {
    return text2.length;
  } else if (text3.length < text1.length && text3.length < text2.length) {
    return text3.length;
  }
}
var output = findMinLengthOfThreeWords("a", "be", "see");
console.log("Output: ", output);

//2)
function filterOddElements(arr) {
  var oddOnes = [];

  for (var num = 0; num < arr.length; num++) {
    if (arr[num] % 2 !== 0) {
      oddOnes.push(arr[num]);
    }
  }
  return oddOnes;
}
var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output);

//3)
function getLengthOfShortestElement(arr) {
  if (arr.length < 1) {
    return 0;
  }
  var newNum = arr[0].length;
  for (let i in arr) {
    if (arr[i].length < newNum) {
      newNum = arr[i].length;
    }
  }
  return newNum;
}
console.log(getLengthOfShortestElement(["one", "two", "three"]));

//4)
function joinArrayOfArrays(arr) {
  tmp = [];
  for (var ar of arr) {
    for (var a of ar) {
      tmp.push(a);
    }
  }
  return tmp;
}
var output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ["x", "y"],
]);
console.log(output);

//5
function findSmallestNumberAmongMixedElements(arr) {
  var smallest = 0;
  if (arr.length === 0) return 0;
  else smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
var output = findSmallestNumberAmongMixedElements([2, "lincoln", 9, "octopus"]);
console.log(output);

//6)
function computeSummationToN(num) {
  var sum = 0;
  for (; num > 0; num--) {
    sum = sum + num;
  }
  return sum;
}

console.log(computeSummationToN(6));

//7)
function convertScoreToGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  }
  if (score >= 82 && score <= 89) {
    return "B";
  }
  if (score >= 75 && score <= 81) {
    return "C";
  }
  if (score >= 69 && score <= 74) {
    return "D";
  }
  if (score >= 60 && score <= 68) {
    return "E";
  }
  if (score >= 0 && score <= 59) {
    return "F";
  }
  if (score > 100 || score < 0) {
    return "INVALID SCORE";
  }
}

var output = convertScoreToGrade(95);
console.log(output);

//8)
function getLongestOfThreeWords(word1, word2, word3) {
  let wordsArr = [word2, word3];
  let longestWord = word1;

  for (var i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length > longestWord.length) {
      longestWord = wordsArr[i];
    }
  }
  return longestWord;
}
var output = getLongestOfThreeWords("these", "three", "words");
console.log(output);

//9)
function multiply(num1, num2) {
  var sum = 0;
  for (i = 0, j = Math.abs(num2); i < j; i++) {
    sum += num1;
  }
  if (num2 < 0) {
    return -sum;
  }
  return sum;
}
var output = multiply(-4, 4);
console.log(output);

//10)
function computeSumBetween(num1, num2) {
  var sum = 0;

  for (var i = num1; i < num2; i++) {
    sum += i;
  }

  return sum;
}
var output = computeSumBetween(2, 5);
console.log(output);
