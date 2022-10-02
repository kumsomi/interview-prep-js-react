// Q1. Given a and b, your function should return the value of a^b
const power=(a,b)=>{
    return a**b;
}
console.log(power(2,3));

// Q2. Given an array, your function should return the length of the array.

const lengthOfArray=(array)=>{
    let length=0
    for(let i=0; array[i]!==undefined; i++)
        length++;
    return length;
}
console.log(lengthOfArray([1,2,3,4,5]));

// Q3. Write a function that generates a secret code from a given string, by shifting characters of the alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.


const encode=(str,shiftCount)=>{
    let encodedStr='';
    for(let i of str){
        ascii=i.charCodeAt(0);
        encodedStr+=String.fromCharCode(ascii+shiftCount);
    }
    return encodedStr;
}
// console.log(encode("neogcamp", 2));

// edge cases-> It'll not handle if the range goes out of Z, z 
// Approach: Let's handle capital and small letters separately.

function encodedFunc(normal_str,places){
    encodedStr='';
    for(letter of normal_str){
        asciiValue=letter.charCodeAt(0);
        encodedAscii=asciiValue+places;
        // for capital letters
        if(asciiValue>=65 && asciiValue<=90){
            if(encodedAscii>90)
                encodedAscii-=26;
        }
        //for small letters
        if(asciiValue>=97 && asciiValue<=122){
            if(encodedAscii>122)
                encodedAscii-=26
        
        }
        encodedStr+=String.fromCharCode(encodedAscii);
    }
    return encodedStr;
}

// console.log(encodedFunc('xyzXYZ',2));


//Q4. Given length of a regular hexagon, your function should return area of the hexagon.
// Area of hexagon= (3(sqrroot(3))/2)* a^2

function areaHexagon(side){
    area=(3*Math.sqrt(3)*Math.pow(side,2))/2
    return area.toFixed(2);
}
console.log(areaHexagon(10));
