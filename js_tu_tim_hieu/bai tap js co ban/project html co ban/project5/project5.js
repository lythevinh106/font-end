
var container=document.querySelector('.container');

var content=document.querySelector('.content');



window.onload=function (){
   container.style.filter='blur(0)';
   container.style.transform='scale(1)'
   
    setInterval(loadNumber,(4000/100));
}


var i=0;


var loadNumber =function(){
   i++;
   content.innerText=`${i}%`;
   if(i>100){
    content.style.display='none'
   }
   if(i==40){
          content.style.opacity='0.9'
        
   }
   if(i==80){
    content.style.opacity='0.6'
  
}
if(i==100){
    content.style.opacity='0.3'
    
}
   
} 


   

   




