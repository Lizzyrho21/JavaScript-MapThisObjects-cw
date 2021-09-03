console.log("sanity");

// 1. Use .map to create a new array of objects where each object has a property for ```petnumber``` and ```pettype``` 
// based on the elements in the array. Print the new array of objects.
// ```

// let pet_objects = []; // new array to hold objects you produce
exercise1 = () =>{ 
let petTypes = ["dog", "cat", "pig", "hamster"]; // array of objects
// using the .map method
let pet_objects = petTypes.map( 
    (element, index) => {
        return ({pet_number: index, pet_type:element});
    }
);
console.log(pet_objects);
};
exercise1();

// #### Exercise 2:
// 2. Use ```.filter``` to create an array of pet objects that only holds the hamsters.

// ```


// let hamsters = []; // new array to hold objects
// ```
// 
// exercise2 = () => {
let pets = [ //an ARRAY of objects
    {
      name: 'Spot',
      type: 'Hamster'
    },
    {
      name: 'Harry',
      type: 'Hamster'
    },
    {
      name: 'Kitty',
      type: 'Cat'
    },
    ];
   

// let hamster = [];
// for(index=0; index < pets.length; index++)
// {
//     let idx = pets[index].type; // this works.. why is it not working with filter...
//     if(idx === 'Hamster')
//     {
// hamster.push(idx).type;
//     }
// };
// console.log(hamster);
exercise2 = () => {
let hamster = pets.filter(
    (element, index) => {
        return pets[index].type === 'Hamster';
    }
);
console.log(hamster);

}
exercise2();




// let type = pets.forEach(
//     (index) =>
//     {
//      pets[index];
//     }
// );
// console.log(type);


    // console.log(pets[0].type); // this is an array WITH objects.
//     let hamsters = pets.filter(
//         (index) => {
//             return pets[index].type = 'Hamster';
//         }
//     );
//     console.log(hamsters);
// //};

//exercise2();

   
    // let hamsters = pets.filter(
    //     (type) =>
    //     {
    //         return (type === ));
    //     }
    // );
    // console.log(hamsters); 

//     #### Exercise 3:

// Write a function that takes a string and returns total character count of letters for all strings in the sentence. 

// Use ```.reduce``` return this count.  Hint: See ```.split()``` and string ```length``` property.

// sentence = (string) =>{
// let split = string.split("");
// console.log(split.length);

   



// };

exercise3 = () => {
let string = "Hello there It is so nice to see you today. I just wanted to let you know you are GREAT!!";
let split = string.split(""); // split by character into sep arry
let count = split.reduce( // create a variable that reduces the split
    () => // two parameters total and index 
    {
        return split.length; 
    }
);
console.log(count);
};
exercise3();

//console.log(sentence("Hello there It is so nice to see you today. I would like to let you know you are so beautiful. have a nice day")); // debug.. it returns the string 


// #### Exercise 4: 
// Use `map` to take an array of words in lower-case 
// and returns an array of the strings where *every other word* is in all caps.
//  Then use `foreach` to print out the new array.


// ex: 
// `hey pal, lets javascript together sometime` // => "HEY pal, LETS javascript TOGETHER sometime"



exercise4 = () => {
let string = "HEY PAL, LET'S JAVASCRIPT TOGETHER SOMETIME!".toLowerCase(); // a certian string
let split = string.split(" "); // split the string by words 
let capital = split.map( // set a varivale with the string.map()
    (element, index) => { // pass an index parameter to use 
          if (index % 2 === 0) // conditional checks for an even numbers
        {
            return split[index].toUpperCase(); // if EVEN return uppercase
        }
        else {
            return split[index].toLowerCase(); // if ODD return lowercase
        }

       
    }
); 
console.log(capital); //log the results!
};

exercise4();
