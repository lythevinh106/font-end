


function logger(log='gia tri mac dinh'){// khi k bắt buộc nhâp tham số
    console.log(log)
}


logger()


//
function logger2(log,isAlert){// khi k bắt buộc nhâp tham số
    if(isAlert)
    return alert(log)
    
   


console.log(log)

}


logger2('Vinh',true)