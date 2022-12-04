var getList= Array.from(document.querySelectorAll('.dropdown'));




getList.forEach(function(e,i){
     var btn=e.querySelector('.btn');
      
          btn.addEventListener('click',function (event){
           
            if(e.classList.value.indexOf('open')==-1){// value o day la thuoc tinh class cua no
           e.classList.add('open');
        }
        else{
        
            e.classList.remove('open');
        }
     })
})



var selectYear=Array.from(document.querySelectorAll('select[name="year"]'))




selectYear.forEach(function(e){

       for(var year=1970;year<=1980;year++){
        

        var option=document.createElement('option')

         option.setAttribute('value',year);
         option.innerText="năm" +  year ;
        e.append(option);
           }
})






  
