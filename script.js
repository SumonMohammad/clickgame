const result=document.querySelector(".result");
const startBtn=document.querySelector("button[name=start]")
const clickBtn=document.querySelector("button[name=click]")

const winScore=10;
let count=0;

startBtn.addEventListener("click", ()=>{
    start();
})

clickBtn.addEventListener("click", ()=>{
    count++;

    result.textContent=count;
})

const start=()=>{
    count=0;
    result.textContent=count;
    clickBtn.removeAttribute("disabled");
    startCounting();
}

const startCounting=()=>{


    setTimeout(()=>{
        if(count>winScore){
            result.textContent="You Won"
        }else{
            result.textContent= "you Lost"
        }
    
        clickBtn.setAttribute("disabled",true)

    },3000)
   
}