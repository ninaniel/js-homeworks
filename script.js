// // HOMEWORK 1

// //1
// let user1 = {
//     firstname: "giorgi",
//     lastname: "smith",
//     age: 25,
//     studentstatus: "active"
// };
// console.log(user1.studentstatus);


// //2
// let cities = ['tbilisi', 'gori', 'qutaisi', 'batumi', 'telavi', 'zugdidi'];
// for(let z of cities) {
//     console.log(z);
// }

// //3
// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
// for(let i of numbers) {
//     if(i>5) {
//         console.log(i);
//     }   
// }

// //4
// let user = {
//     name: 'giorgi',
//     age: 20,
//     studentstatus: 'active'
// }
// if (user.age < 20 && user.studentstatus == 'active'){
//     console.log('Hello');
// } else if (user.name == 'levani') {
//     console.log('hello levani');
// } else if (user.studentstatus == 'active' || user.age < 25) {
//     console.log('hello world');  
// } else {
//     console.log('error');
// }

// //5
// let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];
// for (let i of array) {
//     if (typeof i == 'string'){
//         console.log(i);
//     }
// }

// //6
// let array1 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
// for (let n=0; n<array1.length; n++) {
//     let numbers = array1[n];
//     for (let x=0; x<numbers.length; x++) {
//         if (numbers[x] > 0) {
//             console.log(numbers[x]);
//         }
//     }

// }


// //7
// let array2 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
// for (let i of array2) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// //8
// let users = [
//     {username: 'giorgi', status: false},
//     {username: 'levani', status: false},
//     {username: 'anna', status: true}
// ]
// for (let items of users) {
//     if (items.status == true) {
//         console.log(items);
//     }
// }

// //____________________________________________________________________________________
// //____________________________________________________________________________________
// //____________________________________________________________________________________
// // homework#2

// 1

function positiveSum(...numbersS) {    
    let positiveSum = 0;
    for (let n of numbersS) {
        if (n>0) {
            positiveSum = positiveSum + n;
        }
    }
    return positiveSum;
}
let sum = positiveSum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(sum);


// 2
// let array = [10, 50, 6, 7, 8, 11, 6, 3, 9]
// function arraySum(...array) {
//     let numSum = 0;
//     for (let i=0; i<array.length; i++) {
//         numSum = numSum + array[i];   
//     }
//     return numSum;
// }
// let result = arraySum(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(result);

//3
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  function checkUser() {
    if (user.isloggedin == true)  {
        // return (user.firstname + " " + user.lastname);  
        return `${user.firstname} ${user.lastname}`;
    } else  {
        return false;  
    }
  }
  let result2 = checkUser();
  console.log (result2);

//4
function newFunction(arRay) {
    let max =0;
    for (let m of arRay) {
        if (m> max) {
            max=m;
        }
    }
    return max;
}

    let maxValue = newFunction([45, 62, 148, 12, -14, 26, 84, 325, 11, 8, -7, 23]);
    console.log(maxValue);
    // ან
    //  function max(...numbers) {
    //     console.log(Math.max(...numbers));
    //  }
    //      max(45, 62, 148, 12, -14, 26, 84, 325, 11);
// 

// //5
function minusTen(...arrAy) {
    for (let i of arrAy) {
        if (i < 10) {
            console.log(i);      
        }
    return i;
    }

}

let resultA =  minusTen(1,2,4,10,34,5,7,87);
console.log(resultA);

//6
// let arraY =[1,2,3,4,5,6,7,8,9,10];
// for (let x=0; x<arraY.length; x++) {
//     if (x == 5) {
//         console.log(arraY[x]);
//         break;
//     }
// }

// //7
let arrAay = ['html', 'css', 'python', 'javascript', 'bootstrap'];
for (let y=0; y<arrAay.length; y++) {
    if (arrAay[y].length > 4 && arrAay[y].includes('av')) {
        console.log(arrAay[y]);
    }
}
//ან 
// for (let y of arrAay) {
//     if (y.length >4 && y.includes('av')){
//         console.log(y);
//     }
// }


// arrAay.forEach(function(item) {
//     if (item.length > 4 && item.includes('av')) {
//         console.log(item);
//     }
//    }
// 

