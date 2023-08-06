//Galal Moahmed Galal
//Back end Nodejs G1 Mansoura University
//task js 0.1

//Fizz Buzz Game


for(var i = 0 ; i<50 ; i++){
    if
        (3%i == 0)
        console.log("Fiss");
    else if
    (5%i == 0)
        console.log("Buzz");
    else if
    (15%i == 0)
        console.log("Fiss Buzz");
}


// check two given numbers and return true if one of the number is 50 or if their sum is 50


function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))//true
console.log(test50(20, 50))//true
console.log(test50(20, 20))//false
console.log(test50(20, 30))//true
