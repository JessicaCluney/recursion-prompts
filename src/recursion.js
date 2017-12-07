// Solve all of the following prompts using recursion.

// 1 make a for loop 
// 2 mimick loop to recursion
// 3 pass in loop variables to recursion parameters (i = 0, res = [], etc)
// 4 set base case and recursion
// 5 add in code

//DO
//concat & slice
//increment before (++var)
//return num + 1;

//DO NOT
//increment after (var++)
//return num = num + 1;


// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if(n < 0) {
        return null;
    } else if(n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    if(array.length === 0) {
        return 0;
    } else if(array.length === 1) {
        return array[0];
    } else {
        return array[0] + sum(array.slice(1));
    }
};



// var sum = function(array, counter = 0, i = 0) {
//   if(array.length > 0 && i < array.length){
//      counter = counter + array[i];
//   } else if (i < array.length - 1) {
//     return sum(array, counter, ++i);
//   } else {
//     return counter;
//   }
// };

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    if(array.length === 0) {
        return 0;
    } else if(array.length === 1 && !Array.isArray(array[0])) {
        return array[0];
    } else if (Array.isArray(array[0])) {
        return arraySum(array[0]) + arraySum(array.slice(1));
    } else {
      return array[0] + arraySum(array.slice(1));
    }
};

