



function hightlight([first, ...strings],...value){
      return value.reduce(
          (acc,curr)=>[...acc,`<span>${curr}</span>`,strings.shift()],
          [first])
        .join('');

     


}


var brand='f8';
var course='javascript'

const html=hightlight`hoc lap trinh ${course} tai ${brand} !`


console.log(html)