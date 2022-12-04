




const goidienchoban=()=>{

    const thaotacgoidienchoban=new Promise((resolve,reject)=>{
              let batmay=true;
              

        setTimeout(()=>{
                  if(batmay){

                        console.log('túy tút')
                        resolve()
                    }
                  else{
                        reject('so dien thoai ban goi hien khong lien lac duoc')
                  }}
      
       ,5000 )}

            

            
    )


    return thaotacgoidienchoban;

}






const xinsodt = ()=>{
    const thaotacxinsodt=new Promise((resolve,reject)=>{
          let datimthay=true;

          setTimeout(()=>
          { 
               if(datimthay){
                     let sdt=123456;
                     console.log('dang tim')
                     console.log(`so dien thoai cua no la ${sdt}`)
                     resolve(sdt)
               }
               else{
                 reject('tao k kiem dc so no may oi')
               }

          }
          ,1000)
          
    } )

    return thaotacxinsodt;
}


const sacpin=()=>{
      return new Promise((resolve,reject)=>// return thawng ra lun k can gan
      {
          let pinno=false;
          if(!pinno){
              resolve('da sac pin xong de tao goi cho no')
          }
          else{
              reject('pin no roi may owi')
          }
      }
      )

}



const goichothannam=(sdt)=>{
      console.log(`de tao goi cho no qua so dien thoai la ${sdt}`)
}





goidienchoban()


.then(()=>{
   console.log('mai bit so thang nam khong') 
 xinsodt()
      .then((sdt)=>{
          sacpin()
          .then(()=>{
              goichothannam(sdt)
          })
          .catch((err2)=>console.log(err2))
        
      })
      


      .catch((err)=>console.log(err))})


.catch((err0)=>{
    console.log(err0)
})      