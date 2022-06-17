let cps = document.getElementById("result")
let cpsBox = document.getElementById("cps-div")
let cpCount = 0
function cpIncrement(event){
    cpCount++
    cps.innerHTML = cpCount
    click(event.offsetX, event.offsetY, cpCount)
}
function click(x,y, indx){
    document.getElementById("cps-div").innerHTML += `<div id='click-${indx}' style='position:absolute;top:${y-5}px;left:${x-5}px;'></div>`
}
function clearCSP(){
    for(let i = 1; i<=cpCount; i++ ){
        document.getElementById("click-" + i).remove()
    }

    cpCount = 0
}
cpsBox.addEventListener("click",(event)=>{
    console.log("test")
    cpIncrement(event)
})