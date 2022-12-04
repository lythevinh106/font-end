var input= document.querySelector('input[type="text"]') ;
var btn=document.querySelector('.form button');
var form=document.querySelector('.form');

var text= document.querySelector('.plus')

var textContent=document.querySelector('.content');

var err=document.querySelector('.err');





  form.addEventListener('submit',message) // submit là khi nhấn enter or clik đều đc thi hành nhớ bỏ btn vào trong form


  function message(event){
    event.preventDefault();/// loai bỏ hanh vi mặc định trên trình duyêt mà ở đây là ngăn k cho form gửi 
       alert('vinh')

    // lay du lieu bên trong input
   if(input.value===''){
               
        err.style.display='block';
    

       setTimeout(function(){
        text.style.display='none';
        textContent.style.display='none'
       },2000)

    }

    else{
   

        text.innerText=input.value ;
        input.value=''
;
        


    
        

    }
    

        

  }


