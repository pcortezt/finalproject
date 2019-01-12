import Slider from './src/Slider';
import Chosen from './src/Chosen';
import axios from 'axios';


var Pages = {
    'History': 'History_of_Wikipedia',
    'Under Erasure': 'Sous_rature',
    'History of the Internet': 'History_of_the_Internet',
    'Miss Spelling My Name': 'Philip_Temple'
};

var State = {
    'active': 'choices',
    'content': '',
    'classes': []
    
};

var changeClasses = [ 'alternate-background', 'strikethrough', 'foo', 'bar', ];
var changeText = [ 'TextColor', 'StrikeThrough', 'TextFont', 'RandomTextColor' ];
var makeItBrutal = [ 'Brutalist1', 'Brutalist2', 'Brutalist3', 'Brutalist4' ];

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
        <div id="rectangle">
            ${sliders}
        </div>
    `;

    document
        .querySelectorAll('.choices button')
        .forEach((button) => button.addEventListener('click', (event) => {
            State.active = 'changes';
            axios
                .get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&titles=${getPageFromChoice(event.target.textContent)}&origin=*`)
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
        .forEach((button, index) => button.addEventListener('click', () => {
            State.active = 'changes2';
            State.classes.push([ changeClasses[index % 4] ]);

            render(State);
        }));
    

    document
    
        .querySelectorAll('.changes2 button')
        .forEach((button, index) => button.addEventListener('click', () => {
            State.active = 'changes3';
            State.classes.push([ changeText[index % 4] ]);

            render(State);
        }));


    document
        .querySelectorAll('.changes3 button')
        .forEach((button, index) => button.addEventListener('click', () => {
            State.active = 'changes3';
            State.classes.push([ makeItBrutal[index % 4] ]);

            render(State);
        }));
}

render(State);