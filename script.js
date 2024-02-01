//DO THE BELOW PROGRAM USING ANONYMOUS FUNCTION AND IIFE
//a.Print odd numbers in an array
//anonymous function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumbers = numbers.filter(function(number) {
  return number % 2 !== 0;
});
oddNumbers.forEach(function(oddNumber) {
  console.log(oddNumber);
});

//IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)
(function() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let oddNumbers = numbers.filter(function(number) {
      return number % 2 !== 0;
    });
    oddNumbers.forEach(function(oddNumber) {
      console.log(oddNumber);
    });
  })();
  //OUTPUT:
  1
  3
  5
  7
  9
  
//b.Convert all the strings to title caps in a string array
//anonymous function
let stringArray = ["hello world", "javascript program", "title caps"];
let totitleCaps = function (str) {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
};
let titleCapsArray = stringArray.map(totitleCaps);
console.log(titleCapsArray);

//IMMEDIATELY INVOKED FUNCTION EXPRESSION
let string = ["hello world", "javascript programming", "title caps"];
let  = arr(function () {
    return string.map(function (str) {
        return str.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
    });
})();
console.log(arr);
//OUTPUT:
[ 'Hello World', 'Javascript Program', 'Title Caps']

//c.Sum of all numbers in an array
//anonmyous function
let numberArray = [1, 2, 3, 4, 5];
let sum = function (arr) {
    return arr.reduce(function (acc, num) {
        return acc + num;
    }, 0);
};
let result = sum(numberArray);
console.log(result);

//IMMEDIATELY INVOKED FUNCTION EXPRESSION
let arr= [1, 2, 3, 4, 5];
let res = (function (arr) {
    return arr.reduce(function (acc, num) {
        return acc + num;
    }, 0);
})(arr);
console.log(res);
//OUTPUT:
15

//d.Return all the prime numbers in an array 
//anonymous function
let prime = [2, 3, 5, 8, 11, 13, 17, 20];
let isPrime = function (num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
let getPrimes = function (arr) {
    return arr.filter(function (num) {
        return isPrime(num);
    });
};
let primeNumber = getPrimes(prime);
console.log(primeNumber);   

//IMMEDIATELY INVOKED FUNCTION EXPRESSION
let num = [2, 3, 5, 8, 11, 13, 17, 20];
let primeNumbers = (function (arr) {
    let isPrime = function (num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    return arr.filter(function (num) {
        return isPrime(num);
    });
})(num);
console.log(primeNumbers);
//OUTPUT:
[2,3,5,11,13,17]

//e.return all palindrome in an array
//anonymous function
let arrays = ["level", "hello", "radar", "world", "deed", "greet"];
let palindrome = arrays.filter(function(word) {
    let isPalindrome = function(str) {
        return str === str.split('').reverse().join('');
    };
    return isPalindrome(word);
});
console.log("Palindrome:", palindrome);

//IMMEDIATELY INVOKED FUNCTION EXPRESSION
let array = ["level", "hello", "radar", "world", "deed", "openai"];
let palindromes = (function(arr) {
    let isPalindrome = function(str) {
        return str === str.split('').reverse().join('');
    };
       return arr.filter(function(word) {
        return isPalindrome(word);
    });
})(array);

console.log("Palindromes:", palindromes);
//OUTPUT:
Palindrome: ['level', 'radar', 'deed' ]

//f.return median of two sorted arrays of the same size
//anonymous function
function getMedian(ar1, ar2, n)
{
    var i = 0;
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
    return (m1 + m2)/2;
}
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    document.write("Median is "+ getMedian(ar1, ar2, n1));
else
    document.write("Doesn't work for arrays of unequal size");
//OUTPUT:
16

//G.return duplicates from array
//anonymous function
var num1 = [1, 2, 3, 4, 2, 5, 6, 3];
var dup = (function(array) {
    var seen = {};
    var duplicates = [];
    for (var i = 0; i < array.length; i++) {
        if (seen[array[i]]) {
            duplicates.push(array[i]);
        } else {
            seen[array[i]] = true;
        }
    }
    return duplicates;
})(arr);
console.log(dup);

//IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function() {
    var arr = [1, 2, 3, 4, 2, 5, 6, 3];

    function findDuplicates(array) {
        var seen = {};
        var duplicates = [];

        for (var i = 0; i < array.length; i++) {
            if (seen[array[i]]) {
                duplicates.push(array[i]);
            } else {
                seen[array[i]] = true;
            }
        }

        return duplicates;
    }

    var result = findDuplicates(arr);
    console.log(result);
})();
//OUTPUT:
[ 2, 3 ]

//h.Reverse a array by k times
//anonymous function
var originalArray = [1, 2, 3, 4, 5];
var rotations = 2;
var rotatedArray = (function(arr, k) {
    var n = arr.length;
    k = k % n;
    var rotatedArray = new Array(n);
    for (var i = 0; i < n; i++) {
        rotatedArray[(i + k) % n] = arr[i];
    }
    return rotatedArray;
})(originalArray, rotations);
console.log(rotatedArray);

//IMMEDAITELY INVOKED FUNCTION EXPRESSION(IIFE)
var originalArray = [1, 2, 3, 4, 5];
var rotations = 2;
var rotatedArray = (function(arr, k) {
    var n = arr.length;
    k = k % n;
    var rotatedArray = new Array(n);
    for (var i = 0; i < n; i++) {
        rotatedArray[(i + k) % n] = arr[i];
    }
    return rotatedArray;
})(originalArray, rotations);
console.log(rotatedArray);
//OUTPUT:
[4,5,1,2,3]


//DO THE BELOW PROGRAMS IN ARROW FUNCTIONS
//a.Print odd numbers in an array
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var oddNumber = numbers.filter(num => num % 2 !== 0);
oddNumbers.forEach(oddNumber =>
console.log(oddNumber));
//OUTPUT:
1
3
5
7
9

//b.convert all the strings to titlecaps in an string array
var str = ["apple", "banana", "orange", "grape"];
var foo = str.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(foo);
//OUTPUT:
["Apple","Banana","Orange","Grape"]

//c.sum of all numbers in array
var number = [1, 2, 3, 4, 5];
var foo = number.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(foo);
//OUTPUT:
15

//d.return all prime numbers in array
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var primenum = number.filter(num => {
    if (num < 2) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
});
console.log(primenum);
//OUTPUT:
[ 2,3,5,7 ]

//e.return all palindrome in an arrray
const getAllPalindromes = function (words) {
    return words.filter(function (word) {
       return word.split("").reverse().join("") === word;
     });
   };
   console.log(getAllPalindromes(["hello", "noon"]));
//OUTPUT:
['noon']








  

 














  
