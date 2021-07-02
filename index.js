let button = document.getElementById('button')
let div = document.getElementById('tasks')
let input = document.getElementById('input')

button.addEventListener('click',() =>{
    var list =document.createElement('p')
    list.classList.add('paragraph')
    list.innerText = input.value
    div.appendChild(list)
    input.value =""
    list.addEventListener('click',() => list.style.textDecoration = "line-through")
    list.addEventListener('dblclick',() =>div.removeChild(list  ))
})