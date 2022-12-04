



/*function loogger(log){/// day là hàm binh thường
    console.log(log);
}



loogger('messsage')
*/

const logger =(log)=>{
    console.log(log);
}

logger('vinh')


// cach2
const logger2 =log=>console.log(log);// neu co 1 doi so thì k cần ngoặc


logger2('vinh')



const sum=(a,b)=>a+b;// đây là return thăng ra



console.log(sum(2,2));


const sum2=(a,b)=>({a: a,b: b});// đây là return object

console.log(sum2(2,3));





// vd 3


const course={

    name: 'js',
    getname: function(){

        return this.name;// this o day la goi lai chinh cai ham cha o day là 1 funcition
                //nhung arrow funciton k đc dùng ở đây đc
    }
}

console.log(course.getname());




  const Course =function(name, price){// k thể dùn arrow functon o trong  contructor

    this.name=name;
    this.price=price;
  }


  const jsCourse =new Course('js',1000);
  


  console.log(jsCourse)