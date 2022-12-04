


var boxNode=
   document.querySelector('.box-1');


console.log(boxNode.querySelectorAll('li'))



//on lai


/*
1.getElementByid:// tra ve truc tiep element
2.getElementsByClassName:tra ve html colection gan giong mang
3.getElementsByTagName:tra ve html colection gan giong mang
4.QuerySelector:// tra ve truc tiep element
5.QuerySelectorAll: tra ve node list gan giong mang
6.Html Colection
7.docunment.write



neu muon su dung nhung phuong thuc (nhu push ,reduce.....)array cho html colection tthi  phai ep kieu cho no
vd: Aray.from(HTMLColection);



*/ 


var vd=document.getElementsByTagName('h1');


console.log(vd[0]);





var vd2=document.querySelectorAll('h1');


console.log(vd2[1]);


for(var i=0;i<vd2.length;i++){
      console.log(vd[i]);
}



console.log(document.forms);
console.log(document.forms[0]);




///*////////////////////////////////
/// them 1 element vao 1 element: inerHTML: lay ra noi dun ben trong cua element do,OUTterHTML: lay tu chinh element do 



var boxElement=document.querySelector('.box')

boxElement.innerHTML='<h1>them element vao elemnt</h1> ' // them 1 element 
boxElement.innerHTML='<h1 title="heading">them element vao elemnt</h1> '// them 1 element + attribure
boxElement.innerHTML='them element vao elemnt '//them 1 text

//console.log(document.querySelector('h1').innerText)
console.log(document.querySelector('h1').innerHTML)// lay lun noi dung cua the h1 ra




  var box2Element=document.querySelector('.box-2');

  //box2Element.innerHTML='<span> Test</span>';//ghi de len the con ben trong cua chinh no

  box2Element.outerHTML='<header> Test</header> ';//ghi de len chinh no it su dung outerhtml

   

