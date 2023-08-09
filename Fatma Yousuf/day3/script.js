// // var name ="Fatma"
// // var age=23
// // var output= `I'm ${name} and I'm ${age} years old` ;
// // console.log(output)





// // var x=5
// // var x=8
// // console.log(x)




// // const getname=name=>console.log(name);
// // getname("fatma")


// // const getnum=num=>{

// // for(let i=1 ; i<=num; i++){

// // if(i % 2 === 0){

// // console.log(i)

// // }

// // }
// // }
// // getnum(10)


// // const num1=[1,2,3,4,5]
// // const num2=[...num1]    
// // num2.push(50)         //chnge it will be only in num2
// // console.log(num1)


// // const num1=[1,2,3,4,5]
// // const num2=num1           //it will be change at the same 
// // num2.push(50)
// // console.log(num2)

// // const user={

// // username:"fatma",
// // age:23,
// // adderess: "muscat"


// // }

// // const {username ,...x}=user

// // console.log(x)





// // const user= [
// //     {

// //     username:"fatma",
// //     age:23,
// //     mobile:["99981333","99816133"]

    
    
// //     }
    
// //   ]
// //   const [{mobile}]=user    
// //   const[m1,m2]=mobile

     

    
// //     console.log(m2)




// // const numbers=[1,2,3,4,5,6,7,8,9,10]
// // numbers.forEach(function(el,idx){

// // //console.log(el)
// // console.log(idx)

// //})


// // const names=["fatma","shifa","sara","maryam"]

// // names.forEach(el=>console.log(el))

// // names.map(el=>console.log(el))


// // const user=[
// //     {

// // username:"fatma",
// // age:23,
// // mobile:["93332424","889655111"]


// // },

// // {

// //     username:"sara",
// //     age:23,
// //     mobile:["93332424","889655111"]
    
    
// //     },




// //     {

// //         username:"noor",
// //         age:23,
// //         mobile:["93332424","889655111"]
        
        
// //         }
// // ]
// // //  user.forEach(el=>console.log(el.username))

// //  const newuser= user.map(el=>console.log(el))

// // // const newuser= user.forEach(el=>console.log(el))






// // const x=[1,2,3,4,5,6,7]
// // const newx = x.filter(el=>el>5)
// // console.log(newx);




// const getnumbers=(a,b,c)=>{

// if(a>b && a>c && b>c){

// console.log(a+ " is the max number")
// console.log(c+ " is the min number")


// }
// else if(b>c && b>a && c>a){


//     console.log(b+ " is the max number")
//     console.log(a+ " is the min number")
    

// }

// else if(c>a && c>b && a>b){


//     console.log(c+ " is the max number")
//     console.log(b+ " is the min number")


// }



// else {


// console.log(" please enter numbers")

// }

// }



// getnumbers()



// console.log(Math.max(3,2,1))
// console.log(Math.min(3,2,1))

// function marks(m1,m2,m3,m4,m5){

// const total=m1+m2+m3+m4+m5;
// const avrage=total/5
// const persantage= total*0.8

// console.log(total)
// console.log(avrage)
// console.log(persantage)

// }

// marks(95,76,58,90,89)


function months(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12){


    if(m1 ===1 ){


     console.log("31")


    }
else if(m2 === 2 ){

    console.log("28")


}

else if(m3 === 3 ){

    console.log("31")

    
 }
else if(m4 ===4 ){

    console.log("30")

    
}
else if(m5 ===5 ){

    console.log("31")

    
}
else if(m6 ===6 ){

    console.log("30")

    
}
else if(m7 ===7 ){

    console.log("31")

    
}
else if(m8 ===8){

    console.log("31")

    
}
else if(m9 ===9 ){

    console.log("30")

    
}
else if(m10 ===10 ){

    console.log("31")

    
}
else if(m11 ===11 ){

    console.log("30")

    
}

else if(m12 ===12 ){

    console.log("31")


    
}

else{


    console.log("enter the number")


}


}

months(5)