// dd
let body =document.querySelector("body")
body.style.gap = "20px"
body.style.background ="#292545"

let header = document.createElement("div")
header.style.backgroundColor = "#4285F4"
header.style.height = "200px"
header.style.width = "1000px"
header.style.margin = "20px"
document.querySelector("body").append(header)

let block1 = document.createElement("div")
block1.style.backgroundColor = "#AB8A95"
block1.style.height = "200px"
block1.style.width = "1000px"
block1.style.margin = "20px"
document.querySelector("body").append(block1)

let text = document.createElement('p')
text.innerHTML = "Кошка-картошка"
text.style.color = "#292545"
text.style.fontSize = "50px"
text.style.textAlign = "center"

document.querySelector("div").append(text)

let image = document.createElement("img")
image.style.height = "200px"
image.style.width = "200px"
image.src = "../images/aaa.png"

document.querySelector("div").append(image)
