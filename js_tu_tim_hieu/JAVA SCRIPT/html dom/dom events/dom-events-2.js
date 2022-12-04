

//input vs select
var inputElement =document.querySelector('input[type="text"]');
var inputValue;
inputElement.onchange= function(e){// chỉ sẽ thực hiện khi value input co su thay doi
      console.log(e.target.value)

}

inputElement.oninput= function(e){// gõ trong ô input value nào nó sẽ nhận value đo
    console.log(e.target.value)

}




inputElement.oninput= function(e){// gõ trong ô input value nào nó sẽ nhận value đo va lue vao bien iinputvalue
   inputValue =e.target.value

}


var input2Element =document.querySelector('input[type="checkbox"]');
input2Element.onchange= function(e){
    console.log(e.target.checked)

}



var selectElement =document.querySelector('select');


selectElement.onchange= function(e){
     console.log(e.target.value);// inra the value trong the option// keypress: nhan va giu
}


//key up: khi an xuong va nhac len : va key down: la nhan phim xuong thoi


input4Element=
document.querySelector('input[type="text"]')
inputElement.onkeyup=function(e){// tra ve keyboar events //keyup la khi bam vao la no trar gia tri ve lun
    console.log(e.target.value)
}



inputElement.onkeyup=function(e){
    console.log(e.which);  // tra ve so co phim do


    switch(e.which){
        case 27:
             console.log('exit')
             break
    }
}



/// document cung co the lang nghe evnt



document.onkeydown = function(e){// bat su kien cua nut
    switch(e.which){
        case 27:
              console.log('exit')
              break

    }
}

