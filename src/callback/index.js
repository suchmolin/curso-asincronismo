function suma(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, suma));



console.log('Hola Javascript');
setTimeout(function () {
    console.log('Hola Javascript1');
},2000);



function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout (gretting, 2000, "Emma");
