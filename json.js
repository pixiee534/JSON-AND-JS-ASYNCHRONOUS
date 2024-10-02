var myObj={Name:"Akshyani",Age:"13", Grade:"8"  };
var myJSON= JSON.stringify(myObj);
var newObj = JSON.parse(myJSON);
console.log(newObj.Name);
console.log(newObj.Age);
console.log(newObj.Grade);