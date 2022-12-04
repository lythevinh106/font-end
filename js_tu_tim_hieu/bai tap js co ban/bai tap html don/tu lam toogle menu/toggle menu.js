var shadow=document.querySelector('.shadow');
var menu=document.querySelector('ul');

var btnLink=document.querySelector('a');
var close=document.querySelector('button');




btnLink.addEventListener('click',function(){
       shadow.style.display='block';
       shadow.style.opacity='1'
      
        menu.style.left='50%';
        menu.style.transform='translateX(-50%)'
        menu.style.opacity='1';
        
       
})


close.addEventListener('click',function(){
    menu.style.left='-100%';
    menu.style.transform='translateX(0%)'
    shadow.style.display='none';
    shadow.style.opacity='0'
})