const name_item = document.querySelectorAll('.name_item');
const search_item = document.getElementById('search-item');
const element_cakes = document.querySelectorAll('.element_cakes');
const filter_button = document.querySelectorAll('#filter_button .btn');
const h1_price = document.querySelectorAll('h1.price');



//slide
const arrayImg = ['cake-1','cake-2','cake-3','cupcake-1','cupcake-2','cupcake-3',
'doughnut-1','doughnut-2','doughnut-3','sweets-1','sweets-2','sweets-3'];


var modal=document.querySelector('#modal')

var imgBox=document.querySelector('.lightbox');
 
var vitri;

Array.from(element_cakes).forEach(function(el){

       el.addEventListener('click',function(){

               var getImg=el.querySelector('img')
              
            imgOfItem=getImg.getAttribute('src');
        
    


           var vitridau= imgOfItem.indexOf('/');
           var vitricuoi= imgOfItem.indexOf('.');

           var catchuoi=  imgOfItem.slice(vitridau+1,vitricuoi)
          


           var catchuoiImg=`images/${catchuoi}.jpeg`;
           console.log(catchuoiImg)

            modal.style.display='block'
            imgBox.style.backgroundImage=`url("${catchuoiImg}")`;
            imgBox.style.backgroundSize='cover';
            //imgBox.style.backgroundPosition='center';*/
             for(let i=0; i<arrayImg.length;i++){

              if(arrayImg[i]===catchuoi){
                  vitri=i;
              }

             }
          

       })

})


let btnClose=document.querySelector('.fa-window-close');

btnClose.addEventListener('click',function(){
            
    modal.style.display='none'
})


let BtnRight=document.querySelector('.fa-caret-right')
   BtnRight.addEventListener('click',function(){
                 vitri++;
              if(vitri>arrayImg.length-1){
                  vitri=0;
              }
                 let catchuoiImg2=`images/${arrayImg[vitri]}.jpeg`;
                 imgBox.style.backgroundImage=`url("${catchuoiImg2}")`;
                imgBox.style.backgroundSize='cover';
         
   })
  
   



   let BtnLeft=document.querySelector('.fa-caret-left')
   BtnLeft.addEventListener('click',function(){
                 vitri--;
              if(vitri<0){
                  vitri=arrayImg.length-1;
              }
                 let catchuoiImg2=`images/${arrayImg[vitri]}.jpeg`;
                 imgBox.style.backgroundImage=`url("${catchuoiImg2}")`;
                imgBox.style.backgroundSize='cover';
         
   })



          











//search

  search_item.addEventListener('keyup',searchItem)


  function searchItem(){

           var searchValue=search_item.value.toLowerCase();// chuyen tất cả dữ liêu trong ô input là chu thuong
            Array.from(element_cakes).forEach(function(e){
                 var nameItem=e.querySelector('.infor .name_item')
                   var textNameItem=nameItem.innerText.toLowerCase();// chuyen tat ca cac ten cua san pham thah chu thuong
                        if(textNameItem.indexOf(searchValue)!==-1){// tim kiem chuoi .....
                              e.style.display='block';
                        }
                        else{
                            e.style.display='none';
                        }
                 
              kiemtra(element_cakes)
   
                    
            }


            
            )
  }
  
  function kiemtra(element){
    var dem=0;
    for(let i=0;i<element.length;i++){
         if(element[i].style.display=='block'){
               dem++
         }
      
    }

    if(dem==0){
        document.querySelector('#showtext').innerText='K timf thay '

    }
    
      
}





// lam load trang
  Array.from(filter_button).forEach(function(element){
        
        element.addEventListener('click',function(){
              
            for(let i=0 ;i<filter_button.length;i++){
                 filter_button[i].classList.remove('active');

             }
             element.classList.add('active');// co thể thay element bang this

              let nameFilter = element.dataset.filter;
              console.log(nameFilter)


             Array.from(element_cakes).forEach(function(el){
                  if(el.dataset.item===nameFilter || nameFilter==='all'){//vì all không có nên 
                      el.style.display='block';
                  }
                  else{
                      el.style.display='none';
                  }

             }) 


    })

  })

