/*console.log("hello duke");
const student = {
    age : 20,
    fullName : "dukie",
    cgpa : 9.4,

};
student['age'] = student['age'] +1;
console.log(student['age']) //


const profile = {
    name : "shradha kappro",
    follower :true,
    post : 195,
    following : 4,


};
console.log(profile);

let a= 6;
let b= 5;


let cond1 = a > b;
let cond2 = a === 6;
console.log("cond1 && cond2",cond1 && cond2);
console.log("cond1 // cind2",cond1 || cond2); 
let mode = "dark";
let color;

if(mode ===  'dark') {
    color='black';
}
if(mode === 'white'){
    color = 'white';
}
console.log(color); 
let num = 11;
if(num %2 === 0){
    console.log(num,"even  number");

}
else{
    console.log(num,"odd number");
}
    
   // this is a ternary operator
let age = 29;
 let result =age >=18 ?"adult":"not an adult";
console.log(result); 



const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1

let name =prompt("enter a  number ");
if(name %5== 0){


console.log(name,"is a multiple of 5" );
}
else{
    console.log('not a multiple ');
}
let score = prompt("scores");
if(score >= 80 && score <=100){
    console.log("A+");
}
else if(score >=70 && score <=89)   
    console.log("b");
else if(score >= 60 && score <=69)
    console.log("c");
else if(score >=50 && score <=59)
    console.log("c");
else {
    console.log("fail");
}

for(i=0;i<=100;i++)
    {
        if(i%2==0){
            console.log(i);
        }
}
let gamenum = 25;
let usernum = prompt("enter the nyumber");
while(gamenum != usernum)
    {
         usernum =prompt("enter number again");
    }
    console.log("u guessed it right");
 
   let obj ={
    product : 'pen' ,
    price : 10,
   }
   let output = `the cost of ${obj.product} is ${obj.price}`;
   console.log(output);
      
    let username =prompt("enter your name ");
    let strname =  "@" + username + username.length;
    console.log(strname);
    
   let cities = ['delhi', 'mumbai', 'chennai', 'calcutta'];
   for(let el of cities){
    console.log(el);
   } 
  let marks = [85,97,44,37,76,60]
  let sum= 0;
  
  for(let el of marks){
    sum += el;
  }
  console.log(sum);   
  avg= sum/marks.length ;
  console.log(avg);
\
 let items = [600,900,655,300,500];
 let i = 0;
 for(let val of items){
    console.log(`value at index ${i} is ${val} `)
    let offer = val/10;
    items[i] = items[i]  -offer;
    console.log(`price =  ${items[i]}`);
    i++;
 }
 
let el = [1,2,4,5,7,10];
el.splice(2,2,102,102);
console.log(el); 

function sum(n,m){
    console.log(n+m);

}
sum(2,3);


//function
function sum(x,y){
    s = x+y;
    return s;
}
 let val = sum(2,4);
console.log(val);

// arrow function 
const arrowfucntion= (a,b) =>{
    console.log(a+b);
}
arrowfucntion(2,9);

const multi = (a,b)=>{
   return a*b;
};

function countvowels(str){
    let count = 0;
    for(const char of str){
        if(char ==="a" ||char === "e" || char ==="i" || char ==="o"|| char ==="u" ){
            count++;
        }
    }
    console.log(count);
}

// call backl function 

let arr = [1,23,5,6,7];
arr.forEach(function  printval(val) {
    console.log(val);
});



let  arr = ['delhi','pune','chennai','mumbai'];
arr.forEach((val ,index , arr)=> {
    console.log(val.toUpperCase() ,index , arr);
}
)

arr = [2,3,4,5,6];
arr.forEach(( (val) => {
    console.log(val**2);
    
})
);


// map method 
arr = [23,45,67,87];
 let newarr = arr.map((val) =>{
    return val*2;
                                            // map gives us a new array and  the orignal array remains same 
})
console.log(newarr);

// filter method
arr = [23,34,20,23,10];
let newarr = arr.filter((val) => {
    return val % 2== 0;
}               //orignal array remains the same new filtered array banti h 
);
console.log(newarr);

// reduce function

let arr = [1,2,3,4];
let sum  = arr.reduce((prev , curr) => {
    return prev + curr;
}                   //this is for sum 
)
console.log(sum);

let arr  = [2,5,6,7];
let num = arr.reduce((prev ,curr ) =>
{                   // find the greatest number in array
    return prev > curr ? prev :curr ;
})
console.log(num);

let arr = [50,60,80,90,96,98];
let result = arr.filter((Val) =>{
    return Val > 90;
})
console.log(result); 

let n = prompt("enter a number");
let arr =[];
for(let i = 1;i<n ;i++){
    arr[i-1]= i;
}
console.log(arr);
let product = arr.reduce((prev,curr) =>{
    return prev *curr ;

})
console.log(product);

let heading = document.getElementById("heading");
console.dir(heading);
let classes = document.getElementsByClassName("class");
console.dir(classes);
let tagname= document.getElementsByTagName("p")
console.dir(tagname);
let names = document.querySelector("p");
console.dir(names);
let allnames = document.querySelectorAll("p");
console.dir(allnames);
*/
// inserting elements in js 
let newheading = document.createElement("h1");
newheading.innerHtml = "<i>hi, I am new!</i>";
document.querySelector("body").prepend(newheading);
