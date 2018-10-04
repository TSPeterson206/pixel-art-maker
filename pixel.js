function table() {

    let grid = document.querySelector('#grid')
    
    for (let i = 0; i < 6050; i++) {
       let cell = document.createElement('div')
       cell.classList.add('pixel')
       grid.appendChild(cell)
       }
    }

table();

function clickBox () {
let targetPixel = document.getElementsByClassName('pixel')

for (let i=0; i<targetPixel.length; i++) {
    targetPixel[i].addEventListener("click", function (event) {
        let selector = document.querySelector("#colorSelector")
        //let changedPixel = event.target
        event.target.style.backgroundColor = selector.value
        })
    }
}

clickBox()
