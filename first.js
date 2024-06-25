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
 */
let el = [1,2,4,5,7,10];
el.splice(2,2,102,102);
console.log(el);