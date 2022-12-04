var input=document.querySelectorAll('.form input')
var btn=document.querySelector('button');

var box=document.querySelector('.box');






//console.log(input[0].parentElement.querySelector('h3'))

/*box.addEventListener('submit',function(){
        
       
})*/



 


///
var inputA=Array.from(input)
inputA.forEach(function(e){
     e.addEventListener('click',function(){         //mouseover

         e.addEventListener('mouseover',function(){
               let h3=e.parentElement.querySelector('h3')   ;

                h3.style.transform='translateY(-25px)';
      })}
     )
      e.addEventListener('mouseout',function(){
        let h3=e.parentElement.querySelector('h3')   ;
           if(e.value.length==0){
        
        h3.style.transform='translateY(10px)'}
      })
     
})



box.addEventListener('submit',function(e){
  event.preventDefault()
       inputA.forEach(checkInput)

     
       
     
})

function checkInput(e){
          

                 
  if(e.value.length<1){
      var thongBao=e.parentElement.querySelector('h4');
      thongBao.style.display='block'
  }
  else{
    var thongBao=e.parentElement.querySelector('h4');
        thongBao.style.display='none'
  }
}


inputA.forEach(function(e){
    e.addEventListener('keypress',function(){

      var thongBao=e.parentElement.querySelector('h4');
      thongBao.style.display='none'
      let h3=e.parentElement.querySelector('h3')   ;
      h3.style.transform='translateY(-25px)';
    })
})
   

          
  
