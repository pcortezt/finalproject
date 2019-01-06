import Slider from './src/Slider';
import Chosen from './src/Chosen';

var Sites = {
    'History': 'https://www.wikipedia.org/',
    'Under Erasure': 'https://en.wikipedia.org/wiki/Sous_rature'
};

var State = {
    'active': 'choices',
    'iframeSource': ''
};

var root = document.querySelector('#root');

function getSiteFromChoice(choice){
    return Sites[choice] || '';
}

function render(state){
    var sliders = '';

    for(let i = 1; i < 5; i++){
        sliders += Slider(state);
    }

    root.innerHTML = `
        ${Chosen(state)}
        <div id="retangle">
            ${sliders}
        </div>
    `;

    document
        .querySelectorAll('.choices button')
        .forEach((button) => button.addEventListener('click', (event) => {
            State.active = 'changes';
            State.iframeSource = getSiteFromChoice(event.target.textContent);

            render(State);
        }));

    document
        .querySelectorAll('.changes button')
        .forEach((button) => button.addEventListener('click', () => {
            render(State);
        }));
}

render(State);

