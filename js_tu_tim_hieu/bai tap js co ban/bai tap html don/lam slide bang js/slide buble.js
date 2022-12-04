var content = document.querySelector('.content');
const container=document.querySelector('.container');
const imgList =document.querySelectorAll('.img');
const btnList =document.querySelectorAll('.btn');

const btnNext=document.querySelector('.btn-next')
const btnPrv=document.querySelector('.btn-prv')



    
   var contentWidth=900; // tuong tu như chieu dai của 1 box
     content.style.width=`${contentWidth}px`
       
      
      var containerWidth=contentWidth*imgList.length;
    
      imgList.forEach(function(e){
              e.style.width=`${contentWidth}px`;
      })


     
      tong=0;
      dem=0;





    btnNext.addEventListener('click',function(){
                   tong+=contentWidth;

                   if(tong>containerWidth-contentWidth){
                       tong=0;
                   }
                 


                   
                  dem++
                  if(dem>btnList.length-1){
                      dem=0;
                  }
                   
                       
                   container.style.transform=`translate(${-tong}px)`
                  let btnBlue=document.querySelector('.btn.blue')
                   btnBlue.classList.remove('blue')
                  btnList[dem].classList.add('blue');
    })
     

    btnPrv.addEventListener('click',function(){
        tong-=contentWidth;

        if(tong<0){
            tong=containerWidth-contentWidth;
        }
 
   dem--
   if(dem<0){
       dem=btnList.length-1;
       
   }

    container.style.transform=`translate(${-tong}px)`
    let btnBlue=document.querySelector('.btn.blue')
    btnBlue.classList.remove('blue')
   btnList[dem].classList.add('blue');
})


Array.from(btnList).forEach((ele,index)=>{

        ele.addEventListener('click',function(){
               


                  
            let btnBlue=document.querySelector('.btn.blue')
            btnBlue.classList.remove('blue')
              ele.classList.add('blue');

            

              if(index==0){
                    tong=0;
              }
              if(index==1){
                tong=contentWidth;
                console.log(tong)
          }
          if(index==2){
            tong=contentWidth*2;
            
      }
        if(index==3){
            tong=contentWidth*3;
     }
  container.style.transform=`translate(${-tong}px)`   

            
           
              
        })


        
})


/*for(let i=0 ;i<btnList;i++){
      let total=0;
      btnList[i].addEventListener('click',function(){
        
            total=total+contentWidth;
            console.log(total)
      


            container.style.transform=`translate(${-total}px)`
                 i++;
               
         
      })        
}
*/

      




   
   


       
    
   
     
      
      



  // var containerWidth=imgList.length*



 