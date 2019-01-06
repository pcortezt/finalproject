import Slider from './src/Slider';
import Chosen from './src/Chosen';
import axios from 'axios';

var Pages = {
    'History': 'History_of_Wikipedia',
    'Under Erasure': 'Sous_rature'
};

var State = {
    'active': 'choices',
    'content': ''
};

var root = document.querySelector('#root');

function getPageFromChoice(choice){
    return Pages[choice] || '';
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
            
            axios
                .get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext&titles=${getPageFromChoice(event.target.textContent)}&origin=*`)
                .then((response) => {
                    State.content = Object
                        .values(response.data.query.pages)
                        .map((page) => page.extract)
                        .join('');
        
                    render(State);
                });

            render(State);
        }));

    document
        .querySelectorAll('.changes button')
        .forEach((button) => button.addEventListener('click', () => {
            render(State);
        }));
}

render(State);