const colorPicker = document.querySelector('#colorPicker');
const colorPreview = document.querySelector('#colorPreview');
const colorHistory = document.querySelector('#colorHistory');
const clearHistory = document.querySelector('#clearHistory');

// color selected
colorPicker.addEventListener('input', function() {
    const colorSelected = colorPicker.value
    colorPreview.style.backgroundColor = colorSelected
    addHistory(colorSelected);
});

// history
function addHistory(chooseColor) {
    const li = document.createElement('li')
    li.textContent = chooseColor
    li.style.color = chooseColor
    colorHistory.appendChild(li)
}

//clear history
clearHistory.addEventListener('click', function() {
    colorHistory.innerHTML = '';
});