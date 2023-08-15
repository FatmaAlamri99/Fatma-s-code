// let btn=document.getElementsByClassName('btn')
// let box=document.getElementsByName('box')

// let a=document.getElementById('a')
// let b=document.getElementById('b')
// let c=document.getElementById('c')
// let d=document.getElementById('d')




// setTimeout(()=>{

// a.style.display='block'
    
    
    
// },1000)
// setTimeout(()=>{

// b.style.display='block'
        
        
        
// },2000)
//  setTimeout(()=>{
//  c.style.display='block'
            
            
            
//  },3000)
//  setTimeout(()=>{

//  d.style.display='block'
                
                
                
// },4000)
// btn.addEventListener('click',()=>{}




let 
=document.getElementsByClassName('pictures')
let group=document.getElementsByTagName('li')


for(let i=0 ; i<group.length;i++){

group[i].addEventListener('click',function(){

let x =group[i].getAttribute('src')
 pictures.setAttribute('src',x)

 


})


}
