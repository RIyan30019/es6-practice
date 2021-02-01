const hubby="shinchan";
// hubby="doraemon";
console.log(hubby);

const num=[12,34];
num[1]=22;
console.log(num);

const nayok = {name:sakib, phone:999};

//function default value

function add(num1,num2=12){
    add(12,34);
    console.log(add);
}

//template

let firstName='justin';
let lastName='timberlake';
let fullName=`${firstName} ${lastName}`;
let fullName=`${firstName} ${anyMathmaticalOperation}`;
const multiLine=`heello world
i am here 
what is going on`;

//arrow
function doubleIt(num){
    return num*2;
}

const doubleIt=function(num){ //declare funtion
    return num*2;

}

const double=num=>num*2;//arrow function
const add=(x,y)=>x+y;//double parameter
const hi5=()=>5;//empty parameter

//three dots
const ages=[12,31,44,12,12];
const ages1=[23,45,66,77,55];
const allAges=ages.concat(ages1);
const allAges1=[...ages,...ages1];

//class
 class student{
     constructor(){
         this.id=2
         this.name="Mahi";
     }
 }
 const student1=new student();
