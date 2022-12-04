


var headingElement=
document.querySelector('h1');



console.log(headingElement);


headingElement.title='heading';
headingElement.id='heading';
headingElement.className='heading'; // them vao class


/// cach 2 : cach nay co the dat duoc bat cu attribute nao mac du no khong hop le: neu có thì sửa nếu chưa có thì thêm 


headingElement.setAttribute('class','heading')

headingElement.setAttribute('href','heading')



/// cach lay ra gia tri attribute:cach nay co the lay duoc bat cu attribute nao mac du no khong hop le
headingElement.title='title test';


 console.log(headingElement.getAttribute('class'));
 console.log(headingElement.getAttribute('title'));






