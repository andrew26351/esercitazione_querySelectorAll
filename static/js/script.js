let el = document.querySelectorAll(".myElement")

function colorChange(event){
    let elements = event.target
    {
        if(elements.classList.contains("yellowBg")){
            elements.classList.remove("yellowBg")
            elements.classList.add("greenBg")
        }
        else{
            elements.classList.remove("greenBg")
            elements.classList.add("yellowBg")
        }
    }
}
    
for(let i = 0; i < el.length; i++){
    let elements = el[i]
    console.log(elements)
    elements.addEventListener("click", colorChange)
}

        
        