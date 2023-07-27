let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    // CREACIÓN DE ELEMENTOS 
    let li = document.createElement("li");
    let item = document.querySelector("input").value;
    if (item.trim() !== "") {
       
        li.textContent = item;

        // ADJUNTAR EL ELEMENTO CREADO DENTRO DE UL 
        li.appendChild(addDeleteBtn()) // <li> texto <button> </li>
        ul.appendChild(li);
    }   
})

function addDeleteBtn() {
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", (e)=> {
        let item = e.target.parentElement;
        ul.removeChild(item);
    
    })

    return deleteBtn
}


