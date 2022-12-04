var container=document.querySelector('.container');
var box=document.querySelector('.box');
var imgList=document.querySelectorAll('.img-container')

Array.from(imgList).forEach(function(el){
              el.addEventListener('click',chuyendong);
     
              function chuyendong(){
                           
                        for(var i=0;i<imgList.length;i++){
                              imgList[i].classList.remove('active');
                        }
                        el.classList.add('active')
                        
              }
              
})