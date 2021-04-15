//TODO 
// - Create a function which creates an array from 0 to the value of the number
//   then store the odd values associated in an array and provide the sum of the 
//   odd numbered array
// - Create an array which filters out string values and prints integer values 
// - Create an array which recieves an object and produce a subtraction of the 
//   values assigned to two elements declared within the object 

// Task 1 
//-------------------------------------------
// A function which is passed an integer and 
// returns the sum of all odd numbers below
// that integer. 
//-------------------------------------------
function addOddNumbers(a)
{
    if(typeof a === "number")           //-------------------------------------------
    {                                   // An if statement to check that the value 
    let i = 0;                          // being passed is a number value, protect 
    let arr1 = [];                      // against errors.
        for(i=0; i <= a; i++)           //-------------------------------------------
        {
            if(i % 2 !== 0)             //-------------------------------------------
            {                           // For loop to increment through the array 
                arr1.push(i)            // and push the value to a new array (arr1)
            }                           //-------------------------------------------
        }
        const add = (t, i) => t + i;    // Produce an addition of array values 
        var sum = arr1.reduce(add)

        return sum
    }
    else                                                        //-------------------------------------------
    {                                                           // Provide an error message in the code, 
        console.log("ERROR, please provide a number value")     // given that a value other than a number  
    }                                                           // has been passed 
}                                                               //-------------------------------------------

console.log(addOddNumbers(5))  //-> 9  // 1 + 3 + 5 = 9
console.log(addOddNumbers(13)) //-> 49 // 1 + 3 + 5 + 7 + 9 + 11 + 13 = 49

// Task 2
//-------------------------------------------
// A function which is passed an array mixed
// with integers and strings and produces a 
// new array which contains only integers 
//-------------------------------------------
function filterArr(arr)                                         
{
    return arr.filter(x => typeof x === "number")
}
console.log(filterArr([1, 2, "a", "b"]))
console.log(filterArr([1, 2, "aasf", "1", "123", 123]))

// Task 3
//-------------------------------------------
// A function which is passed an object and 
// produces a subtracted value based on the 
// values associated with "likes" and
// "dislikes"
//-------------------------------------------
function getCount(obj)
 {
    return obj.likes - obj.dislikes
 }

 console.log(getCount(counts={ likes: 13, dislikes: 0}))// -> 13
 console.log(getCount({ likes: 2, dislikes: 23 }))// -> -21
 console.log(getCount({ likes: 100, dislikes: 100 }))// -> 0