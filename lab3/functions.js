//1) getProperty

function getProperty(object, key) {
  if (object) {
    return object[key];
  }
}

var object = {
  key: "value",
};
var output = getProperty(object, "key");
console.log(output); //->value

//2) addProperty

function addProperty(obj, key) {
  obj[key] = true;
  return obj;
}

var myObj = {};
addProperty(myObj, "myProperty");
console.log(myObj.myProperty);

//3) removeProperty

var obj = {
  name: "Sam",
  age: 20,
};

function removeProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    delete obj[key];
  }
}

removeProperty(obj, "name");
console.log(obj);

//4) getFullName

function getFullname(name, surname) {
  return name + " " + surname;
}
console.log(getFullname("Joe", "Smith"));

//5)getLengthOfWord

function getLengthOfWord(word) {
  return word.length;
}

var output = getLengthOfWord("word");
console.log(output);

//6)getLengthOfTwoWords

function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length;
}

var output = getLengthOfTwoWords("word1", "word2");
console.log(output);

//7) isGreaterThan

function isGreaterThan(num1, num2) {
  return num2 > num1;
}
var output = isGreaterThan(11, 10);
console.log(output);

//8) isEven proverka na parne 4islo

function isEven(num) {
  return num % 2 === 0 ? true : false;
}

var output1 = isEven(12);
console.log(output1);

//9) isSameLength
function isSameLength(word1, word2) {
  return word1.length == word2.length;
}

var output = isSameLength("mama", "tato");
console.log(output); // --> true

//10) isEvenAndGreaterThanTen

function isEvenAndGreaterThanTen(num) {
  return num >= 10 && num % 2 == 0;
}
var output = isEvenAndGreaterThanTen(10);
console.log(output);

//11) computeAreaOfATriangle площа трикутника

function computeAreaOfATriangle(base, height) {
  return (base * height) / 2;
}

var output = computeAreaOfATriangle(4, 6);
console.log(output);
