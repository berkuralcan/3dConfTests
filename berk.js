console.log("berk here")

let playing = true

const playButton = document.getElementById("playButton");
const playButtonContent = document.getElementById("playButtonContent")
const mainTest = document.getElementById("3dTest")
const changeButton = document.getElementById("change")
const modelName = document.getElementById("model-name")
modelName.innerHTML = "Fabric"


const rotation = function() {
    console.log("Performing rotation.")
    if(playing) {
        playButtonContent.innerHTML = "⏸"
        mainTest.setAttribute("auto-rotate", "")
        mainTest.setAttribute("camera-controls", "")

    } else {
        playButtonContent.innerHTML = "▶️"
        mainTest.removeAttribute("auto-rotate")
        mainTest.removeAttribute("camera-controls")
        
    }

}

playButton.addEventListener("click", function() {
    console.log("Button clicked.")
    playing = !playing
    console.log(playing)
    rotation()
})

let sources = ["sofa-fabric/sf1.gltf", "sofa-leather/sf1.gltf"]
let chosenModel = 0


const changed = function() {
    
    chosenModel++
    modelName.innerHTML = sources[chosenModel]
    console.log(chosenModel)
    mainTest.setAttribute("src", sources[chosenModel])
    if(chosenModel >= 2) {
        chosenModel = 0    
        mainTest.setAttribute("src", sources[0])
        modelName.innerHTML = "Fabric"
    }
}

changeButton.addEventListener("click", function() {
    console.log("Change clicked.")
    changed()
})



// Getting the source from upload:

let modelSource = document.getElementById("modelSource")
let modelSourceButton = document.getElementById("modelSourceApply")
let modelViewerSpace = document.getElementById("model-viewer-space")

const manualChange = function() {
    manualSource = modelSource.value
    mainTest.remove()
    modelViewerSpace.appendChild(mainTest)
    mainTest.setAttribute("src", manualSource)
}


modelSourceButton.addEventListener("click", manualChange)