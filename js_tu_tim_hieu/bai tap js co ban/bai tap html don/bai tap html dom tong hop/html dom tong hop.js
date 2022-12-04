


var listSelect= Array.from(document.querySelectorAll('select[name]'))

listSelect.forEach(function(e){

    var listOption=Array.from(e.querySelectorAll("option"))

  

    var divWrapper=document.createElement("div");

    divWrapper.classList.add("custom-select")// them classs
    var divSelected=document.createElement("div")
    divSelected.classList.add("selected")
    divSelected.setAttribute("value", listOption[0].getAttribute("value"))
    divSelected.innerText=  listOption[0].innerText;

 


})