/*document.addEventListener("DOMElementLoaded", function() {
    document.getElementById('number').click(testNumber);
    document.getElementById('number').keypress(enterKey);
});*/

$(document).ready(function() {
    $('#number').click(testNumber);
    //pickNumber();
    $('#number').keypress(enterKey);
});

//document.addEventListener

var num = null;
var tester = 0;
var factorArray = [];
const prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,43,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,561,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];

const primeLength = prime.length;//length is 168

function clearForm() {
    $('#guess').val('');
    console.log('clearform');
    //document.getElementById('guess').innerHTML = "";
}

function enterKey(event) {
    if (event.which == 13) {
        testNumber();
    }
}

function testNumber () {
    //console.log(primeLength); //length is 46
    num = document.getElementById('number').value;
    //console.log(num);
    //console.log(num % 1 === 0);
    if (num < 2 || (num % 1 !== 0)) {
        document.getElementById('errorMessage').innerHTML = ('Please input integer of 2 or greater.');
    } else {
        document.getElementById('errorMessage').innerHTML = ('');
        factor2();
    }
}

//29484

//let primeFactor = prime[indexNumber];


//read value in array, based on position in array
//if  % = 0, how many times number divisible by prime
//

function factor2() {
    if (num % 2 === 0) {
        for (n = 0; num % 2 === 0; n++) {
            num = num / 2;
            console.log(num);
        } n = ('2^' + n);
        document.getElementById('answer2').innerHTML = n;
        factor3();
    } else {
        factor3();
    }
}

function factor3() {
    if (num % 3 === 0) {
        for (n = 0; num % 3 === 0; n++) {
            num = num / 3;
            console.log(num);
        } n = ('3^' + n);
        document.getElementById('answer3').innerHTML = n;
        factor5();
    } else {
        factor5();
    }
}

function factor5() {
    if (num % 5 === 0) {
        for (n = 0; num % 5 === 0; n++) {
            num = num / 5;
            console.log(num);
        } n = ('5^' + n);
        document.getElementById('answer5').innerHTML = n;
        factor7();
    } else {
        factor7();
    }
}

function factor7 () {
    if (num % 7 === 0) {
        for (n = 0; num % 7 === 0; n++) {
            num = num / 7;
            console.log(num);
        } n = ('7^' + n);
        document.getElementById('answer7').innerHTML = n;
        factor11();
    } else {
        factor11();
    }
}

function factor11 () {
    if (num % 11 === 0) {
        for (n = 0; num % 11 === 0; n++) {
            num = num / 11;
            console.log(num);
        } n = ('11^' + n);
        document.getElementById('answer11').innerHTML = n;
        factor13();
    } else {
        factor13();
    }
}

function factor13() {
    if (num % 13 === 0) {
        for (n = 0; num % 13 === 0; n++) {
            num = num / 13;
            console.log(num);
        } n = ('13^' + n);
        document.getElementById('answer13').innerHTML = n;
        factor17();
    } else {
        factor17();
    }
}

function factor17 () {
    if (num % 17 === 0) {
        for (n = 0; num % 17 === 0; n++) {
            num = num / 17;
            console.log(num);
        } n = ('17^' + n);
        document.getElementById('answer17').innerHTML = n;
        factor19();
    } else {
        factor19();
    }
}

function factor19() {
    if (num % 19 === 0) {
        for (n = 0; num % 19 === 0; n++) {
            num = num / 19;
            console.log(num);
        } n = ('19^' + n);
        document.getElementById('answer19').innerHTML = n;
        factor23();
    } else {
        factor23();
    }
}

function factor23 () {
    if (num % 23 === 0) {
        for (n = 0; num % 23 === 0; n++) {
            num = num / 23;
            console.log(num);
        } n = ('23^' + n);
        document.getElementById('answer23').innerHTML = n;
        factor29();
    } else {
        factor29();
    }
}

function factor29 () {
    if (num % 29 === 0) {
        for (n = 0; num % 29 === 0; n++) {
            num = num / 29;
            console.log(num);
        } n = ('29^' + n);
        document.getElementById('answer29').innerHTML = n;
        factor31();
    } else {
        factor31();
    }
}

function factor31 () {
    if (num % 31 === 0) {
        for (n = 0; num % 31 === 0; n++) {
            num = num / 31;
            console.log(num);
        } n = ('31^' + n);
        document.getElementById('answer31').innerHTML = n;
        factor37();
    } else {
        factor37();
    }
}

function factor37 () {
    if (num % 37 === 0) {
        for (n = 0; num % 37 === 0; n++) {
            num = num / 37;
            console.log(num);
        } n = ('37^' + n);
        document.getElementById('answer37').innerHTML = n;
        factor41();
    } else {
        factor41();
    }
}

