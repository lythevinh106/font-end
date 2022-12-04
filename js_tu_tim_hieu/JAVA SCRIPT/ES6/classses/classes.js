// class là cách viết khác của contructor function



// cach 1
function Course(name, price){

    this.name=name;
    this.price=price;

    this.getName=function(){
        return this.name
    }

}


const phpCourse = new Course('php',1000);




const jsCourse = new Course('js',1200);

console.log(phpCourse)
console.log(jsCourse)



//cach2 


  class Course2{
      constructor(name,price){
             this.name=name  ;
             this.price=price  ;
      }
      getname(){
          return this.name;
      }
  }
  const phpCourse2= new Course2('php',1000);


  const jsCourse2 = new Course2('js',1200);
  console.log(phpCourse2)
console.log(jsCourse2)
  