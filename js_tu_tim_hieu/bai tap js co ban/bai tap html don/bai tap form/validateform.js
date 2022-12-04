const getIdValue=(id)=>{
     return  document.getElementById(id).value.trim()
}


const getId=(id)=>{
    return  document.getElementById(id)
}










function validate(){

    let  userName=getIdValue('user-name');
let  password=getIdValue('password')  ;
let  respassword=getIdValue('respassword') 
let  phone=getIdValue('phone') ;
let email=getIdValue('email')
  
    var result=true;
         
    if(userName==''|| userName.length<5){
         
         result=false;
     
             getId('user-name').parentElement.querySelector('span').style.display='block'}

 
   if(password==''|| password.length<5 ){
        result=false;
   
        getId('password').parentElement.querySelector('span').style.display='block'
    }
    if(respassword!=password ){
        getId('respassword').parentElement.querySelector('span').style.display='block'
    }

   if(phone.length!=10){
        getId('phone').parentElement.querySelector('span').style.display='block'
    }


    var checkEmail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(!checkEmail.test(email)){
    getId('email').parentElement.querySelector('span').style.display='block'
   }
 
    return result;

   }

