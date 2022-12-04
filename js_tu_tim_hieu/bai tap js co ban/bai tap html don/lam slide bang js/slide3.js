var review =document.querySelector('.review');

var reviewBox=document.querySelector('.review-box');

var listBox=document.querySelectorAll('.box');

var btnNext=document.querySelector('.btnRight');
var btnPrv=document.querySelector('.btnLeft');





// tu code lai

var dem=0;
 var slide=function(slides,time){
     
     var widthOf1box=review.offsetWidth / slides;
     
   
     var reviewWidth= widthOf1box * listBox.length;
     reviewBox.style.width=`${reviewWidth}px` ;

     listBox.forEach(function(e){
         e.style.margin='10px'
         e.style.width=`${widthOf1box -22}px`
     })


     
   
     var boxCuoi = reviewWidth - review.offsetWidth;

     
setInterval(nextImg,2000)
  



    
     btnNext.addEventListener('click',nextImg)
         function nextImg(){
                dem+=widthOf1box;
                
                if(dem > boxCuoi){
                    dem=0;
                }

        
                reviewBox.style.transform=`translateX(${-dem}px)`

               



     }



     btnPrv.addEventListener('click',function(e){
        dem-=widthOf1box;
        
        if(dem < 0){
            dem=boxCuoi;
        }

       console.log(dem);
        reviewBox.style.transform=`translateX(${-dem}px)`



    
      

       



})





    

}




  



slide(3,1000)






   



















/*

function slide(slides){// slides la so luoong cac o trong slide muon hien thi ra man hinh
       var widthOf1box=review.offsetWidth / slides; // tim width cua 1 box

       let widthofreviewBox=widthOf1box*listBox.length;// tim width cua review box chua cac box


        reviewBox.style.width=`${widthofreviewBox}px`;
      
        


        listBox.forEach(function(e){
           
           e.style.marginRight='10px';
            e.style.width=`${widthOf1box-10}px`;// vi margin 20px nen ta phai set wwidth lai la tru 20px 
        })


     var count=0;
     var boxCuoi = widthofreviewBox-review.offsetWidth // tinh ra vi tri cuoi cung hien thi  widthOf1box*slides
        btnNext.addEventListener('click',function(){

            count+=widthOf1box;
            if(count>boxCuoi){
                count=0;

            }

           reviewBox.style.transform=`translateX(${-count}px)`;
              

        })


  
        btnPrv.addEventListener('click',function(){

            count-=widthOf1box;
            if(count < 0 ){
                count=boxCuoi;

            }

           reviewBox.style.transform=`translateX(${-count}px)`;
              

        });
     




      
      
}

slide(3)*/



    








