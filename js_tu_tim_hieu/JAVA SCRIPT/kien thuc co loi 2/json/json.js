/*
  json: là 1 định dạn dữ liệu(chuỗi): viết tắt của từ javascript object notation

  json giúp thể hiẹn những kiểu dữ liêu sau: number,boolear, null,array, object



  --mã hóa/ giải mã





  //stringify: tu js sang Json
  /parse: tu JSON sang js types
*/ 
//var json='"the vinh"'   //dang chuoi
//var json='1';// dang so
//var json='true';// dang boolen
//var json='["js","php"]';//dang mang
//var json='{"name":"sondang","age":18}'



var a='1';

console.log(JSON.parse(a));       /// chuyern sang js


var b='["js","php"]';// vs mang

console.log(JSON.parse(b)[1])




////////   //stringify: tu js sang Json


console.log(JSON.stringify(null));
console.log(JSON.stringify([
    'js',
    'php'
]))


console.log(JSON.stringify({
    name: 'son dang',
    age:16
}))
