

const mess1 : string ="hello";
  

console.log(mess1);

////**** */
const sum3 =(x:number,y:number)=>{
    return x+y;
};

console.log(sum3(3,6));


////**** */

let arr1:string[]=["a","b"];
let arr2:(string|number)[]=["a","b"];
////còn nếu không muốn mix type 
let arr3=["a","b",213];

arr1.push("c");
