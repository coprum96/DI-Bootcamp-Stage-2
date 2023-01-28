var day = 5;   //change and try with different values

switch(day)
{
  case 1:      //if day = 1
    console.log("Monday");
    break;
  case 2:      //if day = 2
    console.log("Tuesday");
    break;
  case 3:      //if day = 3
    console.log("Wednesday");
    break;
  case 4:      //if day = 4
    console.log("Thursday");
    break;
  case 5:      //if day = 5
    console.log("Friday");
    break;
  case 6:      //if day = 6
    console.log("Saturday");
  case 7:      //if day = 7
    console.log("Sunday");
    break;
  default:    //if day doesn't match any of above
    console.log("Invalid");
}


console.log(3 || 'Orange');
console.log('' || 'Orange');
console.log(true || 0);
console.log(undefined || null);

var person = {
    name: 'Jack',
    age: 34
  }
  console.log(person.job || 'unemployed');
  // 'unemployed'

  var person = {
    name: 'Jack',
    age: 34
  }
  console.log(person.age > 18 && 'Driving allowed');
  // 'Driving allowed'