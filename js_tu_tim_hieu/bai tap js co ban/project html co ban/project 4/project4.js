var box=document.querySelector('.box');
var btn=document.querySelector('.btn')
var input=document.querySelector('.input');
var dem=0;
btn.addEventListener('click',function(){
      dem++
       input.style.width='200px';

       if(dem%2==0){
        input.style.width='0';
       }

      
})



