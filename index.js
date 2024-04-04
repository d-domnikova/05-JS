//1.1
function computeAreaOfARectangle(length, width){
    return length * width;
}

var output = computeAreaOfARectangle(4, 8);
console.log(output); //32


//1.2
function computeAreaOfACircle(radius){
    return Math.PI * Math.pow(radius, 2);
}

output = computeAreaOfACircle(4);
console.log(output); //50.26548245743669


//1.3
function computePower(x, exp){
    return Math.pow(x, exp);
}

output = computePower(2, 3);
console.log(output); //8


//1.4
function computeSquareRoot(num){
    return Math.sqrt(num);
}
    
output = computeSquareRoot(9);
console.log(output); //3


//1.5
function getLengthOfThreeWords(word1, word2, word3){
    return word1.length + word2.length + word3.length;
}

output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); //14


//1.6
function joinArrays(arr1, arr2){
    return arr1.concat(arr2);
}

output = joinArrays([1, 2], [3, 4]);
console.log(output); //[ 1, 2, 3, 4 ]


//1.7
function getProductOfAllEIementsAtProperty(obj, property){
    if (obj[property] === null || obj[property] === undefined) {return 0};

    if (Array.isArray(obj[property])) {
        var result = 1;
        for (let i = 0; i < obj[property].length; i++)
        {
            result *= obj[property][i];
        }
        return result;
    } else {
        return 0;
    }
}

var obj = {
    key: [1, 2, 3, 4]
}

output = getProductOfAllEIementsAtProperty(obj, 'key');
console.log(output); //24


//1.8
function sumDigits(num){
    var numToString = num.toString();
    var arr = numToString.split('').map(Number);
    var result = 0;

    for (let i = 0; i < arr.length; i++)
        {
            result += arr[i];
        }
    return result;
}

output = sumDigits(1148);
console.log(output); //14


//1.9
function findShortestWordAmongMixedElements(arr){
    const arrOfWords = arr.filter(e => typeof e === "string");

    if (arr.length == 0 || arrOfWords.length == 0) { return ''; }

    var shortestWord = arrOfWords[0];
    
    for (let i = 0; i< arrOfWords.length; i++) 
    {
        if (arrOfWords[i].length < shortestWord.length) {shortestWord = arrOfWords[i];}
    }
    return shortestWord;
}

output = findShortestWordAmongMixedElements([4, 'two', 2, "three"]);
console.log(output); //two


//1.10
function findSmallestNumberAmongMixedElements(arr){
    const arrOfNum = arr.filter(e => typeof e === "number");

    if (arr.length == 0 || arrOfNum.length == 0) { return ''; }
    var smallestNumber = arrOfNum[0];

    for (let i = 0; i< arrOfNum.length; i++) {
        if (arrOfNum[i] < smallestNumber) {smallestNumber = arrOfNum[i];}
    }
    return smallestNumber;
}

output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, "octopus"]);
console.log(output); //4


//1.11
function modulo(num1, num2){
    if (num1 == 0) {return 0;}
    if (num2 == 0 || isNaN(num1) || isNaN(num2)) {return NaN;}

    var res = parseInt(num1/num2);
    return num1 - (res*num2);
}

output = modulo(68, 15);
console.log(output); //8


//1.12
function flipEveryNChars(str, n){
    var arr = [];

    for (let i = 0; i < str.length; i += n) {
        arr.push(str.substring(i, i+n));
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').reverse().join('');
    }

    return arr.join('');
}

output = flipEveryNChars('a short example', 5);
console.log(output); //ohs axe trelpma


//1.13
function detectOutlierValue(string){
    let odd = 0, even = 0, oddValue = 0, evenValue = 0;
    var arr = string.split(' ').map(Number);

    for (let i = 0; i < arr.length; i++){
        arr[i]%2 == 0 ? (even++, evenValue = i) : (odd++ , oddValue = i ); 
    }

    if (even == 1) {
        return evenValue + 1 + " is only even";
    } else {
        return oddValue + 1 + " is only odd";
    }
}

output = detectOutlierValue('2 4 8 5 10');
console.log(output); //4 is only odd


//1.14
function findPairForSum(arr, sum){

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){   
            if(arr[i]+arr[j] == sum) {return [arr[i], arr[j]]; }
        }
    }
}
output = findPairForSum([3, 34, 4, 12, 5, 2], 46);
console.log(output); //[ 34, 12 ]


//1.15
function isMirror(str1, str2){

    if (str1.length !== str2.length) { return false; } 

    for(let i = 0; i < str1.length; i++) {
        if (str1.charAt(i) !== str2.charAt(str1.length-1-i)) {
            return false;
        }
    }

    return true;
}

output = isMirror('Taxi Cab', 'baC ixaT');
console.log(output); //true


//1.16
function binarySearch(arr, num){
    
    let left = 0, right = arr.length - 1;

    while(true){
        let index = Math.floor((left+right)/2)

        if(num === arr[index]) { return index}
        else if (num > arr[index]) { left = index + 1; }
        else {right = index - 1}
    }
}

output = binarySearch([1, 3, 16, 22, 31, 33, 34], 16);
console.log(output); //2


//1.17
function іsogram(sentence){
    //replaceAll прибере всі існуючі в рядку пробіли
    sentence = sentence.replaceAll(' ', '');

    for(let i = 0; i < sentence.length; i++){
        for(let j = i+1; j < sentence.length; j++){   
            if(sentence[i] == sentence[j]) {return false}
        }
    }
    return true;
}

output = іsogram("Start fresh next semester");
console.log(output); //false


//1.18
function palindrome(sentence){
    var arr = [];

    sentence.split(' ').forEach(el => {
        for (let i = 0; i < Math.floor(el.length/2); i++) {
            if (el[i].toLowerCase() !== el[el.length - i - 1].toLowerCase()) 
            {
                return false;
            }
        }
        arr.push(el);
    });
    return arr;
}

output = palindrome("Young Otto was frail");
console.log(output); //[ 'Otto' ]
