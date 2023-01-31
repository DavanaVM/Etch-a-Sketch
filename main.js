const main = document.querySelector("#main");

for(let i = 0; i < 256; i++){
    let div = document.createElement("div");
    div.classList.toggle("sdiv");
    if(i % 16 == 0 && i != 0){
        let brk = document.createElement("div")
        brk.classList.toggle("break")
        main.appendChild(brk)
    }
    div.id = "draw" +[i]
    main.appendChild(div);
}
let mousedown = false;
document.addEventListener('mousedown', (e) => {
    if(e.target.id.includes("draw")){
        e.target.classList.toggle("black")
    }
    mousedown = true;
})

document.addEventListener('mouseup', () =>{
    mousedown = false;
})


document.addEventListener("mouseover", (e) => {
    if(mousedown === true && e.target.id.includes("draw")){
        e.target.classList.toggle("black")
    }
})



