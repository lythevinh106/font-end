var listBox =document.querySelectorAll('.box-img');


Array.from(listBox).forEach(function(el){
       el.addEventListener('mouseover',function(){
                el.style.flex='3';      
         
                
                
                })

       el.addEventListener('mouseout',function(){
        el.style.flex='1';  
       })         
      
                })


      
    
 