

// khi su dung option chaining khi không chắc chắn là key đó có  tồn tại hay không
const obj={
    name:'alice',
    cat:{
        name:'Dianah',
          cat2:{
            name:'vinh',

            cat3:{
                name:'lee'
            }
          }
    
}}







if(/* cach 1 obj.cat
    &&
    obj.cat.cat2&&
    obj.cat.cat2.cat3*/

    obj?.cat?.cat2?.cat3
    )
    {// kiem tra xem co cat hay khong 
console.log(obj.cat.cat2.cat3.name);}


/*vs array vs funcition*/ 


// obj.arr?.[index]// kiem tra xem co index do khong

// voi funcition


const obj2 ={
    getName(value){
        console.log(value)
    }
}


//obj2.getName(123);

obj2.getName?.(123);