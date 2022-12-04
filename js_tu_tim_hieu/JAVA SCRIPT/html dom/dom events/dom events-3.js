/*
1prevents-defaugth: loại bỏ hành vi mặnc đinh của trình duyệt trên thẻ html
2stoppropagation: loại bỏ sự kiện nổi bọt: nổi bọt là khi click vao thẻ con thì sẽ chịu su anh huong cua the chua nó


*/ 


var aElements =document.querySelectorAll('a');



for(var i=0 ; i< aElements.length ;i++){
    aElements[i].onclick=function(e){
       if(!e.target.href.startsWith('http://f8.edu.vn')){// kiem tra xem neu k bat dau tu chuoi f8.edu.vn ythi vo hieu hoa
           e.preventDefault();

       }
    }


}



//vd2:


var ulElement=document.querySelector('ul');


ulElement.onmousedown=//khi nhan chuot xuong

function(e){
    e.preventDefault();

}

    ulElement.onclick=
function(e){
    console.log(e.target);

}





//vd 3

document.querySelector('div').onclick =

function(){
    console.log('Div')
}




document.querySelector('button').onclick =

function(e){
    e.stopPropagation();// ngawn chan su noi bot
    console.log('Click me')
}


