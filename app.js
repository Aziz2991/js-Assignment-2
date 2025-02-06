// // Chapter 04
// // Question no 1
// let studentName = 'Abdullah';
// let schoolName = 'G.H.S.School';
// let number = 123;
// let isAvailable = true;
// let Student = 'Munir', age = 24, courseName = 'Web and Mobile App Development', rollNo = 76874;
// // Question no 2
// // legal variables
// let $name = 'Aziz';
// let _city = 'Mianwali';
// let mobileNumber = 3346567943;
// let Batch = 15;
// let professtion = 'student'
// //Illegal variables
// // let 23name = 'Aziz';
// // let mobile Number = 3347656435;
// // let var = 'hunting';
// // let function = true;
// // let alert = 34564;
// // Quest no 3
// // a
// document.write(`<p>A heading stating " Rules for naming JS  variables"</p>`);
// // b
// document.write(`Variables name can only contain letters,number,dollar signs and underscores. For example $name,_name or name<br>`)
// // c
// document.write(`Variable names are case sensitive <br>`);
// // e
// document.write(`Variable names should not be JS keyword`);
    // Chapter no 5
    // Quest no 1
    let a = 3;
    let b = 5
    let c =  a + b
    
    
    document.write(a + b);
    // Quest no 1(a)
    let d = 5;
    let e = 3;
    document.write(d - e);
    // Quest no 1(b)
    document.write(d * e);
    // Quest no 1(c)
    document.write(d % 3);

// Quest  no 3;
// a
let ab;
// console.log(ab)
// b
document.write(`Value after variable declaration is ${ab}`)
// c
let aba = 6;
// d
document.write(`Initial value is:${aba}`) 
// Quest  no e
aba = ++aba
console.log(aba)

// e

document.write(`Value after increment is:${aba}`)
// f
aba = aba + 7
console.log(aba);
// h
document.write(`Value after addition is: ${aba}.`)
// i
aba = --aba;
console.log(aba);
// j
document.write(`Value after decrement is:${aba}.`);
// k
aba = aba % 3;
console.log(aba);
// l
document.write(`Output: "The  remainder is :${aba}".`)
// Question no 4
let ticketPrice = 600;
let totalCost = 600 * 5;

document.write(`Total cost to buy 5 tickets to a movie is ${totalCost}PKR`)
// Question no 5
let number = 4;
document.write("<h1>Tabe of " + number + "</h1>`")
for(let i  = 0;i <= 10; i++){
    document.write(number + "x" + i + " = " + (number * i)
+ "<br>")}
// a
document.write("<h2> Tabe of " + number + "</h2>")
for (let i = 0; i <=20; i++){document.write(number + "x" + i + "=" +(number*i) + "<br>")};
// Question no 6
let celiusTemperatue = 25;
let farenheightTemperature = (25*9/5) + 32
// console.log(farenheightTemperature)
document.write(`${celiusTemperatue}&deg;C is ${farenheightTemperature}&deg;F`)
let farenheight = 80;
celiusTemperatue = (farenheight  - 32) * 5/9
console.log(celiusTemperatue)
document.write(`${farenheight}&deg;F is ${celiusTemperatue}&deg;C`)
// Question no 7
let item1Price = 50;
let item2Price = 80;
let quantityitem1 = 3;
let quantityitem2 = 7;
let shippingCharges = 500;
let fullCost = (item1Price * 3) + (item2Price * 7) + shippingCharges;
// console.log(fullCost)
document.write(`<h2>Shopping Cart </h2><br>`)
document.write(`Price of item 1  = ${item1Price}<br>`)
document.write(`Price of item 2  = ${item2Price}<br>`);
document.write(`Quantity of item 1 = ${quantityitem1}<br>`);
document.write(`Quantity of item 2  = ${quantityitem2}<br>`);
document.write(`Shipping Charges = ${shippingCharges}<br>`);
document.write(`The total cost of your  order is ${fullCost}<br>`);
// Question no 8
document.write(`<h1>Marks Sheet</h1>`)
let totalMarks = 100;
let obtainedMarks = 78;
let percentage = (obtainedMarks / totalMarks) * 100;
document.write(`Total marks:${totalMarks}<br>`);
document.write(`Marks obtained: ${obtainedMarks}<br>`);
document.write(`Percentage:${percentage}%<br>`);
// Question no 9
let totalUsDollars = 10;
let totalSaudiRiyals = 25;
let rate1UsDollar = 104.80;
let rate1SaudiRiyal = 28;
let totalCurrencyInPKR = (totalUsDollars * rate1UsDollar) + (totalSaudiRiyals * rate1SaudiRiyal);
document.write(`<h1>Currency in PKR</h1><br>`);
    document.write(`Total currency in PKR:${totalCurrencyInPKR}<br>`);
    // Question no 10
    let someNumber = 100;
    let newNumber = ((someNumber + 5) * 10)/2;
    document.write(`<h1>Calculation</h1><br>`);
    document.write(`The initial no is = ${someNumber}<br>`);
    document.write(`The newNumber or result all operation is = ${newNumber}<br>`)
    // Question no 11
    let currentYear = 2025;
    let birthYear = 1992;
    let age = currentYear - birthYear;
    
    // console.log(age)
    
    document.write(`<h1>Age Calculator</h1><br>`);
    document.write(`Current Year:${currentYear}<br>`);
    document.write(`Birth Year:${birthYear}<br>`);
    document.write(`Your age is:${age}<br>`)
    // Question no 12
    let radius = 20;
    let circumference = 2*3.142*20
    // console.log(circumference)
    let area = 3.142*(20*20)
    // console.log(area)
