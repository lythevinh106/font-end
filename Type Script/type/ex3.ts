
//***** param with array  vs es6*/

import { read } from "fs";


function getTotal(param:number,...arr1:number[]):number{

    return arr1[arr1.length-1];

}


///***note */ khong can truyen vao [];

console.log(getTotal(1,6,8,9))////1  la param



/////overloading: ghi de ham

function addNew1(a:number,b:number):number;

function addNew1(a:string,b:string):string;

function addNew1(a:any,b:any){
    return a+b;

}



/////class



class Person {

   ////in Ts : default public
name:string;
  private age:number;
  protected gender:string;
  readonly address:string;/////chi doc, khong the gan lai ke ca ke thua hay khong

    constructor(name:string, age:number, gender:string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }


    get getCurrentAge(){ ///// like setter in oop
     return this.age;
    }
 ///// like setter in oop
    set setCurrentAge(age2:number){
        this.age=age2;
    }
  
    greet() :string{
     return "123"
    }
  
    sayGender() {
      console.log(`I identify as ${this.gender}.`);
    }


   
  }



  //////ke thua,static : trong tai lieu....



  ////--interface: giong vs type. khi trong interface thừa thuong tinh thi k bi loi
  interface IPerson{
      firstName:string,
      readonly age:number,////k the update lai no, trong type cua co
      address:string

  }

  interface IPerson2{
    name2:string,
   

}


  function getFullName(person: IPerson){
        return person.firstName+person.age
  }

let person4: IPerson = {
    firstName: "John",
    age: 30,
    address: "123 Main St"
  };
  
  const fullName = getFullName(person4);




  /////gop interface' bang 2 cach

  type Person3=IPerson & IPerson2;

  interface Person4  extends IPerson ,IPerson2{} ; 


  //////generic tuong tu nhu mang binh thuoc

interface Student{
       id:number,
       name?:string
}

let arr5: Array<number>=[1,2,3,4]
let arr6: Array<Student>=[{id:1,name:"abc"},{id:2}]

interface Student2<T>{
   length:number;
   [index:number]:T,

}


const numberList: Student2<string>=["nguyen","van"];


//////key of:lay ra cac key cua kieu du lieu nào do


////mapped type









