
let getBody=document.querySelector('body');
let changeImg= document.querySelectorAll('.change-image')



    changeImg[0].addEventListener('click',function(e){
          
       getBody.setAttribute('style', 'background-image: url("image/hinh-dep-19.jpg")');
    })

    changeImg[1].addEventListener('click',function(e){
          
        getBody.setAttribute('style', 'background-image: url("image/tải xuống.jpg")');
     })

  //  changeImg[1].addEventListener('click','background-image:url('image/tải xuống.jpg')')






let getLinkCss=document.querySelector('.link-css');
let changeContent= document.querySelectorAll('.change-content')



    changeContent[0].addEventListener('click',function(e){
          
       getLinkCss.setAttribute('href', 'css2.css');
    })

    changeContent[1].addEventListener('click',function(e){
          
        getLinkCss.setAttribute('href','css3.css');
     })


     changeContent[2].addEventListener('click',function(e){
          
        getLinkCss.setAttribute('href','bai tap html dom.css');
     })








let getContent=document.querySelectorAll('.content');
let changeBox= document.querySelectorAll('.change-box');


    changeBox[0].addEventListener('click',function(e){
           for(i=0;i<getContent.length;i++){
                var newbox='content'+' '+'box';
                getContent[i].setAttribute('class',newbox)

                  
           }  
    })

    changeBox[1].addEventListener('click',function(e){
        for(i=0;i<getContent.length;i++){
             var newbox='content';
             getContent[i].setAttribute('class',newbox)

               
        }  
 })



function addClass(el,className){
   var oldClass = el.getAttribute('class');// tra ve 1 string la value cua nó

   
   if(oldClass){



   if(oldClass.indexOf(className)==-1){
          var newClass=oldClass + " "  + className;
            el.setAttribute('class',newClass);

    }}
   else{
       el.setAttribute('class',className)

   }
 }


var getContainer=document.querySelector('.container')

 addClass(getContainer,'src')
 addClass(getContainer,'img')
 addClass(getContainer,'img')





 function removeClass(el,className){
  /// nêu cớ sẵn class rồi mới tiến hành xóa
  // tach classs cu thanh 1 array
      
  var oldClass = el.getAttribute('class')

  if(oldClass)
   {
         var arrOldClass=oldClass.split(',')// phai chuyen sang mang de dễ thao tac

        var indexDelete=arrOldClass.indexOf(className)
         if(indexDelete!==-1){
                  
            arrOldClass.splice(indexDelete,1);

            // chuyen ve chuoi
           

            el.setAttribute('class', arrOldClass.join(" "));// chuyen lai thanh chuoi va them vao class


         }
   }
   else{


   }
  }

  removeClass(getContent[0],'content')



  /////them va xoa class bang thuoc tính có sẵn/

console.log(getContent[2].classList)// quan li sp lương class trong 1phan tu . tra ve gan giong mang

   // ham add classs

   getContent[2].classList.add('class-plus','class-plus2')

   getContent[2].classList.remove('class-plus')



 ///////
 

    

 
 
    
    







   

