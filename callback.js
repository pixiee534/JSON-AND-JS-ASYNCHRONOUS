function myDisplayer(value){
    console.log(value);
}
function myCalculator(no1,no2,myCallback){
    let sum= no1+no2
    myCallback(sum);
}
myCalculator(10,15,myDisplayer);