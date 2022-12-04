
/*
var emailKey='email';

var myInfo = {
    name:'the vinh',
    
    address:'phu yen',
    [emailKey]: 'oi gioi oi',
    getName: function(){
        return this.name;// tuong tu nhu myinfo.name

    }// neu la funciton  thi k gọi là key mà gọi là phương thức//method ngươc lại là thuoc tính  property

};

myInfo.email = 'ga cong nghiep';// them 1 key vao trong object
myInfo['my-adrees'] = 'ho chi minh';// cách 2


delete myInfo.name;// xoa 1 key

console.log(myInfo);
console.log(myInfo.name);// cach lay key ra ngoai
console.log(myInfo['address']);// cach lay key ra ngoai 2


console.log(myInfo.getName());








//object constructor: xay dung doi tuong

function User(firstName, lastName,avatar){// day la mo ta thiet ke cua doi tuong

      this.firstName=firstName;
      this.lastName=lastName;
      this.avatar=avatar;

      this.getName=function(){
          return `${this.firstName} ${this.lastName}`

      }


}


var author =new User('Vinh','the','avatar' )    ;   // xay dung object constructor

var user =new User('son','dang','avatar' )    ; 

author.title='chia se tai f8'; //them thuoc tinh rieng 
user.comment='qqq'; //them thuoc tinh rieng 


console.log(author);

console.log(user);
console.log(author.constructor);// lay ra mo ta cua user

console.log(author.getName());// tra ve phiong thuc
console.log(user.getName());// tra ve phiong thuc










//object prototype--basic(co ban): giong nhu nhung vien gach cau tao nen ngoi nha..sẽ thêm vào đối tượng đc tạo ra


function User(firstName, lastName,avatar){// day la mo ta thiet ke cua doi tuong

      this.firstName=firstName;
      this.lastName=lastName;
      this.avatar=avatar;

      this.getName=function(){
          return `${this.firstName} ${this.lastName}`

      }


}


var user1 =new User('Vinh','the','avatar' )    ;   // xay dung object constructor

var user2 =new User('son','dang','avatar' )    ; 

User.prototype.className='f8';
User.prototype.getClassName= function(){
    return this.className;

}



console.log(user1.className);
console.log(user2.getClassName());









// doi tuong date: keyword: javascript date object mozilla


var date = new Date();


console.log(date);

var year =date.getFullYear();
var day = date.getDate();
var hours= date.getHours();
var month= date.getMonth()+ 1;
var minutes= date.getMinutes();
var seconds= date.getSeconds();
console.log(`${year}/${day}/${month} `);












//switch case


var date=3;


switch(date){
    case 2:
     console.log('hom nay la thu2');
     break;


     case 3:// case 3 vs 4 se cung in ra hom nay la thu 4
     case 4:
     console.log('hom nay la thu4');
     break;


     case 5:
     console.log('hom nay la thu5');
     break;


     default:
         console.log('khong bit');

}



*/


//toan tu 3 ngoi


var course ={
    name:'js',
    coin:250

};


if(course.coin > 0){
    console.log(`${course.coin} coinns `);
}
else{
    console.log('mien phi');

}

//cach 2
var result= course.coin > 0 ?  `${course.coin} coinns ` : 'mien phis';
console.log(result);



var a=3.5;
  console.log(a.toFixed(1));

















