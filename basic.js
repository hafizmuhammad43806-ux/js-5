function sayHello (){
    console.log("Hello Warld")
}
sayHello();




function shwname (name){
console.log(name)
}
shwname ("MUhammad");



function sum(a,b,){
    return a + b
}
console.log(sum(5,5));




function subtract(a , b){
    return a - b
}

console.log(subtract(5 , 3));





function square(num){
    return num * num
}

console.log(square(4));


function cube(num){
    return num * num * num
}

console.log(cube(5));


function getFullname(firstname,lastname){
    return firstname + "" + lastname
}

console.log("Muhammad","Ali");

// // //======================================//

function isEven(num){
    if (num % 2===0){
        return true;
    }else {
        return false;
    }
}

console.log(isEven(8));
console.log(isEven(9));


function ispositive(num){
    if (num > 10){
        return "positive";
    }else if (num < 5){
        return "Naqetive"
    }else {
        return "Zero"
    }
}

console.log(ispositive(11));
console.log(ispositive(4));
console.log(ispositive(7));



function finGreater(a,b){
    return Math.max(a,b);
}
console.log(finGreater(6,10));




function finGreater(a,b){
    if (a > b){
        return a;
    }else {
        return b;
    }
}

console.log(finGreater(10,20));


function canVote(age){
    if(age >= 18){
        return "Eligible";
    }else {
        return "NOtEligible"
    }
}

console.log(canVote(20));







function getGrade(Marks){
    if (Marks >= 80){
        return  "A"
    }else if(Marks >= 70){
        return "B"
    }else if (Marks >= 60){
        return "c"
    }else if (Marks >=50){
        return "Fill"
    }
}

console.log(getGrade(85));


function getlength(str){
    return str.length;
}

console.log(getlength("Muhammad Ali"));



function toUppercase(str){
    return str.toUpperCase();
}

console.log(toUppercase("muhammad bin mubarak"));


function getfirst(str){
   return str[0];
}

console.log(getfirst("Muhammad"));



function getlast(str){
   return str[str.length -2];
}

console.log(getlast("Muhammad"));

function islongWord(Word){
    return Word.length > 5 ;
}

console.log(islongWord("Muhammad"));


function calculateDiscount(price,discount){
    return price- (price * discount / 100);
}

console.log(calculateDiscount(1000,20));

function calculatAge(BirthYear , currentYear){
    return currentYear - BirthYear;
}

console.log(calculatAge(2005,2026));


function convertToMinutis(hours){
    return hours * 60 ;
}

console.log(convertToMinutis(1));

function getlargest(a,b,c){
    return Math.max (a,b,c);
}

console.log(getlargest(30,45,70));


function calculater(a,b,opp){
if ( opp==="+"){
    return a + b;
}else if (opp==="-"){
    return a-b;
}else if( opp==="*"){
    return a * b;
}else if (opp==="/"){
    return a/b;
}
};

console.log(calculater(30,10, "+"));
console.log(calculater(3,10, "-"));
console.log(calculater(6,10, "*"));
console.log(calculater(40,10, "/"));









