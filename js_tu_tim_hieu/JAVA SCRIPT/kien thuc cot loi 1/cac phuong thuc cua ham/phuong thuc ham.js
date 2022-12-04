















/*
1.forEach()



var courses=[
    {
        id:1,
        name:'js',
        coin:250
    },


    {
        id:2,
        name:'html',
        coin:0
    },
    {
        id:3,
        name:'ruby',
        coin:0
    },
    {
        id:4,
        name:'php',
        coin:400
    },
    {
        id:5,
        name:'react',
        coin:500
    }

];



courses.forEach(function(index,course){
     
     console.log(index,course);
});


2.every: tra ve kieu booolen: thuong dung de kiem tra tat cac phan tu thoa man 1 dieu kien nao do


var isFree = courses.every(function(course,index){
     
   return course.coin===0;// kiem tra xem coin co bang 0 hay 0

});


console.log(isFree);




3 some: chir can 1  ong thoa man 1 dieu kien nao do thi tra ve true

var isFree = courses.some(function(course,index){
     
   return course.coin===0;// kiem tra xem coin co bang 0 hay 0

});


console.log(isFree);





4.find: tim kiem phan tu va tra ve phan tu dau tien no tim thay con nguoc lai la undified


var search = courses.find(function(course,index){
     
   return course.name==='react';

});


console.log(search);


4.filter:tim kiem phan tu va tra ve tat ca phan tu  no tim thay con nguoc lai la undified

var search = courses.filter(function(course,index){
     
   return course.coin===0;// kiem tra xem coin co bang 0 hay 0
   console.log(search);

});




5----phuong thuc map: tao ra 1 mang moi tu mang cu da cos va lay cac thuoc tinh or suwa xoa...co cac phan tu bang nhau


function courseHandler(course,index,originArray){

    return {
        id:course.id,
        name:`khoa hoc: ${course.name}`,
        coin: course.coin,
        cointText: `gia ${course.coin}`,
        index:index,
        originArray:originArray,// tra ve arrray goc..it khi dung
    }

}

var newCourses =courses.map(courseHandler);// tao ra 1 arrray ms nhan  tat cac cac element cuar arracu



console.log(newCourses);



6-- phuong thuc reduce: khi mun nhan ve  1 gia tri duy nhat tra ve

//accmulator : la bien luu tru giong nhu bien sum=0;
//currentValue:la phan tu trong mang



var totalCoin =courses.reduce(function(accmulator ,currentValue,currentIndex,orriginArray)
{
    return accmulator +currentValue.coin ;       

},0)// mong muốn nhận đc du lieu j thì truyên vao kiểu dữ liệu dó, nếu k truyền vào thì nó sẽ trả về object
console.log(totalCoin);









*/ 

















// Làm bài tập tại đây
 

var courses=[
    {
        id:1,
        name:'js',
        coin:250
    },


    {
        id:2,
        name:'html',
        coin:0
    },
    {
        id:3,
        name:'ruby',
        coin:0
    },
    {
        id:4,
        name:'php',
        coin:400
    },
    {
        id:5,
        name:'react',
        coin:500
    }

];




///bai tap áp dụng redeuce làm phẳng mảng




var depthArray =[1,2,[3,4],5,6,[7,8,9]];


var flatArray= depthArray.reduce(function(flatOutput,depthItem)

    {
             return flatOutput.concat(depthItem);
    },[]
)
console.log(flatArray);


//////bai tap áp dụng redeuce 2
  var topics=[
      {
      topic:'font end',
      courses:[
          {
              id:1,
              title:'html'
          },
          {
            id:2,
            title:'js'
        }
      ]
    },

    {
        topic:'back end',
        courses:[
            {
                id:1,
                title:'php'
            },
            {
              id:    {
                topic:'font end',
                courses:[
                    {
                        id:1,
                        title:'html2'
                    },
                    {
                      id:2,
                      title:'js2'
                  }
                ]
              },
              title:'nodejs'
          }
        ]
      }


  ]


  var newCourses =topics.reduce(function(courses,topic)
  {
    return courses.concat(topic.courses);
  },[])

  console.log(newCourses);







  ///-----tự code phuong thức reducde2--////////

   


 Array.prototype.reduce2 =function(callback,result){
    let  i=0;

       if(arguments.length < 2){
           i=1;
           result=this[0];


       }
       
       
       for(;i<this.length;i++ ){
          result= callback(result,this[i],i,this);
             
           
       }
       return result;

 } 


  var course = [
    3,2,3
  ];


var ketqua=course.reduce2(function(total,element){
      return total+element;

},10)

console.log(ketqua);








// dung ham forech2

Array.prototype.forEach2 = function(callback){
        for(var index in this){
           if (this.hasOwnProperty(index)==true)
             callback(this[index] , index,this)
        }
       
}




var course2 = [
    'java script','php','ruby'
  ];

    course2.forEach2(function(element,index){
        console.log(`(${index} : ${element})`);
})
console.log('foreach 222222222222');
console.log(course2)
;


// dung ham every2



Array.prototype.every2=function(callback){
       var output=true;
          for(var i of this){
             if(callback(this[i],i,this)==false && this.hasOwnProperty(i)==true){
               output= false;
               break
             }
            }
             

             return output

             
         
        
}

var course3 = [
    1,2,3,4,12
  ];

 



var kiemtra1=course3.every2(function(element)
{
    return element < 14;
})
console.log('every222222')
console.log(kiemtra1);


  



// dung ham find



Array.prototype.find2=function(callback){
    
    for(var i=0;i<this.length;i++){
        if(callback(this[i])===true){

                   return this[i];
                }
                
        
       
    }
    return undefined;
  
}

var course4 = [
1,2,3,8,11
];





var kiemtra2=course4.find2(function(element)
{
return element > 6;
})

console.log(kiemtra2);

      




// dung ham filter



Array.prototype.filter2=function(callback){
    var myArray=[]
    for(var index in this){
        if(callback(this[index]) && this.hasOwnProperty(index)){

                 myArray.push(this[index]);

                 
                }
        
       
    }
    return myArray;
  
}

var course6 = [
1,2,3,7,11
];









var kiemtra4=course6.filter2(function(element)
{
return element > 6;
})

console.log('filter2222222222222')

console.log(kiemtra4);

      






//some 2



Array.prototype.some2= function(callback){
    var output=false
     for(var index in this){
         if( callback(this[index],index,this)==true && this.hasOwnProperty(index)){
                output=true;
                break;
          

         }
     }
     return output
}
    



var course10 = [
    1,2,3,7,11
    ];
    
    
    
    
    
    var kiemtra10=course10.some2(function(element)
    {
    return element > 6;
    })

    console.log('some 22222222222')
    console.log(kiemtra10);
    



////kien thuc mo rong aray/////


var gg =[
    'js',
    'php'

];

courses.length=10;// tao ra do dai bbang 10 phan tu mac duf chir cos 2
console.log('do dai array');
// lusc nay se dung vong lap for in de thay thec ho for

for(var index5 in gg){
    console.log([index5])
    
}



























