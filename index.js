import HelloWorld from './src/firstPage'

var root = document.querySelector('#root')

function render() {
    root.innerHTML = `
    <div id="content">
    <div id="container">
        ${HelloWorld()}
    </div>
     </div>
    `;
}

render();



//var content = root.querySelector('#content');
//setTimeout (function(){
//    content.classList.add('strike');
//}, 8000)
//var container = document.querySelector('.container');
//document.onload = function(){
  //  container.classList.add(' strike');
//}