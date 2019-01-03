$(document).ready(function() {
    $('#number').click(testNumber);
    //pickNumber();
    $('#number').keypress(enterKey);
});

let exponent=0;
let i = 0;
factorArray = [];
const prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199];
function clearForm() {
    $('#guess').val('');
    console.log('clearform');
    //document.getElementById('guess').innerHTML = "";
}
function enterKey(event) {
    if (event.which == 13) {
        testNumber();
    } else{
        return;
    }
}

function testNumber () {
    console.log(prime.length); //length is 46
    num = document.getElementById('number').value;
    console.log(num);
    //console.log(num % 1 === 0);
    if (num < 2 || (num % 1 !== 0)) {
        document.getElementById('errorMessage').innerHTML = ('Please input integer of 2 or greater.');
    } else {
        document.getElementById('errorMessage').innerHTML = ('');
        pickPrimeNumber();
    }
}

//TODO INPUT FORM
//TODO READ NUMBER IS IT 2 OR GREATER
//TODO PICK PRIME NUMBER TO TEST FOR FACTORING
//TODO TEST PRIME NUMBER FOR FACTORING, IF REMAINDER IS 0 COUNT EXPONENT, OTHERWISE PUSH PRIME AND EXPONENT AND CHECK FOR NEXT PRIME NUMBER TO TEST
//TODO IF REMAINING VALUE IS ONE, DISPLAY FULL FACTORING

function pickPrimeNumber () {
    primeFactor = prime[i];
    console.log(num);
    console.log(primeFactor);
    factor();
}

function factor() {
    exponent = 0;
    console.log(num);
    console.log(primeFactor);
    console.log(num % primeFactor === 0);
    if (num % primeFactor === 0) {
        for (n = 0; num % primeFactor === 0; n++) {
            num = num / primeFactor;
            console.log(num);
            exponent = exponent+1;
        }
        console.log(exponent);
        pushFactor(exponent);
    } else {
        i = i+1;
        pickPrimeNumber();
    }
}

function pushFactor () {
    console.log(exponent);
    exponent = (primeFactor + '^' + exponent);
    console.log(exponent);
    factorArray.push(exponent);
    i = i+1;
    console.log(i);
    if (num > 1) {
        pickPrimeNumber();
    } else {
        outputFactor();
    }
}

function outputFactor () {
    console.log(exponent);
    document.getElementById('answer2').innerHTML = factorArray;
}

