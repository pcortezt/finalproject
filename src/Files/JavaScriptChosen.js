export default `
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

var changeClasses = [ 'backGroundGreen', 'backGroundBlue', 'foo', 'bar', ];
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

    
`;