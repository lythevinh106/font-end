var btnAdd=document.querySelector('.add');
var btnRemove=document.querySelector('.remove');
var number=document.querySelector('.number')


var btnAll=document.querySelectorAll('button');

var dem=0
Array.from(btnAll).forEach(function(el){

    el.addEventListener('click',function(){


           
          // console.log(el.getAttribute('class'))
          if(el.getAttribute('class')=='remove'){
          
              dem--;
          }
          else if(el.getAttribute('class')=='add'){
           
            dem++;
          }


      number.innerText=`${dem}`

      
      if(dem<0){
        number.style.color='red';

    }
    if(dem>0){
      number.style.color='blue';


    
    }
           

   
          
        
                 
    })
   
      
})

 










