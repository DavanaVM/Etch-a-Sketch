const main = document.querySelector("#main");
size = 2500
sizemult = 50;
const colors = document.querySelector("#colors")
const reset = document.querySelector("#clear")


function buildscreen(sizemult){
    size = sizemult * sizemult
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
}


reset.addEventListener('click', () =>{
    els = document.getElementsByClassName("sdiv")
    Array.from(els).forEach((e) => {
        e.setAttribute("style", "color:white")
    });
})

buildscreen(sizemult)


let mousedown = false;
document.addEventListener('mousedown', (e) => {
    if(e.target.id.includes("draw")){
        e.target.setAttribute("style", `background-color:${colors.value}`)
    }
    mousedown = true;
})

document.addEventListener('mouseup', (e) =>{
    mousedown = false;
    if(e.target.id == "range"){
        buildscreen(e.target.value)
    }
})


document.addEventListener('dragstart', (e) => {
    e.preventDefault()
})

document.addEventListener("mouseover", (e) => {
    if(mousedown === true && e.target.id.includes("draw")){
        e.target.setAttribute("style", `background-color:${colors.value}`)
    }
})


