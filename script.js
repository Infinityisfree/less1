let element= document.getElementById('app');

function changeColor(colorText ='red') {
    element.style.color = colorText;
    element.innerHTML = "<h1> New Text </h1>";
}

