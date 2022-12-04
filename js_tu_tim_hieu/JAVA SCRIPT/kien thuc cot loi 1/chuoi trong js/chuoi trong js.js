/*
--xem do dai cua chuoi
var fullName ="the vinh"
cosole.log(fullName.length);





---cong chuoi chuan tamplate es6;


var firstName="the";
var lastName="vinh";
console.log(`toi ten la: ${firstName} ${lastName} `);



*/

/*cacs phuong thuc lam viec voi chuoi: kew word:javascript string methods
1.Length{
    console.log(mystring.length)
}

2.Find index : tim chuoi do nam o vi tri thu may dau tien ma no tim duoc. bat dau tu 0
var myString ='hoc  js tai js f8';
console.log(myString.search('js'));//
console.log(myString.indexOf('js'));//
console.log(myString.indexOf('js',6));dang tim vi tri thu 2
console.log(myString.lastIndexOf('js'));tim vi tri cuoi cung



3.cut string:
var myString ='hoc js tai f8';
console.log(myString.slice(4,6));// cat chu js
console.log(myString.slice(4));// cat het tu vi tri thu 4
console.log(myString.slice(0)); cat het chuoi
console.log(myString.slice(-3,-1));cat tu phai sang trai


4.repalce: thay the chuoi
var myString ='hoc js tai js f8';
console.log(myString.replace('js','javascripit')); chi thay the chu js dau tien tim thay dduoc
console.log(myString.replace(/js/g,'javascripit')); thay the tat ca cac chu js 



5/toUpperCase: chuyen sang chu hoa
var myString ='hoc js tai js f8';
console.log(myString.toUpperCase());


6/tolowerCase: chuyen sang chu thuong
console.log(myString.toLowerCase);


7/trim: cat bo khoang trang thua
console.log(myString.trim());


/8.split: se tach chuoi ra thanh array
var  languages ='javascript , PHP ,RUBY';
console.log(languages.split(', '));// dau phay  va dau cach la diem chung

console.log(languages.split(''));// cat ra tung chu cai

/9 get a character by index
var myString2 ="Son Dang";
console.log(myString2.charAt(2))
console.log(myString2.[2])// tra ve undified neu chuoi rong


*/


















//kieu du lieu number ///

var age='vinh';
var pi=3.14;
var result = 20/ 'abc';
console.log(isNaN(age));
console.log(isNaN(result));// kiem tra xem cos phải là NaN hay k;
console.log(age.toString());// chuyen sang kieu string;
console.log(pi.toFixed(1))// lam tron so thap phan va chuyen sang kieu string

















function stringInString(needle,haystack){

    if(typeof needle== 'string' && typeof haystack=='string'  && !isNaN(needle) && !isNaN(haystack)){
        if(haystack.search(needle)!=-1){
            return true;
        }

    }
    else{
        return false;
    }

}



