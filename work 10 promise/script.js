// promise ნიშნავს რომ არ ვიცი მივიღებ თუ არა პასუხს

// 1) pending
// 2) fulfilled: resolve ან reject



fetch("https://reqres.in/api/users?page=2")
.then (function(response) {
    console.log("ok");  //თუ მივა წარმატებით
})
.catch(function(reject ) {
    console.log("error");
})
console.log(response);

let lotteryPromise = new Promise(function(resolve,reject) {
    setTimeout (function() {
        if (Math.random() >= 0.5) {
            resolve ("u win")
        } else {
            reject ("u lost")
        }
    }, 3000)

})

lotteryPromise
.then(response => console.log(response))
.catch(error => console.log(error));



/// ფრომისს ვიყენებთ ასინქრონული ოპერაციებისთვის , fetch მაგალითად , რადგან აქვს then და catch
///js ჯერ კითხულობს სინქრონულ კოდს, შემდეგ ასინქრონულს 
let wait = function(seconds) {
    return new Promise(function(resolve) {

    })
}