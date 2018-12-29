import Slider from './src/Slider';


var container = document.querySelector('#retangle');
var sliders = '';

for(let i = 1; i < 5; i++){
    sliders += Slider();
}

function render(){
    container.innerHTML = sliders;
}

render();