function factor41() {
    if (num % 41 === 0) {
        for (n = 0; num % 2 === 0; n++) {
            num = num / 2;
            console.log(num);
        } n = ('41^' + n);
        document.getElementById('answer2').innerHTML = n;
        factor43();
    } else {
        factor43();
    }
}

function factor43() {
    if (num % 43 === 0) {
        for (n = 0; num % 43 === 0; n++) {
            num = num / 43;
            console.log(num);
        } n = ('43^' + n);
        document.getElementById('answer43').innerHTML = n;
        factor47();
    } else {
        factor47();
    }
}

function factor47() {
    if (num % 47 === 0) {
        for (n = 0; num % 47 === 0; n++) {
            num = num / 47;
            console.log(num);
        } n = ('47^' + n);
        document.getElementById('answer47').innerHTML = n;
        factor53();
    } else {
        factor53();
    }
}

function factor53() {
    if (num % 53 === 0) {
        for (n = 0; num % 53 === 0; n++) {
            num = num / 53;
            console.log(num);
        } n = ('53^' + n);
        document.getElementById('answer53').innerHTML = n;
        factor59();
    } else {
        factor59();
    }
}

function factor59 () {
    if (num % 59 === 0) {
        for (n = 0; num % 59 === 0; n++) {
            num = num / 59;
            console.log(num);
        } n = ('59^' + n);
        document.getElementById('answer59').innerHTML = n;
        factor61();
    } else {
        factor61();
    }
}

function factor61 () {
    if (num % 61 === 0) {
        for (n = 0; num % 61 === 0; n++) {
            num = num / 61;
            console.log(num);
        } n = ('61^' + n);
        document.getElementById('answer61').innerHTML = n;
        factor67();
    } else {
        factor67();
    }
}

function factor67() {
    if (num % 67 === 0) {
        for (n = 0; num % 67 === 0; n++) {
            num = num / 67;
            console.log(num);
        } n = ('67^' + n);
        document.getElementById('answer67').innerHTML = n;
        factor71();
    } else {
        factor71();
    }
}

function factor71 () {
    if (num % 71 === 0) {
        for (n = 0; num % 71 === 0; n++) {
            num = num / 71;
            console.log(num);
        } n = ('71^' + n);
        document.getElementById('answer71').innerHTML = n;
        factor73();
    } else {
        factor73();
    }
}

function factor73() {
    if (num % 73 === 0) {
        for (n = 0; num % 73 === 0; n++) {
            num = num / 73;
            console.log(num);
        } n = ('73^' + n);
        document.getElementById('answer73').innerHTML = n;
        factor79();
    } else {
        factor79();
    }
}

function factor79 () {
    if (num % 79 === 0) {
        for (n = 0; num % 79 === 0; n++) {
            num = num / 23;
            console.log(num);
        } n = ('79^' + n);
        document.getElementById('answer79').innerHTML = n;
        factor83();
    } else {
        factor83();
    }
}

function factor83 () {
    if (num % 83 === 0) {
        for (n = 0; num % 11 === 0; n++) {
            num = num / 83;
            console.log(num);
        } n = ('83^' + n);
        document.getElementById('answer83').innerHTML = n;
        factor89();
    } else {
        factor89();
    }
}

function factor89 () {
    if (num % 89 === 0) {
        for (n = 0; num % 89 === 0; n++) {
            num = num / 89;
            console.log(num);
        } n = ('89^' + n);
        document.getElementById('answer89').innerHTML = n;
        factor97();
    } else {
        factor97();
    }
}

function factor97 () {
    if (num % 97 === 0) {
        for (n = 0; num % 97 === 0; n++) {
            num = num / 97;
            console.log(num);
        } n = ('97^' + n);
        document.getElementById('answer97').innerHTML = n;
        factor101();
    } else {
        factor101();
    }
}

function factor101() {
    if (num % 101 === 0) {
        for (n = 0; num % 101 === 0; n++) {
            num = num / 101;
            console.log(num);
        } n = ('101^' + n);
        document.getElementById('answer101').innerHTML = n;
        factor103();
    } else {
        factor103();
    }
}

function factor103 () {
    if (num % 103 === 0) {
        for (n = 0; num % 103 === 0; n++) {
            num = num / 103;
            console.log(num);
        } n = ('103^' + n);
        document.getElementById('answer103').innerHTML = n;
        factor107();
    } else {
        factor107();
    }
}

function factor107() {
    if (num % 107 === 0) {
        for (n = 0; num % 107 === 0; n++) {
            num = num / 107;
            console.log(num);
        } n = ('107^' + n);
        document.getElementById('answer107').innerHTML = n;
        factor109();
    } else {
        factor109();
    }
}

function factor109() {
    if (num % 109 === 0) {
        for (n = 0; num % 109 === 0; n++) {
            num = num / 109;
            console.log(num);
        } n = ('109^' + n);
        document.getElementById('answer109').innerHTML = n;
        //factor113();
    } else {
        //factor113();
    }
}
