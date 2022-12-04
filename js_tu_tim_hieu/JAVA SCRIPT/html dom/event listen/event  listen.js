//event listener: có công dụng gióng như dom event nhung nos co the lang nghe nhieu lan: tach ra nhieu viec ,khi co nhu cau go bo evnt


// 1.xử lí nhiều việc khi event xảy ra
// 2.lắng nghe / hủy bỏ lắng nghe


var btn =document.querySelector('.btn');



setTimeout(function(){

    btn.onclick =function(){// su dung dom events


        console.log('viec 1');
        console.log('viec 2');
        console.log('viec 3');

       
    }
    

},1000);


setTimeout(function()
{
    btn.onclick=function(){}// sau 3s khong lam j nua// huy bo lawng nghe
},3000);


/////event listener

var btn2 =document.querySelector('.btn2');


btn2.addEventListener('click',function(e){ 
     console.log(Math.random());}
)
btn2.addEventListener('click',function(e){ 
    console.log(Math.random());}
)
btn2.addEventListener('click',function(e){ 
    console.log(Math.random());}
)




//// vd


function viec4(){
    console.log('viec 4');
}


btn.addEventListener('click',viec4);/////cach them evets



setTimeout(function(){
    btn.removeEventListener('click',viec4)// xoa lang nghe sua 3s
},3000)





