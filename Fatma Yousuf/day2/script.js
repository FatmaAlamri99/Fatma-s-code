// var x="ahmed";

// switch(x){

//     case "mohammed":
//         console.log("welcome mohammed")
//     break;

//     case "ahmed":
//         console.log("welcome ahmed") 
//     break;

//     case "ali":
//         console.log("welcome ali") 
//     break; 

//     default:
//         console.log("thank you")
     

// }


// var char='+';
// var x=5;
// var y=10;

// switch(char){

//         case '-':
//             console.log(x-y)
//         break;
    
//         case '+':
//             console.log(x+y) 
//         break;
    
//         case '*':
//             console.log(x*y) 
//         break; 

//         case '/':
//             console.log(x/y) 
//         break;
    
//         default:
//             console.log("thank you")
// }



//var x=5;

//x++
//console.log(x);


// console.log(++x);
// console.log(x);
// console.log(x++);
// console.log(x++);
// console.log(++x);
// console.log(++x);
// console.log(x);

// var x=5;
// while(x<=50)
// {

// console.log(x)
// x++

// }


// var number=[1,2,3,4,5,6,7,8,9,10]
// var counter=0

// while(counter<number.length)
// {


// console.log(number[counter])
// counter++


// }



// for(var i=1;i<=10;i++)
// {

// console.log(i)



// }



// var names=["fatma","noor","sara","reem","shifa","abrar","shahad"]
// for(var i=0;i<names.length;i++){


// console.log(names[i])

// }


// var num1=100;
// var num2=200;

// function sumNum(){


//     var total=num1+num2;
//     return total;

// }

// console.log(sumNum())


// var x=5;
// var y=10;
// var ch='+'


// function gett(x,y,char){

// switch(ch){

//     case '*':
    
//     return x*y

//     break; 

    
    
//     case '+':
     
//     return x+y    
//     break;   

//     case '-':
     
//     return x-y    
//     break;   


//     default:

//     return "Error"
// }



// }
// console.log(gett(10,5,'+'))


//var prom=prompt("enter your name please")

//Q1

// function sayYesOrNo(num){

// if(num % 3 ===0 && num %  4 ===0){

// return "yes"


// }

// else{

// return "No"

// }
// }
// console.log(sayYesOrNo(12))


//Q2






//Q4



// function check(numbers)
// {

// if(numbers < 0){


// return "nagitive"


// }

// else if(numbers > 0){


// return "positive"


// }
//  else{

// return "equal to zero"



//  }
// }
// console.log(check(2))
// console.log(check(-2))
// console.log(check(0))



// function maxx(a,b,c)

// {

//     if(a>b && a>c && c>b){

//         console.log(a+"is the max number "+ b + " is the min number")
        
        
//     }
//     else if(b>a && b>c && a>c){

//         console.log(b+" is the max number "+ c + " is the min number")
      
//     }

// else if (c>b && c>a && b>a)
//       {

//         console.log(c+"  is the max number "+ a +"  is the min number")
    


//       }
// else {


// return " please enter the number"

// }



// }

// maxx(7,8,5)
// maxx(3,6,9)


// function evenOrODD(numbers)
// {

// if(numbers % 2 ===0 ){


// return "it is even number"


// }


// else{

// return "odd "

// }

// }

// console.log(evenOrODD(2))
// console.log(evenOrODD(5))
// console.log(evenOrODD(4))



// function vowel(char){

//     var chr=['a','e','i','o','u']

// if (char === 'a' ||char=== 'e'|| char==='i'|| char==='o' || char==='u'){


//     return "vowel"


// }


// else{

// return "constant"
// }


// }

// console.log(vowel('ahmad'))


// function int(number){

// for(var i=1; i <=  number;i++){

//     console.log(i)


// }



// }
// int(10)



// function maltip(number){

//     for(var i=1; i <= 12;i++){
    
//         console.log(i*number)
    
    
//     }
    
    
    
//     }
//     maltip(8)






function maltip(number){

    for(var i=1; i <= number;i++){
    
        if(i % 2 === 0){


           console.log(i)





        }
    
    
    }
    
    
    
    }
    maltip(50)
