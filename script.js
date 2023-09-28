const ques = document.querySelectorAll(".ques");
const icon = document.querySelectorAll(".ques i")
const ans = document.querySelectorAll(".ans");

ques.forEach( (element,i)=> {
    ques[i].addEventListener("click",()=>{
        if(ans[i].style.maxHeight){
            ans[i].style.maxHeight = null;   
        }else{
            ans[i].style.maxHeight = ans[i].scrollHeight + "px"; 
        }

        ques[i].classList.toggle("active");

        if(icon[i].classList.contains("fa-plus")){
            icon[i].classList.remove("fa-plus");
            icon[i].classList.add("fa-minus");
        }else{
            icon[i].classList.add("fa-plus");
            icon[i].classList.remove("fa-minus");
        }
    }) 
});
