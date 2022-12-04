//API (la những url)là cổng giao tiep giữa các phân mêm




// backend-> api-> fetch->json/xml
// json.parse-> js types
//render ra gia0 dien với HTMl


var postApi = 'https://jsonplaceholder.typicode.com/posts'


// fetch se tra ve stream(la du lieu tra ve)--stream la 1 promise
/*fetch(postApi)
    .then(function(response){

          return response.json();//tra ve 1 promise json.prase: la chuyen qua js
    })

    .then (function(posts){
        console.log(posts)

    })
    .catch(function(err){
        console.log('coloi')
    })

*/




 
 

 //vd   
    
var postApi = 'https://jsonplaceholder.typicode.com/posts'



fetch(postApi)
    .then(function(response){

          return response.json();//response trong trường hợp này là 1 object va đc chuyen sang json.parse

    })

    .then (function(posts){
    var htmls=posts.map(function(post){
        return `<li>
            <h2>${post.title}</h2>
            <h2>${post.body}</h2>
        </li>`
    })


    var html=htmls.join('')// chuyen tu mang sang chuoi de in ra ;
     document.getElementById('post-block').innerHTML=html

    })
    .catch(function(err){
        console.log('coloi')
    })

    