
let slides=document.querySelectorAll('.slide');


let btnNext=document.querySelector('.btn-right')
let btnPrev=document.querySelector('.btn-left')




btnNext.addEventListener("click",function(event){
        
    let objCurent=document.querySelector('.current');
     objCurent.classList.remove('current');
   if(objCurent.nextElementSibling)
   {               
   objCurent.nextElementSibling.classList.add('current')
}    //nextElementSibling la lay ra phan tu tiêp theo cùng cấp với nó
   else{

     slides[0].classList.add('current')

   }
       
});



btnPrev.addEventListener("click",function(event){
        
    let objCurent=document.querySelector('.current');
     objCurent.classList.remove('current');
   if(objCurent.previousElementSibling)
   {               
   objCurent.previousElementSibling.classList.add('current')
}    //previousElementSibling la lay ra phan tu truoc no cùng cấp với nó
   else{

     slides[slides.length-1].classList.add('current')

   }
       
});













