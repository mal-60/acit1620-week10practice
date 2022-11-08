// alert("The rest of the page wouldn't load until you dismiss me!")
// console.log("Hello");


// for (let i = 1; i <= 10; i++) {
//     console.log(2 ** 1)
// }


// //     i ** 2 ++i
// // console.log(x)

// let i = 1;
// while (i <= 10) {
//     console.log(2 **1)
//     i++;
// }

// let input = "";
// let numInput = "";
// do{
// input = prompt("What is your name?");
//     // prompt always returns string
// // console.log(Number(input));
// numInput = Number(input);
// }
// // we need to convert the string to a number and check if ti was successfully converted
// // while(// user enters a number)
// while(!isNaN(numInput))
// console.log(input);
// ^ confused 

// while(Number(input) || input == 0)

// let input = "";
// do {
//     input = prompt("What is your name?");
// } while (!isNaN(Number(input)));

// // alert("Welcome" + input);
// alert(`Welcome ${input}`);

// let fruits = ["Apple", "Bananas"];
// fruits.push("Orange");

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// fruits.unshift('Mango');

// console.log(fruits);

// fruits.shift();

// console.log(fruits);

// console.log(fruits.includes("Apple"));

// console.log(fruits.indexof("Apple"));


// for (let i = 0; i < fruits.length; i++)
// {
//     console.log(fruits[i]);
// }

// for (let item of fruits)
// {
//     console.log(item);
// }



// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
//     gender: "male",
//     interests: ["music", "skiing"],
// };

// for (let prop in person)
//     {
//         console.log('My ${prop} is ${person[prop]}');
//     }

// console.log('My name is ${person.name[1]}. I am interested in ${person.interests[0]} and ${person.interests[1]}')



let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3];
let counter = 0;
for (let student of students)
{
    if (student.program === "CIT" && student.GPA > 3)
    {
        counter++;
    }
    // console.log(stud)
}
console.log(counter)


