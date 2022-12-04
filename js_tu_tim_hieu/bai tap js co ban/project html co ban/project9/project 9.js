var btnList=document.querySelectorAll('.btn');
var audioList=document.querySelectorAll('audio')


Array.from(btnList).forEach(function(e){
      
    dem=0;

    e.addEventListener('click',function(){
           
         var audio=e.querySelector('audio')
            for(let i=0;i<audioList.length;i++){
                      audioList[i].pause();
            }
            audio.play();
            dem++ 

           
    })
})






