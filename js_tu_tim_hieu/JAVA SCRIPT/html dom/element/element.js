



// để get ra đc element qua: id ,class,tagname(h1.h2..),htmll colection,css selector



var headingNode = document.getElementById('heading')// chi lay dc 1 element bang id.neu k lay dc thi tra ve null


console.log({
    element: headingNode
})


var headingNode2 = document.getElementsByClassName('heading2')// lay dc nhieu  element bang id.neu k lay dc thi tra ve null
console.log(
    headingNode2  // trả ve giống mảng nhưng k có phuong thuc giong mang
)
console.log(
    'lay dc elelement dau tien ' , headingNode2[0]  //lay dc eleme dau tien
)



var headingNode3 = document.getElementsByTagName('p')// lay dc nhieu  element bang id.neu k lay dc thi tra ve null
console.log(
    headingNode3  // trả ve giống mảng nhưng k có phuong thuc giong mang
)


var headingNode4 = document.querySelector('.heading3 .heading-child');// lay dc 1  element bang css selector giong css.neu k lay dc thi tra ve null
console.log(
    headingNode4 
)


var headingNode5 = document.querySelector('.box .child:nth-child(3)')    ;// lay dc 1  element bang css selector giong css.neu k lay dc thi tra ve null
console.log(
    headingNode5  
)



var headingNode5 = document.querySelectorAll('.heading3 .heading-child');// lay dc nhieu  element bang css selector giong css.neu k lay dc thi tra ve null
console.log(
    headingNode5  // trả ve 1 node list gan giong class name
)

console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms.form1);




console.log(document.anchors); //lay ra nhung the a archibure la name


























