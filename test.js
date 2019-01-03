$(document).ready(function() {
    $('#number').click(testNumber);
    //pickNumber();
    $('#number').keypress(enterKey);
});

let exponent=0;
let i = 0;
factorArray = [];
const prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,43,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,561,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
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
    console.log(prime[i] > prime.length);
    if (i > prime.length) {
        console.log('1');
        factorArray.push(primeFactor + '^1');
        outputFactor();
    } else {
        console.log('2');
        factor();
    }
}//jamie.mcdonough@randstadusa.com

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
    document.getElementById('answer').innerHTML = factorArray;
}

