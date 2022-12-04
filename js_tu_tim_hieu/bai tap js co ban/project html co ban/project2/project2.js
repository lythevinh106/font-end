var btnNext=document.querySelector('.btn-next');
var btnPrv=document.querySelector('.btn-prv');

var cricle=document.querySelectorAll('.cricle');
var box=document.querySelector('.box');

var line=document.querySelector('.line.blue');
var lineBlack=document.querySelector('.line')




function node(sonut){
    

    var boxWidth=box.offsetWidth;
     
    var oneLineWidth=(boxWidth/(sonut - 1))/boxWidth*100;

       total=0;
       var maxLineWidth=(sonut-1)*oneLineWidth

       
     let  dem=0;
    btnNext.addEventListener('click',function(){
                  dem++
                 total+=oneLineWidth;
                     if(total>100){
                        total=maxLineWidth
                     }
                     if(dem>sonut-1){
                         dem=sonut-1
                     }
                  
               
                line.style.width=`${total}%`;
                cricle[dem].classList.add('active')
                


             
              
    })

    btnPrv.addEventListener('click',function(){
             dem--        
        total-=oneLineWidth;
            
           
          
       line.style.width=`${total}%`;
       cricle[dem].nextElementSibling.classList.remove('active')


    
     
})
    

       



     
}
node(4);




