///////tien doan gia tri

let count =5;////no se tien doan gia tri , kể cả với mảng

// count="25";//neu gan lai thi se bi loi



///////////object
let person:{};


let person2:{////dinh nghiax xong khoi tao lun,
     name:string,
     age:number
}={
    name:"eric",
    age:25
}

// person2.address="hoa vinh" se bi loi vi o tren chua co khai bao cho no


///////----Tuple Types: kieu rang buoc ki hon


/////phan tu dau tien la chuoi, thu 2 la number
let skill1: [string, number]=["chuoi1",25];

////
let skill2: [string, number,boolean?];////tham so k bat buoc phai dat o cuoi


skill2=["so2",2];




/////////--------enum: gan giong constant




//////---------any type: cho thanh moi loai , bo qua chekc type


let name2: any ="eric";
name2=5;


///////-----void : thuong dung vs function k tra ve thu gi

let sum1=(a:number,b:number):number=>{ ///bat buoc tra ve number
    return a+b;
}

let sum2=(a:number,b:number):void=>{ ///ham khong tra gi(nhung no van tra ve undifine doi voi express function)
   console.log("ham void")
}

/////-----never: khong bao h tra ve thu gi


function handleEx(err:string):never{
    throw Error(err);
}

handleEx("loi1");


////-----union type: tuong tu  nhu arrray (number | string)




////----alias type: dinh danh cho kieu du lieu

type type1=number|string|object|boolean;
type type2=number|string|object|boolean;

type type3="active"|"noActive"|1|2;


const ex=(param1:type1,param2:type2)=>{
  return param1;
}





