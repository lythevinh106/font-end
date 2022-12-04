/*DOM events
/*

STT	Event Name	Description
1	onclick	Xảy ra khi click vào thẻ HTML
2	ondbclick	Xảy ra khi double click vào thẻ HTML
3	onchange	Xảy ra khi giá trị (value) của thẻ HTML đổi. Thường dùng trong các đối thẻ form input
4	onmouseover	Xảy ra khi con trỏ chuột bắt đầu đi vào thẻ HTML: GIONG HOVER
5	onmouseout	Xảy ra khi con trỏ chuột bắt đầu rời khỏi thẻ HTML
6	onmouseenter	Tương tự như onmouseover
7	onmouseleave	Tương tự như onmouseout
8	onmousemove	Xảy ra khi con chuột di chuyển bên trong thẻ HTML
9	onkeydown	Xảy ra khi gõ một phím bất kì vào ô input
10	onload	Sảy ra khi thẻ HTML bắt đầu chạy, nó giống như hàm khởi tạo trong lập trình hướng đối tượng vậy đó.
11	onkeyup	Xảy ra khi bạn gõ phím nhưng lúc bạn nhả phím ra sẽ được kích hoạt
12	onkeypress	Xảy ra khi bạn nhấn môt phím vào ô input
14	onblur	Xảy ra khi con trỏ chuột rời khỏi ô input
15	oncopy	Xảy ra khi bạn copy nội dung của thẻ
16	oncut	Xảy ra khi bạn cắt nội dung của thẻ
17	onpaste	Xảy ra khi bạn dán nội dung vào thẻ





*/ /*

1. attribute events:it xai
2.assign event using the element node



*/

//2.assign event using the element node
var h2Element= document.querySelector('h2');
h2Element.onclick=function(){
    console.log('gg');
}





var h3Element= document.querySelector('h3');
h3Element.onclick=function(e){//tra ve 1 mouse event
    console.log(e.target);// target chinh la tra laji chinh element dang lang nghe event nay
}




var h4Elements= document.querySelectorAll('h4');// tra ve cho tat ca elemetn h4
for(var i=0;i<h4Elements.length;i++){
    h4Elements[i].onclick=function(e){
        console.log(e.target);
    }
}



//nhảy từ con sang cha

h3Element.parentElement
h3Element.parentElement.parentElement// nhay 2 cấp
h3Element.parentElement.querySelector('demo')// lui lai cha xong  r truy cap con cua cha do


h3Element.parentElement.querySelector('demo').nextElementSibling// di toi thằng bên canhk


h3Element.parentElement.querySelector('demo').previousElementSibling// lay phan tu phia truoc

