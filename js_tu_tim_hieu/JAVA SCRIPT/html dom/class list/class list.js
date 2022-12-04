
/*
cac phuong thuc thuong duoc su dung voi domtokenlist


//add:them class vao element
//contains: kiem tra xem co class nam o element do hay khong
//remove: xoa bo 1 class khoi elemnt 

//toggle:neu co thuoc tinh nay trong elemnt thi nos se xoa con nguoc lai tthi no se them vao



*/


var boxElement= document.querySelector('div');


console.log(boxElement.classList);// no se tra ve DomtokenList: giup quan ly class cua element(gan giong mang)

console.log(boxElement.classList.length)//se tra ve so luong class 
console.log(boxElement.classList[0])
console.log(boxElement.classList.value)// se tra 1 chuoi chua tat ca cac class

boxElement.classList.add('red','blue');// them class dc css sẵn

console.log(boxElement.classList.contains('red'));// se tra ve true vi da co class red

boxElement.classList.remove('red');// xoa red
boxElement.classList.toggle('red')// neu co class red thi nos se xoa nguoc lai thi se themn




