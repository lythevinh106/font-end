

/*function fc2(data,callback)  {
    setTimeout(function(){
             console.log('day la ham ',data);
             callback();
    },5000);
  
 
  
}

function fc1(){
   console.log('day la ham 2')
}*/

function fc1(data){
     console.log('day la ',data);
}

function fc2(e){
    console.log('day la so 1')
     e(2);


}
fc2(fc1)






  
    



  

