import Slider from './src/Slider';


var State = {
    'active': 'choices'
};

var container = document.querySelector('#retangle');

function render(state){
    var sliders = '';

    for(let i = 1; i < 5; i++){
        sliders += Slider(state);
    }

    container.innerHTML = sliders;

    document
        .querySelectorAll('.choices button')
        .forEach((button) => button.addEventListener('click', () => {
            State.active = 'changes';

            render(State);
        }));
}

render(State);


