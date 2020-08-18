'use strict';

//1
function max(x, y) {
    if (x > y) {
        return x;
    } else if (x < y) {
        return y;
    }
}
console.log( max(0, -1) );

//2
function min() {
    let minNumber = arguments[0];
    let number = 0;
    for (let i = 0; i < arguments.length; ++i) {
        number = arguments[i];
        if (number < minNumber) {
            minNumber = number;
        }
    }
    return minNumber;
}
console.log( min(0, -1, 100, 500, 100500) );

//3
let users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 11
    },
    {
        firstName: 'Jack',
        lastName: 'Daniel',
        age: 12
    },
    {
        firstName: 'Joe',
        lastName: 'Blind',
        age: 13
    },
    {
        firstName: 'Mary',
        lastName: 'Smith',
        age: 14
    },
    {
        firstName: 'Leeroy',
        lastName: 'Jankins',
        age: 15
    },
    {
        firstName: 'Kate',
        lastName: 'Steevense',
        age: 16
    },
    {
        firstName: 'Samuel',
        lastName: 'Colt',
        age: 17
    },
    {
        firstName: 'Jack',
        lastName: 'Black',
        age: 18
    },
    {
        firstName: 'James',
        lastName: 'Hatfield',
        age: 19
    }
];

let youngerUsers = users.filter( item => item.age < 18 );
console.log(youngerUsers);

let usersWithFullname = users.map(item => {
    let newItem = {...item};
    newItem.fullName = item.firstName + ' ' + item.lastName;
    return newItem;
});
let usersWithFullnameOnly = users.map(item => {
    let newItem = {};
    newItem.fullName = item.firstName + ' ' + item.lastName;
    return newItem;
});

console.log(usersWithFullname);
console.log(usersWithFullnameOnly);

//4
function customShift(arr) {
    const retArray = [];
    for (let i = 1; i < arr.length; i++) {
        retArray.push(arr[i]);
    }
    return retArray;
}
console.log(customShift(users));

//5
function customPush(arr) {
    let retArray = [...arr];
    for (let i = 1; i < arguments.length; i++) {
        retArray = [...retArray, arguments[i]];
    }
    return retArray;
}
let extendedArray = customPush(users, {firstName: 'Ivan', lastName: 'Ivanov', age: 30},
    {firstName: 'Obi-wan', lastName: 'Kenobi', age: 50});
console.log(extendedArray);

//6
function extend() {
    let sourceObject = arguments[0];
    let returnObject = {...sourceObject};
    for (let i = 1; i < arguments.length; i++) {
        for (let propName in arguments[i]) {
            returnObject[propName] = arguments[i][propName];
        }
    }
    return returnObject;
}
let source = {firstname: 'Tom', age: 10};
let s = extend(source, {firstname: 'John', age: 12}, {lastname: 'Doe'});
console.log(s);

//7
function setComment(date, message, author = 'Anonymous') {
    if (!arguments[0] || !arguments[1]) {
        alert('данные переданы некорректно');
        return;
    }
    console.log(`${author}, ${date}\r\n${message}`);
}
setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');
setComment('2016-11-02');

//1.1
function createTimer() {
    let time = performance.now();
    return function () {
        let timeEnd = performance.now();
        let retValue = timeEnd - time;
        return (retValue);
    }
}
let timer = createTimer();
alert('!')
alert( timer() );

//1.2
function createAdder(initialParam) {
    return function(addingParam){
        let retVal = initialParam + addingParam;
        return retVal;
    }
}

let hello = createAdder('Hello, ');
alert( hello('John') );
alert( hello('Harry') );

let plus = createAdder(5);
alert( plus(1) );
alert( plus(5) );



