//ex 3.1
let list=["Milk,", "Bread","Apples."];
console.log(list.length);
list[1]="Bananas";
console.log(list);

//ex3.2
let arr=[];
arr.push("milk");
arr[1]="Bread";
arr[2]="Apples";
arr.splice(1,1,"Bananas","eggs");
arr.pop();
console.log(arr);
arr.sort();
arr1=arr.indexOf("milk");
console.log(arr1);
arr.splice(1,0,"carrots","lettuce");
newArr=["juice","Pop"];
arr2=arr.concat(newArr);
arr3=arr2.concat(newArr);
console.log(arr3);

//ex3.3
arr=[1,2,3];
newArr=[arr,arr,arr];
console.log(newArr[1][1]);

//ex3.4
let myCar={
    make: "Toyota",
    model: "new",
    year: 2022
}
let color = "red";
myCar[color]="Red";
let forSale="forSale";
myCar[forSale]= true;
console.log(myCar.make + myCar.model);
console.log(myCar.forSale);

//ex3.5
let people={
    friends: []
}
let friend1={
    firstname: "khadijah",
    lastname: "Touseef",
    ID: 100
}
let friend2={
    firstname: "Areeba",
    lastname: "Javed",
    ID: 101
}
let friend3={
    firstname: "Aisha",
    lastname: "Rasheed",
    ID: 102
}
people.friends.push(friend1,friend2,friend3);
console.log(people);


//CHAPTER PROJECTS

//Manipulatin an Array
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
 {test: 'one', score: 55}, ['one', 'two']];
 theList.pop();
 theList.push("LAST");
 theList.shift();
 theList.unshift('FIRST');
 theList.splice(2,5,"MIDDLe","HELLOWORLd");
 console.log(theList);

// company product catalog
let inventory=[];
let item1={  name:  'juice' ,
            model:'fresh',
            cost: 150, 
            quantity: 15};
let item2 = {name:'chips',
            model:'fried',
            cost: 160,
             quantity: 35};
let item3 =   {name:'nimco',
            model:'raw',
            cost: 150, 
            quantity: 90};
inventory.push(item1,item2,item3);
console.log(inventory[2].quantity);







