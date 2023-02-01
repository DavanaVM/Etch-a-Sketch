const main = document.querySelector("#main");
size = 900
sizemult = 30;
const colors = document.querySelector("#colors")
const reset = document.querySelector("#clear")

reset.addEventListener('click', () =>{
    els = document.getElementsByClassName("sdiv")
    Array.from(els).forEach((e) => {
        e.setAttribute("style", "color:white")
    });
})

const resize = document.querySelector("#resize")
resize.addEventListener("click", () =>{
    sizemult = prompt("enter cubes per row (max 100)")
    if(isNaN(size) || sizemult > 100 || sizemult <= 0){
        size = 256
        sizemult = 16
    }else{
        size = sizemult * sizemult
    }
    main.innerHTML = ""
    for(let i = 0; i < size; i++){
        let div = document.createElement("div");
        div.classList.toggle("sdiv");
        if(i % sizemult == 0 && i != 0){
            let brk = document.createElement("div")
            brk.classList.toggle("break")
            main.appendChild(brk)
        }
        div.id = "draw" +[i]
        main.appendChild(div);
    }
})

for(let i = 0; i < size; i++){
    let div = document.createElement("div");
    div.classList.toggle("sdiv");
    if(i % sizemult == 0 && i != 0){
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
        e.target.setAttribute("style", `background-color:${colors.value}`)
    }
    mousedown = true;
})

document.addEventListener('mouseup', () =>{
    mousedown = false;
})


document.addEventListener('dragstart', (e) => {
    e.preventDefault()
})

document.addEventListener("mouseover", (e) => {
    if(mousedown === true && e.target.id.includes("draw")){
        //e.target.classList.toggle("black")
        e.target.setAttribute("style", `background-color:${colors.value}`)
    }
})

