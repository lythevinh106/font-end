let SlideContainerWidth=document.querySelector('.slider').clientWidth;// lay chieu dai cua the cha 

let Img=document.querySelectorAll('img');
let slide=document.querySelector('.slide');
let btnNext=document.querySelector('.btn-right')
let btnPrv=document.querySelector('.btn-left')

let KichthuocSlide=SlideContainerWidth*Img.length;

KichthuocSlide-=SlideContainerWidth;


let total=0;



btnNext.addEventListener('click',function(event){

       

    if(total<KichthuocSlide){
        total+= SlideContainerWidth;
    }
    
      else{
          total=0
      }

 
      slide.style.marginLeft=`${-total}px`;
})


btnPrv.addEventListener('click',function(event){

       

    if(total==0){
        total=KichthuocSlide;

    }
    
      else{
          total-=SlideContainerWidth
      }

 
      slide.style.marginLeft=`${-total}px`;
})


















