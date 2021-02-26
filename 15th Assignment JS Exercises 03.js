// Conditions
// Q1
function Max1() {
    var nu1 = document.getElementById('nu1').value;
    var nu2 = document.getElementById('nu2').value;
    var show = "";
    if (nu1 > nu2) {
        show = "First Value is Maximum than the Second Value";
    } else if (nu1 < nu2) {
        show = "Second Value is Maximum than the First Value";
    } else if (nu1 == nu2) {
        show = "Both Values Should not be equal.";
    }
    document.getElementById('Max1Show').innerHTML = show;
}
// Q2
function Max2() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var show = "";
    if ((num1 > num2) && (num1 > num3)) {
        show = "First Value is Maximum";
    } else if ((num2 > num1) && (num2 > num3)) {
        show = "Second Value is Maximum";
    } else if ((num3 > num1) && (num3 > num2)) {
        show = "Third Value is Maximum";
    } else if ((num1 == num2) && (num1 > num3) && (num2 > num3)) {
        show = "First and Second Values Should not be equal.";
    } else if ((num1 == num3) && (num1 > num2) && (num3 > num2)) {
        show = "First and Third Values Should not be equal.";
    } else if ((num2 == num3) && (num3 > num1) && (num2 > num1)) {
        show = "Second and Third Values Should not be equal.";
    } else if ((num1 == num2) && (num1 == num3) && (num2 == num3)) {
        show = "All Values Should not be equal.";
    }
    document.getElementById('Max2Show').innerHTML = show;
}
// Q3
function Neg() {
    var neg = document.getElementById('neg').value;
    var show = "";
    if (neg > 0) {
        show = "It is Positive";
    } else if (neg < 0) {
        show = "It is Negative";
    } else if (neg == 0) {
        show = "It is Zero";
    }
    document.getElementById('NegShow').innerHTML = show;
}
// Q4
function Div() {
    var div = document.getElementById('div').value;
    var show = "";
    if ((div % 5 === 0) && (div % 11 === 0)) {
        show = "It is Divible by 5 and 11";
    } else if ((div % 5 === 0) && (div % 11 !== 0)) {
        show = "It is Divible by 5 only";
    } else if ((div % 5 !== 0) && (div % 11 === 0)) {
        show = "It is Divible by 11 only";
    } else if ((div % 5 !== 0) && (div % 11 !== 0)) {
        show = "It is not Divible by 5 and 11";
    }
    document.getElementById('DivShow').innerHTML = show;
}
// Q5
function EvenOdd() {
    var evenOdd = document.getElementById('evenOdd').value;
    var show = "";
    if (parseInt(evenOdd / 2 )* 2 == evenOdd) {
        show = evenOdd + " is Even";
    } else {
        show = evenOdd + " is Odd";
    }
    document.getElementById('EvenOddShow').innerHTML = show;
}
// Q6
function Leap() {
    var leap = document.getElementById('leap').value;
    var show = '';
    if (leap < 1900 || leap > 2021) {
        show = "Please Enter Year Between 1900 - 2021";
    } else {
        switch (leap) {
            case '1904':
                show="Yes, it is a Leap Year";
                break;
        
            case '1908':
                show="Yes, it is a Leap Year";
                break;
        
            case '1912':
                show="Yes, it is a Leap Year";
                break;
        
            case '1916':
                show="Yes, it is a Leap Year";
                break;
        
            case '1920':
                show="Yes, it is a Leap Year";
                break;
        
            case '1924':
                show="Yes, it is a Leap Year";
                break;
        
            case '1928':
                show="Yes, it is a Leap Year";
                break;
        
            case '1932':
                show="Yes, it is a Leap Year";
                break;
        
            case '1936':
                show="Yes, it is a Leap Year";
                break;
        
            case '1940':
                show="Yes, it is a Leap Year";
                break;
        
            case '1944':
                show="Yes, it is a Leap Year";
                break;
        
            case '1948':
                show="Yes, it is a Leap Year";
                break;
        
            case '1952':
                show="Yes, it is a Leap Year";
                break;
        
            case '1956':
                show="Yes, it is a Leap Year";
                break;
        
            case '1960':
                show="Yes, it is a Leap Year";
                break;
        
            case '1964':
                show="Yes, it is a Leap Year";
                break;
        
            case '1968':
                show="Yes, it is a Leap Year";
                break;
        
            case '1972':
                show="Yes, it is a Leap Year";
                break;
        
            case '1976':
                show="Yes, it is a Leap Year";
                break;
        
            case '1980':
                show="Yes, it is a Leap Year";
                break;
        
            case '1984':
                show="Yes, it is a Leap Year";
                break;
        
            case '1988':
                show="Yes, it is a Leap Year";
                break;
        
            case '1992':
                show="Yes, it is a Leap Year";
                break;
        
            case '1996':
                show="Yes, it is a Leap Year";
                break;
        
            case '2000':
                show="Yes, it is a Leap Year";
                break;
        
            case '2004':
                show="Yes, it is a Leap Year";
                break;
        
            case '2008':
                show="Yes, it is a Leap Year";
                break;
        
            case '2012':
                show="Yes, it is a Leap Year";
                break;
        
            case '2016':
                show="Yes, it is a Leap Year";
                break;
        
            case '2020':
                show="Yes, it is a Leap Year";
                break;
        
            default:
                show="No, it is not a Leap Year";
                break;
        }
    }
    document.getElementById('LeapShow').innerHTML = show;
}
// Q7
function Alpha() {
    var alpha = document.getElementById('alpha').value;
    var show = "";
    var abc = alpha.match(/[A-Za-z]/);
    var num = alpha.match(/[0-9]/);
    if (alpha.length > 1) {
        show = "Please Enter only 1 Character either an Alphabet or a Number";
    } else if (num) {
        show = "It is not an Alphabet.";
    } else if (abc) {
        show = "It is an Alphabet.";
    } else {
        show = "It is not an Alphabet.";
    }
    document.getElementById('AlphaShow').innerHTML = show;
}
// Q8
function Vowel() {
    var vowel = document.getElementById('vowel').value;
    var show = "";
    var abc = vowel.match(/[A-Za-z]/);
    var num = vowel.match(/[0-9]/);
    
    if (vowel.length > 1) {
        show = "Please Enter only 1 Character as Alphabet";
    } else if (num) {
        show = "Please Enter only an Alphabet.";
    } else if (abc){
        switch (vowel) {
            case 'a': 
            show = "It is Vowel";
            case 'e': 
                show = "It is Vowel";
                case 'i': 
                show = "It is Vowel";
                case 'o': 
                show = "It is Vowel";
                case 'u': 
                show = "It is Vowel";
                case 'A': 
                show = "It is Vowel";
                case 'E': 
                show = "It is Vowel";
                case 'I': 
                show = "It is Vowel";
                case 'O': 
                show = "It is Vowel";
                case 'U': 
                show = "It is Vowel";
                break;
                
                default:
                    show = "It is Consonant";
                    break;
                };
    } else {
        show = "Please Enter only an Alphabet.";
    }
    document.getElementById('VowelShow').innerHTML = show;
}
// Q9
function Char() {
    var char = document.getElementById('char').value;
    var show = "";
    var abc = char.match(/[A-Za-z]/);
    var num = char.match(/[0-9]/);
    if (char.length > 1) {
        show = "Please Enter only 1 Character as Alphabet";
    } else if (abc) {
        show = "It is an Alphabet.";
    } else if (num) {
        show = "It is a Digit";
    } else {
        show = "It is a Special Character";
    }
    document.getElementById('CharShow').innerHTML = show;
}
// Q10
function Prime() {
    var prime = document.getElementById('prime').value;
    var show = "";
    if (prime > 1) {
        for (let x = 2; x <= prime; x++) {
            if (prime / x == 1) {
                show = "It is a Prime Number";
            } else if (prime % x == 0){
                show = "It is not a Prime Number";
                break;
            }
        }
    } else {
        show = "A Number should not be less than 2";
    }
    document.getElementById('PrimeShow').innerHTML = show;
}
// Strings Handling
// Q1
function Length() {
    var length = document.getElementById('length').value;
    document.getElementById('LengthShow').innerHTML = length.length;
}
// Q2
var strshow = "";
function Str() {
    var str = document.getElementById('str').value;
    strshow += str;
    document.getElementById('StrShow').innerHTML = strshow;
}
// Q3
function Sttr() {
    var sttr1 = document.getElementById('sttr1').value;
    var sttr2 = document.getElementById('sttr2').value;
    document.getElementById('SttrShow').innerHTML = sttr1 + " " + sttr2;
}
// Q4
function Stir() {
    var stir1 = document.getElementById('stir1').value;
    var stir2 = document.getElementById('stir2').value;
    var show = "";
    if (stir1.length > stir2.length) {
        show = "1st String has more Characters in it than 2nd String";
    } else if (stir1.length < stir2.length) {
        show = "2nd String has more Characters in it than 1st String";
    } else if (stir1.length == stir2.length) {
        show = "Both String has same Characters";
    }
    document.getElementById('StirShow').innerHTML = show;
}
// Q5
function Upper() {
    var upper = document.getElementById('upper').value;
    document.getElementById('UpperShow').innerHTML = upper.toUpperCase();
}
// Q6
function Lower() {
    var lower = document.getElementById('lower').value;
    document.getElementById('LowerShow').innerHTML = lower.toLowerCase();
}
// Q7
function Toggle() {
    var toggle = document.getElementById('toggle').value;
    var show = "";
    for (let x = 0; x < toggle.length; x++) {
        if (toggle[x].match(/[A-Z]/)) {
            show += toggle[x].toLowerCase();
        } else if (toggle[x].match(/[a-z]/)) {
            show += toggle[x].toUpperCase();
        }  else {
            show += toggle[x];
        }
    }
    document.getElementById('ToggleShow').innerHTML = show;
}
// Q8
function Total() {
    var total = document.getElementById('total').value;
    var show = "";
    var abc = total.match(/[A-Za-z]/g).length;
    var num = total.match(/[0-9]/g).length;
    var spec = total.length - (abc + num);
    show = "Alphabets are " + abc + ", Digits are " + num + " and Special Characters are " + spec;
    document.getElementById('TotalShow').innerHTML = show;
}
// Q9
function TotalVowel() {
    var totalvowel = document.getElementById('totalvowel').value;
    var show = "";
    var vowel = totalvowel.match(/[aeiouAEIOU]/gi).length;
    var consonant = totalvowel.match(/[qwrtyplkjhgfdszxcvbnmQWRTYPLKJHGFDSZXCVBNM]/gi).length;
    show = "Vowels are " + vowel + " and Consonants are " + consonant;
    document.getElementById('TotalVowelShow').innerHTML = show;
}
// Q10
function Words() {
    var words = document.getElementById('words').value;
    var show = "";
    var space = words.match(/ /g).length;
    show = "Words are " + (space + 1);
    document.getElementById('WordsShow').innerHTML = show;
}
// Q11
function Reverse() {
    var reverse = document.getElementById('reverse').value;
    var show = "";
    for (let x = reverse.length - 1; x >= 0; x--) {
        show += reverse[x];
    }
    document.getElementById('ReverseShow').innerHTML = show;
}
// Q12
function Palindrome() {
    var palindrome = document.getElementById('palindrome').value;
    var show = "";
    var right = "";
    var left = "";
    for (let x = 0; x < palindrome.length; x++) {
        right += palindrome[x];
    }
    for (let y = palindrome.length-1; y >= 0; y--) {
        left += palindrome[y];
    }
    if (right === left) {
        show = "It is a Palindrome";
    } else {
        show = "It is Not a Palindrome";
    }
    document.getElementById('PalindromeShow').innerHTML = show;
}
// Q13
var fruits = [" Banana", " Orange", " Apple", " Mango"];
document.getElementById("ArrayWords").innerHTML ="[" + fruits + "] ";
function ReverseWords() {
    fruits.reverse();
    document.getElementById("ReverseWordsShow").innerHTML = " [" + fruits + "]";
}
// Q14
function FirstString() {
    var firststring = document.getElementById('firststring').value;
    var show = "";
        show = firststring.slice(0, 1);
        document.getElementById('FirstStringShow').innerHTML = show;
}
// Q15
function LastString() {
    var laststring = document.getElementById('laststring').value;
    var show = "";
    show = laststring.slice(laststring.length-1, laststring.length);
    document.getElementById('LastStringShow').innerHTML = show;
}
// Array Handling
// Q1
var readarray = [" Apple", " 123", 23 , false];
document.getElementById('readarray').innerHTML = " [" + readarray + "] ";
function ReadArray() {
    document.getElementById('ReadArrayShow').innerHTML = " [" + readarray + "]";
}
// Q2
var negativearray = [-9, -23, 23, 13, 3, -2, 5];
document.getElementById('negativearray').innerHTML = " [" + negativearray + "] ";
function NegativeArray() {
    var show = [];
    for (let x = 0; x < negativearray.length; x++) {
        if (negativearray[x] < 0) {
            show += ' { ' + negativearray[x] + ' } ';
        }
    }
    document.getElementById('NegativeArrayShow').innerHTML = show;
}
// Q3
var sumarray = [-9, -23, 23, 13, 3, -2, 5];
document.getElementById('sumarray').innerHTML = " [" + sumarray + "] ";
function SumArray() {
    var show = [];
    for (let x = 0; x < sumarray.length; x++) {
        show = negativearray[x] + negativearray[x];
    }
    document.getElementById('SumArrayShow').innerHTML = show;
}
// Q4
var maxminarray = [-9, -23, 23, 13, 3, -2, 5];
document.getElementById('maxminarray').innerHTML = " [" + maxminarray + "] ";
function MaxMinArray() {
    document.getElementById('MaxArrayShow').innerHTML = "Maximun Element is " + Math.max(...maxminarray);
    document.getElementById('MinArrayShow').innerHTML = " and Minimun Element is " + Math.min(...maxminarray);
}
// Q5
var secondlargearray = [-9, -23, 23, 13, 3, -2, 5];
document.getElementById('secondlargearray').innerHTML = " [" + secondlargearray + "] ";
function SecondLargeArray() {
    var val = Math.max(...secondlargearray);
    secondlargearray.splice(secondlargearray.indexOf(val), 1);
    document.getElementById('SecondLargeArrayShow').innerHTML = Math.max(...secondlargearray);
}
// Q6
var evenoddarray = [-10, -23, 24, 13, 3, -2, 5];
document.getElementById('evenoddarray').innerHTML = " [" + evenoddarray + "] ";
function EvenOddArray() {
    var evenshow = [];
    var oddshow = [];
    for (let x = 0; x < evenoddarray.length; x++) {
        if (evenoddarray[x] % 2 == 0) {
            evenshow += 1;
        } else {
            oddshow += 1;
        }
    }
    document.getElementById('EvenArrayShow').innerHTML = "Total Even Elements are " + evenshow.length;
    document.getElementById('OddArrayShow').innerHTML = "and Total Odd Elements are " + oddshow.length;
}
// Q7
var totalNegarray = [-9, -23, 23, 13, 3, -2, 5];
document.getElementById('totalNegarray').innerHTML = " [" + totalNegarray + "] ";
function TotalNegArray() {
    var show = [];
    for (let x = 0; x < totalNegarray.length; x++) {
        if (totalNegarray[x] < 0) {
            show += 1;
        }
    }
    document.getElementById('TotalNegArrayShow').innerHTML = show.length;
}
// Q8
var Copyarray1 = [-10, -23, 24, 13, 3, -2, 5];
var Copyarray2 = [" Apple", " 123", 23 , false];
document.getElementById('Copyarray1').innerHTML = "1st Array [" + Copyarray1 + "] ";
document.getElementById('Copyarray2').innerHTML = " and 2nd Array [" + Copyarray2 + "] ";
function CopyArray() {
    for (let x = 0; x < Copyarray2.length; x++) {
        Copyarray1.push(Copyarray2[x]);
    }
    document.getElementById('CopyArrayShow').innerHTML = Copyarray1;
}
// Q9
var ins = [];
function Insert() {
    var insert = document.getElementById('insert').value;
    ins.push(insert);
    document.getElementById('InsertShow').innerHTML = ins;
}
// Q10
var del = [" Apple", " 123", 23 , false];
document.getElementById('del').innerHTML = " [" + del + "] ";
function Del() {
    var num = document.getElementById('delete').value;
    del.splice(num-1, 1);
    document.getElementById('DelShow').innerHTML = del;
}
// Math Methods
// Q1
function Round() {
    var round = document.getElementById('round').value;
    var show = "";
    if (round >= (parseInt(round) + 0.5)) {
        show = parseInt(round) + 1;
    } else if (round <= (parseInt(round) - 0.51)) {
        show = parseInt(round) - 1;
    } else {
        show = parseInt(round);
    }
    document.getElementById('RoundShow').innerHTML = show;
}
// Q2
function Ceil() {
    var ceil = document.getElementById('ceil').value;
    var show = "";
    if (ceil > 0 && ceil > parseInt(ceil)) {
        show = parseInt(ceil) + 1;
    } else if (ceil <= 0 || ceil == parseInt(ceil)){
        show = parseInt(ceil);
    }
    document.getElementById('CeilShow').innerHTML = show;
}
// Q3
function Floor() {
    var floor = document.getElementById('floor').value;
    var show = "";
    if (floor >= 0 || floor == parseInt(floor)) {
        show = parseInt(floor);
    } else if (floor < 0 && floor < parseInt(floor)){
        show = parseInt(floor) - 1;
    }
    document.getElementById('FloorShow').innerHTML = show;
}
// Loops
// Q1
function Natural() {
    var natural = document.getElementById('natural').value;
    var show = [];
    if (natural > 0) {
        for (let n = 1; n <= parseInt(natural); n++) {
            show.push(n);
        }
    } else {
        show = "Please Enter a Positive Number for the Nth Number"
    }
    document.getElementById('NaturalShow').innerHTML = "[" + show + "]";
}
// Q2
function NaturalReverse() {
    var naturalReverse = document.getElementById('naturalReverse').value;
    var show = [];
    if (naturalReverse > 0) {
        for (let n = 1; n <= parseInt(naturalReverse); n++) {
            show.unshift(n);
        }
    } else {
        show = "Please Enter a Positive Number for the Nth Number"
    }
    document.getElementById('NaturalReverseShow').innerHTML = "[" + show + "]";
}
// Q3
function AtoZ() {
    var atoz = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    show = [];
    for (let abc = 0; abc < atoz.length; abc++) {
        show.push(atoz[abc]);
    }
    document.getElementById('AtoZShow').innerHTML = "[" + show + "]";
}
// Q4
function Even() {
    var show = [];
        for (let n = 1; n <= 100; n++) {
            if (n % 2 === 0) {
                show.push(n);
            }
        }
    document.getElementById('EvenShow').innerHTML = "[" + show + "]";
}
// Q5
function Odd() {
    var show = [];
        for (let n = 1; n <= 100; n++) {
            if (n % 2 !== 0) {
                show.push(n);
            }
        }
    document.getElementById('OddShow').innerHTML = "[" + show + "]";
}