// 4. Check if a number is even.
var isEven = function(n) {
    if(n === 0) {
        return true;
    } else if(n === 1)  {
        return false;
    } else if (n > 1) {
       return isEven(n - 2);
    } else if(n < 0) {
       return isEven(n + 2); 
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if(n === 0) {
        return n;
    }
   else if(n < 0) {
        return (n + 1) + sumBelow(n + 1);
    } else {
        return (n - 1) + sumBelow(n - 1);
    }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
//should return an array//
//should return the integers between two numbers
//should accept negative integers
//should return empty array if no integers in range//
//should accept starting integer that's larger than ending//
//should use recursion by calling self//
var range = function(x, y) {
    var array = [];
    if(x === y || x === y + 1 || x === y - 1) {
        return array;
    } else if(x < y) {
      return [x + 1].concat(range(x + 1, y));
    } else {
      return [x - 1].concat(range(x - 1, y));
    }
  
};
// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if(exp === 0) {
        return 1;
    } else if(exp > 0) {
        return base * exponent(base, exp - 1);
    } else {
        return 1 / exponent(base, -exp);
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

//result of 2 as base and n as exponent
// 0, 1, 2, 3,  4,  5,  6,   7,   8 //powers
// 1, 2, 4, 8, 16, 32, 64, 128, 256 //outputs
var powerOfTwo = function(n) {
    if(n <= 0) {
        return false;
    } else if(n === 1 || n === 2) {
        return true;
    } else if(n % 2 == 1) {
        return false;
    } else {
        return powerOfTwo(n / 2);
    }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if (string.length <= 1) {
    return string;
  }
  const firstLetter = string[0];
  const lastLetter = string[string.length - 1];
  const stringGuts = reverse(string.substring(1, string.length - 1));//substring: Extract characters from a string
  return lastLetter + stringGuts + firstLetter;
};

// 10. Write a function that determines if a string is a palindrome.
// function palindrome(string) {
//   const removeSpacesInString = /[\W_]/g;
//   const alteredString = string.toLowerCase().replace(removeSpacesInString, '');
//   var alteredStringReversed = alteredString.split('').reverse().join('');
//   return alteredStringReversed === alteredString;
// }

// function palindrome(string) {
//   const noSpace = /[\W_]/g;
//   const newString = string.toLowerCase().replace(noSpace, '');
//   const stringReversed = newString.split('').reverse().join('');
  
//   for(var i = 0; i < newString.length; i++) {
//       if(stringReversed[i] === newString[i]) {
//         return true;
//       } else {
//         return false;
//       }    
//   }
// }

function palindrome(string, newString, noSpace, stringReversed, i = 0) {
    if (newString === null || newString === undefined) {
        const noSpace = /[\W_]/g;
        newString = string.toLowerCase().replace(noSpace, '');
    }
    if (stringReversed === null || stringReversed === undefined) {
        stringReversed = newString.split('').reverse().join('');
    }
    if(i < 0 || i >= newString.length) {
        return true;
    } else if(stringReversed[i] === newString[i]) {
      ++i;
      return palindrome(string, newString, noSpace, stringReversed, i);
    // return true;
    } else {
      return false;
    }    
}

// function palindrome(input) {
//     const newString = input.toLowerCase().replace(/[\W_]/g, '');
//     if (newString !== input) {
//         return palindrome(newString);
//     } else if (input.length <= 1) {
//         return true;
//     } else {
//         return input[0] === input[input.length - 1] && palindrome(input.slice(1, -1));
//     }
// }


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if( y === 0) {
        return NaN;
    } else if(x < 0) {
        return -modulo(-x, y);
    } else if(x < y) {
        return x;
    } else if(y < 0) {
        return modulo(x, -y);
    } else {
        return modulo(x - y, y);
    }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    if(y === 0) {
        return 0;
    } else if(y === 1) {
        return x;
    } else if(y < 0) {
        return -multiply(x, -y);
    } else {
      return x + multiply(x, y - 1);
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
    if(y === 0) {
        return NaN;
    } else if(x < y) {
        return 0; 
    } else if(y === 1) {
        return x;
    } else if(y < 0) {
        return -divide(x, -y);
    } else {
        return 1 + divide(x - y, y);
    }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if(x < 0 || y < 0) {
        return null;
    } else if(x === 1 || y === 1) {
        return 1;
    } else if(x === 0) {
        return y;
    } else if(y === 0) {
        return x;
    } else if(x > y){
        return gcd(y, x % y);
    } else {
        return gcd(x, y % x);
    }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

var compareStr = function(str1, str2) {
    if(str1 === "" && str2 === "") {
        return true;
    } else if(str1[0] !== str2[0]) {
        return false;
    } else {
        return str1[0] === str2[0] && compareStr(str1.slice(1), str2.slice(1));
      } 
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
// var createArray = function(str){
//     const array = [];
//     for(var i = 0; i < str.length; i++) {
//             array.push(str[i]);
//         }
//   return array;
// };

var createArray = function(str){
var array  = [];
    if(str === null || str.length <= 0) {
        return array;
    } else if(str.length > 0) {
        return array.concat([str[0]], createArray(str.slice(1)));
    }
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    if(array.length === 0 || array.length === 1) {
        return array;
    } else {
        return reverseArr(array.slice(1)).concat([array[0]]);
    }
};



// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    var array = [];
    var valueArray = [value];
    if(length === 0) {
        return array;
    } else if(length === 1) {
        return array.concat(valueArray);
    } else {
        return valueArray.concat(buildList(value, length - 1));
    }

    
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

var countOccurrence = function(array, value) {
    var count = 0;
    if(array.length === 0) {
         return count;
    } else if(array[0] === value) {
          count++;
    }
    return count += countOccurrence(array.slice(1), value);
};

// function countOccurrence(array, value) {
//   if(!array.length) {
//       return 0;
//   }
//   return (array[0] === value) + countOccurrence(array.slice(1), value);
// }

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
      if (array.length === 0) {
    return [];
  }
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2

var countKeysInObj = function(obj, key) {
    var count = 0;
    for (var property in obj) {
        if (property === key) {
            count++;
        }
        var value = obj[property];
        if (typeof value === 'object') {
            count += countKeysInObj(value, key); 
        }
    }
    return count;
};
// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
    var count = 0;
    for(var key in obj) {
        if(obj[key] === value) {
            count++;
        }
        if(typeof obj[key] === 'object') {
            count += countValuesInObj(obj[key], value);
        }
    }
    return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
    var newObj = {};
    // key = newKey;
    for(var property in obj) {
        var newObjProperty = property;
        if(property === key) {
            newObj[newKey] = obj[key];
            newObjProperty = newKey;
        } else if(property !== key) {
            newObj[property] = obj[property];
        }
        if(typeof obj[property] === 'object') {
            newObj[newObjProperty] = replaceKeysInObj(obj[property], key, newKey);
        }
    }
    return newObj;
};


// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
//I: number
//O: array [1st n Fibonacci numbers where n starts at index 1]
//C: recursion
//E: null for zero and negative integers
var fibonacci = function(n) {
 // var newArray = [];
    if(n <= 0) {
        return null;
    } else if(n === 1) {
        return [0, 1];
    } else {
        var array = fibonacci(n - 1);
        return array.concat([array[array.length - 1] + array[array.length - 2]]);
    }
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
// I: number
// O: number- the nth Fibonacci number
// C: recursive
// E: return null for negative integers

var nthFibo = function(n) {
    if(n < 0) {
        return null;
    } else if(n === 0 || n === 1) {
        return n;
    } else {
        return nthFibo(n - 1) + nthFibo(n -2);
    }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
// var capitalizeWords = function(input) {
//     var newArray = [];
//   for(var i = 0; i < input.length; i++) {
//       newArray = newArray.concat([input[i].toUpperCase()]);
//   }
//   return newArray;
// };

var capitalizeWords = function(input, newArray = [], i = 0) {
    if(i < 0 || i >= input.length) {
        return newArray;
    }

    // var newArray = [];
//   if(i < input.length) {
      newArray = newArray.concat(input[i].toUpperCase());
//   }
//   ++i;
  return capitalizeWords(input, newArray, ++i);
};

// var capitalizeWords = function(input) {
//     if (input === null || input.length <= 0) {
//         return [];
//     } else {
//         var nextWord = input[0].toUpperCase();
//         return [nextWord].concat(capitalizeWords(input.slice(1)));
//     }
// }

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
// return array

var capitalizeFirst = function(array) {
     if(array.length === 0) {
        return array;
    } else {
        var firstLetter = array[0].slice(0, 1).toUpperCase();
        var wholeWord = firstLetter + array[0].slice(1);
        return [wholeWord].concat(capitalizeFirst(array.slice(1)));
    }
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
// return a number - sum of even numbers

var nestedEvenSum = function(obj) {
    var sumEvenNumbers = 0;
    for(var key in obj) {
     if(typeof obj[key] === 'number' && obj[key] % 2 === 0) {
          sumEvenNumbers += obj[key];
     } else if(typeof obj[key] === 'object') {
         sumEvenNumbers += nestedEvenSum(obj[key]);      
     }
    }
  return sumEvenNumbers;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
    if(arrays.length === 0) {
        return arrays;
    } else if(Array.isArray(arrays[0])) {
        return flatten(arrays[0]).concat(flatten(arrays.slice(1)));
    } else {
        return [arrays[0]].concat(flatten(arrays.slice(1)));
    }
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
    if(obj === undefined) {
        obj = {};
    } 
    if(str.length === 0) {
        return obj;
    } else if(obj.hasOwnProperty(str[0])) {
        obj[str[0]]++;
    } else {
        obj[str[0]] = 1; 
    }
    return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    if(list.length === 0 || list.length === 1) {
        return list;
    } else if(list[0] === list[1]) {
        return compress(list.slice(1));
    } else {
        return [list[0]].concat(compress(list.slice(1)));
    }
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]

// var augmentElements = function(array, aug) {
//     if(array.length === 0) {
//         return [aug].concat(array);
//     } else if(Array.isArray(array[0])) {
//         return [array[0]].concat([array.slice(1), aug]);
//     } else {
//         return [array[0]].concat(augmentElements(array.slice(1), aug));
//     }
// };

function augmentElements(array, aug){
  if (array.length === 0) { 
      return array; 
  }
    var start = array[0];
    var end = array.slice(1);
    var recursive = augmentElements(end, aug);
  return [start.concat([aug])].concat(recursive);
}

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    if(array.length === 0 || array.length === 1) {
        return array;
    } else if(array[0] === 0 && array[0] === array[1]) {
        return minimizeZeroes(array.slice(1));
    } else {
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
    } 
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

// var alternateSign = function(array) {
//     if(array.length === 0) {
//         return array;
//     } else if(array.length === 1) {
//         return Math.abs(array[0]);
//     }
//     return [Math.abs(array[0])].concat([-array.slice(1)])
//     }
// };
var alternateSign = function(array) {
    if(array.length === 0) {
        return array;
    }
  var startingArrayElement = array[0];
  var nextArrayElement = array[1];
  var endingElements = array.slice(2);
  var recursive = alternateSign(endingElements);

  if (startingArrayElement < 0) {
      startingArrayElement = -startingArrayElement
  } 
  if (nextArrayElement > 0){
      nextArrayElement = -nextArrayElement
  }

  return [startingArrayElement, nextArrayElement].concat(recursive);
}

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

var numToText = function(str) {
    var numArray = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    if(str === null || str.length === 0) {
        return str;
    }
    if (numArray[str[0]]) {
        return numArray[str[0]] + numToText(str.slice(1));
    } else {
        return str[0] + numToText(str.slice(1));
    }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.

// Document Object Model
// often used to maintain sorted sets of data because elements can usually be found or inserted more efficiently in a sorted tree than in a sorted flat array

// In the DOM, all HTML elements are defined as objects.
//      global variable document gives us access to these objects. 
//      documentElement property refers to the object representing the <html> tag
//      also provides the properties head and body, which hold the objects for those elements.

// You can imagine an HTML document as a nested set of boxes. Tags such as <body> and </body> enclose other tags, which in turn contain other tags or text. 

// Each node may refer to other nodes, children, which in turn may have their own children
// Application nodes always have children, whereas variables and values are leaves, or nodes without children.
// Each DOM node object has a nodeType property, which contains a numeric code that identifies the type of node
// All element nodes have a getElementsByTagName method, which collects all elements with the given tag name that are descendants (direct or indirect children) of the given node and returns them as an array-like object.
// To find a specific single node, you can give it an id attribute and use document.getElementById instead.

// To find the tag name of an element, use its tagName property. But note that this will return the tag name in all uppercase. Use the toLowerCase or toUpperCase string method to compensate for this.


// 36. Return the number of times a tag occurs in the DOM.

 var tagCount = function(tag, node) { // tag = string
    var tagCounter = 0;
  //  var tagIds = document.getElementsByTagName(tag);
        if(tag === undefined) {
            return 0;
        } else if (node === undefined) {
            return tagCount(tag, document);
        } else if(node.tagName !== undefined && node.tagName !== null && node.tagName.toUpperCase() === tag.toUpperCase()) {
            tagCounter++;
        }
        if(node.childNodes) {
            for(var i = 0; i < node.childNodes.length; ++i) {
                tagCounter += tagCount(tag, node.childNodes[i]);
            }
        }
  // tagCount(tag, node.tag);
    return tagCounter;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
    if(target === undefined || target === null) {
        return null;
    }
    if (min === undefined) {
        min = 0;
    }
    if (max === undefined) {
        max = array.length - 1;
    }
    var mid = Math.floor((max + min) / 2);
    if (array[mid] === target) {
        return mid;
    } else if (min === max) {
        return null;
    } else if (target < array[mid]) {
        return binarySearch(array, target, min, mid);
    } else {
        return binarySearch(array, target, mid + 1, max)
    }
};


// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]

var merge = function(left, right) {
    var result = [];
    while(left.length || right.length) {
      if(left.length && right.length) {
        if(left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      } else if (left.length) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result;
  };

var mergeSort = function(array) {
    if (array.length < 2)
        return array;
 
    var middle = parseInt(array.length / 2);
    var left   = array.slice(0, middle);
    var right  = array.slice(middle, array.length);
 
    return merge(mergeSort(left), mergeSort(right));
};
