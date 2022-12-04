/*
 là hàm (function) đuọc truyển qua đối số khi gọi hàm khác
   
 */


//vd


//cach1 
 function myfuction(param){
if(typeof param==='function'){

     param ('hoc lap trinh');}// vi param la funcition nen no dung dc ();


 } 


 function myCallback(value){
     console.log('Du lieu:',value)
      
 }

 myfuction(myCallback);


 // cach 2 tu lam


 function myfuction2(param){
       console.log(' sau khi tra ve')

       param('hoc lap trinh')
     

     } 


myfuction2(function(value){
    console.log('Du lieu:',value)
})



////////////////////call back phan 2 tu dinh nghiax 1 ham //


Array.prototype.map2= function(callback){  //this o day chinh fuction goi nó
    var n=this.length,output =[];
    for(var i=0;i<n;i++){
         var result =callback(this[i],i);
         output.push(result);
    }
    return output;



}
var course =[
    'js','php','ryby'

];
var  html= course.map2(function(course2,index){
   return `<h2> ${course2} </h2>`;
});

console.log(html.join('    '));





 


