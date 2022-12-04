/*promise

--SYnc: đồng bộ
--Async:bất dồng bộ: settimeout,setInterval,fecth,xmlHttpprequest,file reading, request animation frame



*/ 

// sleep 1s
setTimeout(function(){
    console.log(1);
},1000)


console.log(2);



// call back hell: promise giusp giai quyeest call back heell



//vd call back hell

setTimeout(function(){
    console.log(1);//viec 1
     setTimeout(function()
     {console.log(2)// ciec 2

        setTimeout(function(){


            console.log(3)//viec 3
        },1000)
    },1000)
},1000)




/////////////////cach tao ra 1 promise


//b1: khoi tao  hamf new promise
//b 2 khoi tao ham executor
var promise = new Promise(
    // ham ham executor
    function(resolve,reject){////resol la thanh cong , reject la that bai

        // viet logic
        // khi thanh cong thif goi den resove
        // khi tht bai goi : reject
        resolve([
            {
                id:1,
                name:'js'
            }
        ])
    }
);


//promise se tra ve 3 phuong thuc  do la . then(),.catch(),finaly();
// promise co 3 trang thai: pendding(đang chờ vì k có resol or reject)
//                          fulfilled:resolve, reject:reject..
promise

.then(function(courses){// khi resol dc goi thif call back cua then se dc goi
console.log(courses)
})
.then(function(){// khi resol dc goi thif call back cua then se dc goi
  //return 'so 1';///////khi return ở đây thì then phia dưới sẽ nhận  nếu k return thì trả về undified
                // nếu return lại 1 new Promise  thì phải chờ promise đó giải quyết xong ms chạy vd
     return   new Promise (function(resolve)
     {
         setTimeout(function(){
             resolve([1,2,3]);
         },3000);
     })  ;       
    })

.then(function(data){
        console.log(data) // data nay se nhan [1,2,3]); ở trên
        })
.catch(function(){// khi reject dc goi thif call back cua catch se dc goi
console.log('failure')
})
.finally(function(){// 1 trong 2 trang thai đều sẽ có finally
console.log('done')
})





////// bai tap ung dung



function sleep(ms){
    return new Promise (function(resolve){
        setTimeout(resolve,ms);

    })
}

sleep(1000)
     .then(function(){
         console.log('sooo 1');  
         return sleep(1000);
     })
     .then(function(){
        console.log('sooo 2'); 
        return sleep(1000)
     })
     .then(function(){
        console.log('sooo 3'); 
        return sleep(1000)
     })
     .then(function(){
        console.log('sooo 4'); 
        return new Promise (function(resolve,reject){/* neu retunr bawngf reject thif no se dung o đây và nhảy xuống
                                                        catch ở dưới
                                                                */
                  reject('co loi')
        });
     })


     .then(function(){
        console.log('sooo 5'); 
        return sleep(1000)
     })
     .catch(function(a){
       console.log(a)// se hien ra tu co loi

     })





/////1.promise.resolve
//2.promise.reject
//3. promise.all: giup chay song song 2 voiec cung 1 luc bang promise co time lau nhat: cac promise  trong promise all phai tra ve resole

console.log('-----------------------------------------------------')
/*var promise = new Promise (
    function(resolve,reject){
        resolve('success');
    }
)*/

// dday la cach 2
var  promise=Promise.resolve('succes');


promise
    .then(function(result){
         console.log(result)
    })

// vd ve promise all


var promise1 =new Promise (function(resolve
    ){
        setTimeout(function(){
            resolve([9]);

        },2000);

    } )
0
var promise2 =new Promise (function(resolve
        ){
            setTimeout(function(){
                resolve([7,8]);
    
            },5000)
    
        } ) 

Promise.all([promise1,promise2])// tra ve 1 array
.then(function(result){
    var result1=result[0]
    var result2=result[1]

    console.log(result1.concat(result2));

})

