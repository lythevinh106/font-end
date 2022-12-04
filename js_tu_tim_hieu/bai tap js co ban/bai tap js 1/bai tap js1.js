// cho arrra=[1,5,7,8,9,15,8]

//in ra cac so chan cua mang

var arr=[9,5,25,5,9,5,15,6];


var arrSoChan=arr.filter(function(numbers){
    return numbers%2==0
})

console.log(arrSoChan);

// cong tat ca cac so chia het cho 5
var Chia5=arr.reduce(function(total,numbers){
     
      if (numbers%5==0){
           total+=numbers
           
      }
      return total
      
      
},0)

console.log('cac so chia het cho 5 la',Chia5);


// tim ra tich 3 so dau cua mang\


var tich3Sodau=arr.reduce(function(tich,numbers,index){

    if(index<3){
        tich=tich*numbers
    }
    return tich
},1)


console.log('tich 3 so dau ',tich3Sodau);



// tionh tong 3 cuoi mang

var tong3Socuoi=arr.reduce(function(tong,numbers,index,arrOrigin){
     n= arr.length
    if(index > arrOrigin.length-4){
        tong+=numbers
    }
    return tong
},0)


console.log('tong 3 so cuoi ',tong3Socuoi);


// tim xem co phan tu nao la so 5 khong


var findNumeber5=arr.some(function(number,index)
{
       return number===5;
})


console.log(findNumeber5)


// dem so phan tu bang 5 trong mang

 var result=0;   
for(var i=0;i<arr.length ; i++){
    if(arr[i]==5){
        result++
    }
  
}

    
console.log("vay co tat ca cac so bang 5 la",result);


//sap xep cac phan tu trong mang tang dan

var arr2=[2,6,9,1,8,2,9,3,1,12,3]


var sapxep=arr2.sort(function(a,b){
      if(a<b){
          return -1
      }
       else if(a>b){
          return 1
      }
})

console.log('sau khi sap xep tang dan la ' , sapxep)



//////////object/////////



var obj={
    firstName: 'ly',
    lastName:'the vinh'
}


//in ra ma hinh ho va ten 


console.log(`ho ten cua hoc sinh la: ${obj.firstName} ${obj.lastName}`)



/*dinh nghia 1 doi tuong car gom cac thuoc tinh 
:


hang xe la bmw , gia 300000usd,xuatxu o duc


-- bo sung them thuoc tinh mau xac cua xe la den
-- thay doi thuoc tinh gia thanh 250000

-- in ra thong bao xe nhu sau vintfast xuaat xu o duc o gia 250000
*/ 


var car={
    hangxe:'vinfast',
    course:300000,
    xuatXu:'germery'

}


car.color='den';
car.course=250000;


console.log(`hangxe ${car.hangxe} duoc san xuat tai ${car.xuatXu} co gia la ${car.course}`);







// bai tap object


var person=[
    {
        name: 'trung',
        class:'cdtin43',
        date:'05-02-2020',
        age:20
    },


    {
        name: 'vinh',
        class:'cdtin43',
        date:'06-01-2020',
        age:19
    }

    ,
    {
        name: 'trung',
        class:'cdtin42',
        date:'06-12-2020',
        age:20

    }
]
/// sap xep cac mang object co so tuoi tang dan


var Agesort=person.sort(function(a,b){
     if(a.name<b.name){
         return 1
     }

     else {
         return -1
     }

})


console.log('sau khi mang sap xep so tuoi la ',Agesort)


// tra ve nhung hoc vien tham gia truoc thang 2


function convertDateString(dateString){
   var arrDate= dateString.split('-')
   var date=arrDate[2]+'-'+ arrDate[1]+'-'+arrDate[0]

   return new Date(date)
}





var ageMonth2=person.filter(function(student){

      var dates=convertDateString(student.date);
      return dates.getMonth() < 1
      
})


console.log('cac hoc vien sinh ra truoc thanh 2',ageMonth2)



// chuyen doi ten hoc vien thanh viet hoa


var nameUpcase=person.map(function (student,index){
     student.name=student.name.toLocaleUpperCase()
     return student
         
     

})



console.log('sau khi sua ho ten thanh hoa',nameUpcase)













//////////// bai 4 ve object
var doan ={
    name:'doan',
    age:22,
    salary:1000
}
;
var trung ={...doan};//... la lay toan bo du lieu cua doan 

trung.clone=true;
trung.name='trung'


console.log(trung);


var vinh={}

vinh.name=doan.name;

console.log(vinh)










/////bai tap ve string////




var geeting='Welcome to Nodemy is stand for Nodemy academy'

//dem so ki tu

console.log(`co tat ca ${geeting.length} ki tu`)

// tim kiem tu Nodemy

var Find=geeting.indexOf('Nodemy');

console.log(`chu nodemy xuat hien o vi tri thu ${Find}`)


// kiem tra xem co bat dau voi tu welcome khong

var Find2=geeting.startsWith('Welcome')


console.log(Find2)// kiem tra xem co bat dau voi tu welcome hay khong



//cat chu academy

var cutString =geeting.slice(geeting.length-7,geeting.length);


console.log(cutString)


// cat chuoi ra thanh 1 array


var cutString2 =geeting.split(' ');//ngan cach phan chia boi ki tu ma ta dua truoc


console.log(cutString2)


// kiem tra xem chu co ton tai trong chuoi hay k



var cutString3 =geeting.includes('Welcome');//ngan cach phan chia boi ki tu ma ta dua truoc


console.log(cutString3) // tra ve true or false

// tim kiem va thay the lan dau tien

var cutString4 =geeting.replace('Nodemy','NODEMY');


console.log(cutString4) 
var cutString5 =geeting.replace(/Nodemy/g,'NODEMY');//tim kiem va thay the toan bo


console.log(cutString5) 


//khi muon lay mot chu cai

var cutString6 =geeting.charAt(geeting.length-5);//tim kiem va thay the toan bo


console.log(cutString6) 







