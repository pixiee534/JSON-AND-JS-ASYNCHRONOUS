function myDisplayer(some) {
    console.log (some);
    }
    function sum(a, b) {
    var sum = a + b;
    myDisplayer(sum);
    }
    let myPromise = new Promise(function (myResolve, myReject) {
    let x =10 ; 
    if (x =2) {
    myResolve("OK"); 
    } else {
    myReject("Error"); 
    }
    });
    myPromise.then(
    function (value) { sum(10, 10); },
    function (error) { sum(error); } 
    );