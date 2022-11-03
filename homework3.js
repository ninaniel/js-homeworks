// 1
let array = [5, 25, 89, 120, 36];
array.push('javascript', 'python');
array.unshift('html','css');
console.log(array.length);


array.shift();
array.pop();
console.log(array);


//2
let fruits = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
console.log(fruits.length);
fruits.push('ვაშლი', 'ანანასი');
fruits.unshift('საზამთრო');
console.log(fruits.length);
fruits.splice(2,0, 'მანგო');
fruits.shift();
fruits.pop();
console.log(fruits.length);

//3
let array03 = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray = array03.map(function(x) {
    return x/3
}
)
console.log(newArray);

//4
let array04 = ['hello', 125, 'javascript', 'html', 43, 'css', 'scss', 'bootstrap', 88, 59, 'python'];
let numbersFromArray = array04.filter ((item) => typeof item === 'number' );
console.log(numbersFromArray);

//5
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let langFilter = languages.filter ( (langues) => langues.length >3 );
console.log(langFilter);

//6

let item = [12, 'google', 32, null, 'yahoo', 25];
let newItem = item.map(function (items) {
    if (typeof items === 'number') {
        return items * 2 ;
    } else if  (typeof items === 'string') {
        return items.toUpperCase();
    } else {
        return items;}
    })
console.log(newItem);

//7
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let neWords = words.filter ( (y) => y.includes('M') || y.includes('m'));
console.log(neWords);

//8
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let oneArray = arr1.concat(arr2);
let finalArray = oneArray.concat(arr3);
console.log(finalArray);

//9
let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach ((arrSum) => {
    sum += arrSum;

})
console.log(sum);

//10
let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
let positives = numbers.filter ((pos) => pos >0);
console.log(positives);

//11
let array11 = [-1, -2, -3, 4];
let check = array11.some ((n) => n >0);
console.log(check);

//12
let array12 =[23,45,32,5,87,7,3,98].sort((x,y)=> y-x);
console.log(array12);
console.log(array12[array12.length-1]);

//13
let array13 =[1, 2, 3, 4, 5];
array13.splice(3,0, 'a', 'b', 'c');
console.log(array13);