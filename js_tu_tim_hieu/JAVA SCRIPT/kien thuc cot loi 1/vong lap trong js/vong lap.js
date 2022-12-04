/*
1.for: lap khi dieu kien dung 

var myArray=[
    'js','darl','java','php'
];
var arrayLength=myArray.length;



for(var i=0;i<arrayLength;i++){
    console.log(myArray[i]);
   
}


2. for/in - lap qua key cua doi tuong của arrray objjec or string..
var myInfo ={
   name:'the vinh',
   age:18,
   address:'phu yen , vn'

     
};


for(var key in myInfo){//object có bao nhiu key thì vong for chạy bấy nhiu lần
     console.log( myInfo[key]);

}




3.for / of lap qua value cua doi tuong  : thuong ung dung vs mang va chuoi



var languages =[
    'js',
    'php',
    'java'

];

for(var value of languages){
      console.log(value);
}


var languages2 ='java scirpt';// se tach chuoi ra thanh tung chu cai


for(var value of languages2){
    console.log(value);
}



var languages3 ={   // khong khuyen khich su dung vs vong lap nay
    name: 'son dang',
    age:18


};

for(var value of Object.values(languages3)){
      console.log(value);
}









4. while: lap khi dieu kien dung


var myArray=[
    'js'
    ,'php'
];
var i=0;
while(i < myArray.length){
    console.log(myArray[i]);
    i++;// phair them ++ neu k trinh duyet se treo


}




5. do/while: lap ít nhat 1  lan . sau d lap lại khi dieu kien dung


var i=0;

var isSuccess= false;


do{
    i++;
    console.log('nap the lan ' + i);


    if(false){
        isSuccess=true;
    }
  
}while(!isSuccess && i <= 3);







6.break continue


for(var i=0;i<10;i++){


    console.log(i);


    if(i>=5){
        break;
    }

}


for(var i=0;i<10;i++){
    if(i%2 !=0){
        continue;
    }
    console.log(i);

}



 vong lap long nhau


*/

  var myArray = [
      [1 , 2],
      [3 , 4],
      [5 , 6]

  ];

  for(var i=0;i<myArray.length; i++){
      for(var j=0 ;j< myArray[i].length;j++){
          console.log(myArray[i][j]);
      }
  }






















