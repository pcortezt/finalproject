import Slider from './src/Slider';
import Chosen from './src/Chosen';
import CodePreview from './src/CodePreview';
import Files from './src/Files';
import Undo from './src/Undo';
import axios from 'axios';


var Pages = {
    'History of the Internet': 'History_of_the_Internet',
    'Under Erasure': 'Sous_rature',
    'Who Writes History': 'Philosophy_of_history',
    'Brutalist': 'Brutalist_architecture'
};

var State = {
    'active': 'choices',
    'classes': [],
    'code': '',
    'content': '',
};

var changeClasses = [ 'backGroundGreen', 'backGroundBlue', 'backGroundPink', 'montyPython', ];
var changeText = [ 'TextColor', 'StrikeThrough', 'TextFont', 'RandomTextColor' ];
var makeItBrutal = [ 'Brutalist1', 'Brutalist2', 'Brutalist3', 'Brutalist4' ];

var root = document.querySelector('#root');

function getPageFromChoice(choice){
    return Pages[choice] || '';
}

function render(state){
    var sliders = '';
    var closePreview;

    for(let i = 1; i < 5; i++){
        sliders += Slider(state);
    }

    root.innerHTML = `
        ${Chosen(state)}
        ${CodePreview(state)}
        <div id="rectangle">
            ${sliders}
        </div>
        ${Undo(state)}
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
            State.active = 'choices';
            State.classes.push([ makeItBrutal[index % 4] ]);

            render(State);
        }));

    document
        .querySelector('#undo')
        .addEventListener('click', () => {
            State.classes.pop();

            render(State);
        });

    document
        .querySelectorAll('.previewCode + div > button')
        .forEach((button, index) => button.addEventListener('click', () => {
            State.code = Files[index];

            render(State);
        }));

    closePreview = document.querySelector('.close');

    if(closePreview){
        closePreview.addEventListener('click', () => {
            State.code = '';

            render(State);
        });
    }
}

render(State);


