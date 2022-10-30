// HOMEWORK 1

//1
let user1 = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};
console.log(user1.studentstatus);


//2
let cities = ['tbilisi', 'gori', 'qutaisi', 'batumi', 'telavi', 'zugdidi'];
for(let z of cities) {
    console.log(z);
}

//3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for(let i of numbers) {
    if(i>5) {
        console.log(i);
    }   
}

//4
let user = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
}
if (user.age < 20 && user.studentstatus == 'active'){
    console.log('Hello');
} else if (user.name == 'levani') {
    console.log('hello levani');
} else if (user.studentstatus == 'active' || user.age < 25) {
    console.log('hello world');  
} else {
    console.log('error');
}

//5
let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];
for (let i of array) {
    if (typeof i == 'string'){
        console.log(i);
    }
}

//6
let array1 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
for (let n=0; n<array1.length; n++) {
    let numbers = array1[n];
    for (let x=0; x<numbers.length; x++) {
        if (numbers[x] > 0) {
            console.log(numbers[x]);
        }
    }

}


//7
let array2 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for (let i of array2) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


//8
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
for (let items of users) {
    if (items.status == true) {
        console.log(items);
    }
}

//____________________________________________________________________________________
//____________________________________________________________________________________
//____________________________________________________________________________________

