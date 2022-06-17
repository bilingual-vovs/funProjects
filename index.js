let cps = document.getElementById("result")
let cpsBox = document.getElementById("cps-div")
let cpCount = 0
let time = 0
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
let graph = {
    data: [],
    get sizeX(){
        return document.getElementById("graph-div").clientWidth
    },
    get sizeY(){
        return document.getElementById("graph-div").clientHeight
    },
    get height(){
        let height = 7
        this.data.forEach(elem =>{
            if (height < elem) height = elem
        })
        return height
    },
    update(newPix){
        let width = this.sizeX
        let height = this.sizeY
        let graphHeight = this.height
        let container = document.getElementById("graph-div")
        container.innerHTML = ''
        this.data.push(newPix)
        this.data.forEach(elem => {
            container.innerHTML += `<div style='position:absolute;top:${height/graphHeight*elem};left:${width/10*(width/10 - elem)};'></div>`
        })
    }
}

cpsBox.addEventListener("click",(event)=>{
    console.log("test")
    cpIncrement(event)
})