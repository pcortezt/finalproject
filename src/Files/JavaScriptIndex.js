export default `
import Slider from './src/Slider';
import Chosen from './src/Chosen';
import CodePreview from './src/CodePreview';
import Files from './src/Files';
import Undo from './src/Undo';
import axios from 'axios';


var Pages = {
    'History': 'History_of_Wikipedia',
    'Under Erasure': 'Sous_rature',
    'History of the Internet': 'History_of_the_Internet',
    'Miss Spelling My Name': 'Philip_Temple'
};

var State = {
    'active': 'choices',
    'classes': [],
    'code': '',
    'content': '',
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
    var closePreview;

    for(let i = 1; i < 5; i++){
        sliders += Slider(state);
    }

    root.innerHTML = `
       

;