let plus  = document.querySelectorAll(".plus")
let more= document.querySelectorAll(".more")
for(let i = 0;i<plus.length;i++){
    plus[i].addEventListener("click",()=>{
        more[i].classList.toggle("active")
        
    })
}
