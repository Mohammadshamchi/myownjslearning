var input = document.getElementById("addTasks")
var button = document.getElementById("addTasksBtn")
var ul = document.querySelector("ul")
// var li = document.querySelector("li")
var li = document.querySelectorAll("li")

function addListItem (){
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value));
    
    var button = document.createElement("button")
    button.innerHTML="DELETE"
    li.appendChild(button)
    ul.appendChild(li)

    input.value = ""
}

function inputValue (){
    return input.value.length;
}
function addListWithClick (){
    if (inputValue()>0){
        addListItem()
    }

}

function addListWithKey (e){
    if (e.keyCode === 13 && inputValue() > 0) {
        addListItem()
}
}

// console.log(li[0])


// for (var i=0 ; i < 6 ; i++){
   
//     console.log(li[i])
//     li[i].addEventListener("click",function doneTask (){
//         console.log(li[i])
//     })
    
// }


// window.onclick in this command All of the part get stricktrogh :D Even input place holder
ul.onclick = e => {
    var ele = e.target;  // to get the element
    console.log(ele)
    ele.classList.toggle("done")
    
} 

button.addEventListener("click",addListWithClick);

input.addEventListener("keypress",addListWithKey)

ele.classList.toggle("done")