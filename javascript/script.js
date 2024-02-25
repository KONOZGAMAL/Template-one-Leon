let menu_list = document.querySelector(".list");

let fa_bars = document.querySelector(".fa-bars");
fa_bars.addEventListener("click",()=>{
    if (!(menu_list.classList.contains("show"))) {
        menu_list.classList.add("show")
    }else{
        menu_list.classList.remove("show")
    }
})