

let body =document.querySelector("body")
body.style.background ="#292545"


let block1 = document.createElement("div")
block1.style.backgroundColor = "#AB8A95"
block1.style.height = "200px"
block1.style.width = "1000px"
document.querySelector("body").append(block1)

let text = document.createElement('p')
text.innerHTML = "Кошка-картошка"
text.style.color = "#292545"
text.style.fontSize = "50px"
text.style.textAlign = "center"

document.querySelector("div").append(text)



let image = document.createElement("img")
image.src = "../images/html.png"

document.querySelector("div").append(image)
