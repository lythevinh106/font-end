// dịnh nghĩa key cho value object 




//cach1
var name='JS';
var price=1000;



var Course ={

    name: name,
    price:price,
    getName:function(){
          return this.name;
    }
};


console.log(Course)

console.log(Course.getName());

// trong es6


var Course2 ={

     name,
      price,
    getName(){
          return name;
    }
};


console.log(Course2)

console.log(Course2.getName());



///cach khac
var fieldName='name'
var fieldprice='price'


const Course3={



    [fieldName]:'JS',
    [fieldprice]:1000,


}


console.log(Course3)


