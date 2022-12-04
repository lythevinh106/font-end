// bai tap vd  ve promise


var users=[
    {
        id:1,
        name:'the vinh'
    },
    {
        id:2,
        name:'sondang'
    },
    {
        id:3,
        name:'hung tam'
    }
];


var comments =[
    {
        id:1,//id cua comment
        user_id:1,
        content:'anh son ra vide o'

    },

    {
        id:2,
         user_id:2,
        content:'ra roi e oi'

    }
];


const getComments =()=>{
    

    return new Promise((resolve)=>{

           setTimeout(()=> {
                
               resolve(comments)}
               
           ,1000) }) 
}



const getUserIds=(userIDs)=>{
        return new Promise ((resolve)=>{
        let a=users.filter((ele)=>{
                return userIDs.includes(ele.id);
        })
      



         setTimeout(()=>
         {
              resolve(a)   ;
         }
         ,2000)
              
        })

}


getComments()

     .then((data)=>{
            let a=data.map((ele)=>{
                return ele.user_id;}
            )

               return getUserIds(a)
                    .then((data2)=>{
                          return {
                           user: data2,
                           comments: data,
                          }
                               
                          
                    }
                    )


           } )
      .then((data)=>{

          var commentBlock=document.getElementById('comment-box');
            var html='';
           data.comments.forEach((ele1)=>{
                 var users=data.user.find((ele2)=>{// vi trả về 1phaanf tử nên xài finds
                       return ele2.id==ele1.id

                 });


                 html+=`<h1>${users.name}: ${ele1.content}</h1>`
           })


           commentBlock.innerHTML=html
 

           
      })     



          
      

            
    


 


/*
function getUsersByIds(userID){
  let b= new Promise(function(resolve){
        var result=users.filter(function(user){// tra ve tat ca cac phan tu cua no
            return userID.includes(user.id)/// loc ra nhung user co id  giong iDs
        })
       setTimeout(function() {
       resolve(result);},1000)

     })
     return b;
} 

// 1 lay comment
//2 tu coments lay ra user_id
// tu user_id laay ra user tuong ung


// fake Api






/*function getUsersByIds(idOfUser){
    let a= new Promise(function(resolve){
        var IdGiongnhau = users.filter(function(e){
            return idOfUser.includes(e.id)
        });
        resolve(IdGiongnhau);
    }
    )
    return a;

 
}*/
/*
var getComments=Promise.resolve(comments)

getComments
             .then(function(comments){
                   var userIds=comments.map(function(e){
                       return e.user_id
                   });
                  return getUsersByIds(userIds)
                        .then(function(users){
                             return {
                                users: users,
                                comments: comments,
                            };
                        });

                  
                   
                  
                

               })
    
             .then(function(data){
                  var commentBlock=document.getElementById('comment-box');
                   var html='';

                   data.comments.forEach(function(e){

                     var user= data.users.find(function(el){
                           return el.id==e.user_id
                       });


                       html+=`<li>${user.name}: ${comments.content}</li>`
                       
                   })

                   commentBlock.innerHTML=html;

             })




getComments()
     .then(function(binhluan){
       var userIDs=binhluan.map(function(e){    //lay user_id tu comments va tra ve 1 mang moi
       return  
    })
    return getUsersByIds(userIDs)
    .then(function(users){
        return {
            users:users,
            comements:comements
        }
    });   


   
     })

     .then(function(data){
         var commentBlock=document.getElementById('comment-box')

         var html='';
         data.comements.forEach(function(comment){
             var user =data.users.find(function(user){
                 return user.id===comment.user_id;
             })   

             html +=`<li>${user.name} : ${comment.content} </li>`
         })

         commentBlock.innerHTML =html;
     })

*/



 










