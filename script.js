const insert = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value
    switch(type){
        case 'text': appendText(label, placeholder) 
                    break
        case 'radio': appendRadio(label, placeholder)
                    break
        case 'button': appendButton(label,placeholder)
                    break

    }
}

const appendText = (label = "No label", placeholder = "No placeholder") => {
    let container = document.createElement('div')
    container.setAttribute('class', 'form-group my-2')

    let input = document.createElement('input')
    input.setAttribute('class', 'form-control mt-2')
    input.setAttribute('placeholder', placeholder)
    input.setAttribute('title', placeholder)

    let labelEl = document.createElement('label')
    labelEl.textContent = label
    labelEl.setAttribute('class', ' form-label mt-2')

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.setAttribute('class', 'form-control btn btn-danger btn-sm mt-2')
    deleteBtn.addEventListener('click', function() {
        container.remove()
    })

    container.append(labelEl)
    container.append(input)
    container.append(deleteBtn)

    document.querySelector("#elements").append(container) 
}


const appendRadio = (label = "No label", placeholder = "No placeholder") => {
    let container = document.createElement("div")
    container.setAttribute("class", "my-2")
    
    let input = document.createElement("input")
    input.setAttribute("class", "mt-2")
    input.setAttribute("placeholder", placeholder)
    input.setAttribute("type", "radio")
  
    let labelEl = document.createElement("label")
    labelEl.textContent = label;
  
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute('class', 'btn btn-danger btn-sm m-4 px-2')
    deleteButton.addEventListener("click", () => {
        container.remove();
    });
  
    container.appendChild(input)
    container.appendChild(labelEl)
    container.appendChild(deleteButton)
  
    document.querySelector("#elements").appendChild(container);
  };
  
  const appendButton = (label = "No label", placeholder = "No placeholder") => {
    let container = document.createElement("div")
    container.setAttribute("class", "my-2");
    let input = document.createElement("input")
    input.setAttribute("class", "mt-2")
    input.setAttribute("placeholder", placeholder)
    input.setAttribute("type", "button")
    input.setAttribute("value", label)
  
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute('class', 'btn btn-danger  m-3')
    deleteButton.addEventListener("click", () => {
        container.remove();
    });
  
    container.appendChild(input);
    container.appendChild(deleteButton);
  
    document.querySelector("#elements").appendChild(container);
  };
  