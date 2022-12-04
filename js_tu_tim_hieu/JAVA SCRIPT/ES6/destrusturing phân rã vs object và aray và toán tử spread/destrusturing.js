
////array

// cach bin thuong
var array =['JS','PHP',"ruby"];

var a=array[0];
var b=array[1];
var c=array[2];

console.log(a,b,c);


/// trong Es6

var array2 =['JS','PHP',"ruby"];
var [b,c,d]=array2
var [b,,d]=array2// k lay c
var [a,...rest]=array2;// lay ra tat cac cac bien tru bien a
var [a,b,...rest2]=array2;
console.log(b,c,d);

console.log(rest)




console.log('day la phan object \n \n')
//////////vs object////////////////////

var Course ={
    name:'JS',
    price:1000,
    image:'image adress',
    children:{
        name:'react'
    }
};


var{name,price}=Course;// lay ra name vs pirce

var {name, ...rest}=Course// tra ve 1 object moi k cos name

 console.log(name)
 console.log(rest)/

console.log(name,price)


var{name:parentName ,children:{name}}=Course// gan name cu thanh parent NAme, sau do lay ra name trong object con

console.log(name)// name o dau la cua children

var{name,description='defaught'}=Course// gan truc tiep gia tri k ton tai bang 1 du lieu
console.log(description)




/////////////////



function loggger(...params){// params tro thanh mang
    console.log(params)
}


console.log(loggger(1,2,3,4,5,6,7,8));




function loggger2(a,b,...params){// params tro thanh mang
    console.log(params)
}


console.log(loggger2(1,2,3,4,5,6,7,8));// layy tat ca cac so tru 2 so dau





console.log('logger 4')

function loggger4([a,b, ...rest]){
    console.log(a);
    console.log(b);
    console.log(rest);
}


loggger4(
    [2,5,6,9,6,9,2,4,,5]
)












console.log('logger 3')

function loggger3({name,price, ...rest}){// params tro thanh mang
      console.log(name);
      console.log(price)
      console.log(rest)
}


loggger3({
    name:'JS',
    price:1000,
    description:'content'
})












//////spread



// noi mang bang spread
var array = ['js','ruby','php' ];


var array2 =['reactJs' , 'Dart'];


var array3=[...array2,...array];

console.log('noi mang bang spread')
console.log(array3);
// noi object bang spread



var obj1={
    name:'js'
}


var obj2={
    price:1000
}


var object3={
    ...obj1,
    ...obj2,
}


console.log('noi object bang spread')


console.log(object3)



////// vd thuc te 





var defaughtConfig={
    api:'http://domain-trang-khoa-hoc',
    aptVersion:'v1',
    orther:'orther'
}


var exerciseConfig={
      ...defaughtConfig,
      api:'https://domain-trang-bao-tap',// nó sẽ lấy tất cả các thuộc tính của r defaughtConfig trừ api

  
      

}

console.log('vd ve bai tap')
console.log(exerciseConfig)





//////



var arr5 = ['js','php','ruby'];



function logger5(...rest){

  for(var i=0;i<rest.length;i++){
      console.log(rest[i])
  }

}


console.log('logger 5')
logger5(...arr5);













