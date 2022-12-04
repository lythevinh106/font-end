var $=document.querySelector.bind(document);

var $$=document.querySelectorAll.bind(document)


var tabItem=$$('.tab-item');

var tabPane=$$('.tab-pane')



var tabItemActive= $('.tab-item.active');
console.log([tabItemActive])

var lineOfItem=$('.tabs .line')


  


tabItem.forEach((tab,index)=>
{
      tab.onclick=function(){
           var b= tabPane[index];
          $('.tab-pane.active').classList.remove('active');
           b.classList.add('active');  

           
          var a= $('.tab-item.active').classList.remove('active');
           this.classList.add('active')


           lineOfItem.style.width=`${this.offsetWidth}px`;
           lineOfItem.style.left=`${this.offsetLeft}px`;

           


      }
      
}
)





