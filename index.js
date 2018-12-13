import HelloWorld from './src/firstPage'

var root = document.querySelector('#root')

function render(){
    root.innerHTML = `
    <div id="content">
    <div class="container">
    ${HelloWorld()};
    </div>
    </div>
    `;
}

render();
