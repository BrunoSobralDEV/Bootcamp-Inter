function insertDo() {
    //pegar dados do input
    const inputField = document.querySelector('#inputDescription')
    const inputText  = inputField.value;

    if(inputText != ''){
        createDivCheckbox(inputText)
        
        //limpar input
        inputField.value = ''
    }
}

function createDivCheckbox(inputText) {
    //Referência - elemento pai
    let taskList = document.querySelector("#list");
    
    //Criar na memória
    let newDiv       = document.createElement('div');
    let newInput     = document.createElement('input');
    let newLabel     = document.createElement('label');
    let newLabelText = document.createTextNode(inputText);
    
    //Editar atributos
    newInput.setAttribute('type', 'checkbox');
    newInput.setAttribute('name', inputText);
    newInput.setAttribute('id', inputText);

    newLabel.setAttribute('for', inputText);
    newLabel.appendChild(newLabelText);

    //Inserir no html
    taskList.appendChild(newDiv);
    newDiv.appendChild(newInput);
    newDiv.appendChild(newLabel);
}