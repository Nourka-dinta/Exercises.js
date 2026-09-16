// Adding Element  
const list = document.querySelector('.list');

function addItem() {

    const newBox = document.createElement('li');
    newBox.textContent = 'New Box';

    // console.log(newBox)

    list.appendChild(newBox);
     
}

// Removing Element
function removeBox(){

    if(list.lastChild){
        list.removeChild(list.lastChild)
    }else {
        alert("The boxs is finished")
    }
    
}