document.write(`<h1>The Geometrizer</h1><br>`);
document.write(`Radius of a circle:${radius}<br>`);
document.write(`The circumference is:${circumference}<br>`);
document.write(`The area is:${area}<br>`)

// Question no 13
let favouriteChocolate = 'chocolate chip';
let currentAge = 15;
let maximumAge = 65;
let estimatedAmount = 3;
let remainingAge = maximumAge - currentAge
console.log(remainingAge);
let dayin1year = 365;
let totalRemaingDay = dayin1year * remainingAge
console.log(totalRemaingDay);
let totalchocolate = estimatedAmount * totalRemaingDay
console.log(totalchocolate);
document.write(`<h1>The lifetime Supply Calculator</h1><br>`);
document.write(`Favourite Snack:${favouriteChocolate}<br>`);
document.write(`Current age:${currentAge}<br>`);
document.write(`Estimated Maximun Age:${maximumAge}<br>`);
document.write(`Amount of snacks per day:${estimatedAmount}<br>`);
document.write(`You will need ${totalchocolate} ${favouriteChocolate} to last you until
    the ripe old age of ${maximumAge}<br>`)
    // Chapter 6
    // Question no 1
    let f = 10;
    document.write(`<h1>Result</h1>`);
    document.write(`The value of f is:${f}<br>`);
    document.write(`The value of ++f is:${++f}<br>`);
    document.write(`Now the value of f is: ${f}<br>`)
    document.write(`The value of f++ is:${f++}<br>`)
    document.write(`Now the value of f is: ${f}<br>`);
    document.write(`The value of --f is: ${--f}<br>`);
    document.write(`Now the value of f is = ${f}<br>`);
    document.write(`The value of f-- is = ${f--}<br>`);
    document.write(`Now the value of f is = ${f}<br>`)

    // Question no 2
    let i = 2;
    let j = 1;
    let result = --i - --j + ++j + j--;
    console.log(result)

    i = 2;
    i = --i;
    console.log(i);
    i = --i - --b;
    console.log(i)

    




    // Question  no 3;
    let user = prompt('Enter your name');
    alert(`Welcome ${user}`)
    // Question no 5;

    let numbe = prompt('Enter number');
    numbe = parseInt (numbe) || 5;
    document.write(`<h2>Multiplication  table of ${numbe}</h2><br>`)
    for(let i = 0; i <= 10; i++){document.write(numbe + "x" + i + "=" +(numbe * i)+ "<br>");}
// Question no 6;
let subject1 = prompt('Enter first subject name:');
let subject2 = prompt('Enter second subject name:');
let subject3 = prompt('Enter third subject name:');

let totalMark = 100;
 let marks1 = prompt('Enter obtained marks for subject1');
 let marks2 = prompt('Enter obtained marks for subject2');
 let marks3 = prompt('Enter obtained marks for subject 3');

 let totalObtained = marks1 + marks2 + marks3;
 let totalMaxMarks = totalMark * 3;

 let percentag = (totalObtained /totalMaxMarks) * 100;
//  we create table

document.write(`<h2>Marks Sheet</h2>`);
document.write(`<table border='1' cellpadding='5' cellspacing='0'>`);
document.write("<tr><td>" + subject1 + "</td><td>" + totalMark + "</td><td>" + marks1 + "</td><td>" + ((marks2 / totalMark)*100).toFixed(2) + "%</td></tr>" );
document.write("<tr><td><b>Total</b></td><td><b>" + totalMaxMarks + "</b></td><td><b>" + totalObtained + "</b></td><td><b>" + percentag.toFixed(2) + "%</b></td></tr>");
document.write("</table>");

