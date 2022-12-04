//innerText(la thuoc tinh cua element node),textcontent( cua text node va element node lun)



var h1Element = document.querySelector('.heading');

console.log(h1Element.innerText);// lay ra noi dung cua element do bo qua su anh huong cua the html(trinh duyet hien j no se hien do)

console.log(h1Element.textContent);//lay ra  noi dung cua element do nhung ghi nhan nhung khoang cach that su ben trong no


/// thay doi noi dung 
// khi thay doi thi se nguoc lai voi khi lay ra la se hien thi heet ke ca dau cach se doi thanh <br>
h1Element.innerText=`









ly the vinh`; 


//se nguoc lai se khong hien thi dau cahs thua
h1Element.textContent=`


  ly the vinhh
`;



//getter: cong cu ho tro lay ra


//setter: thay doi noi udng cua no