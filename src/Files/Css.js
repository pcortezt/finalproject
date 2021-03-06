export default `
body {
    background-color: rgb(0, 0, 0);
    position: fixed;
}

.close {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 250%;
    color: orange;
    cursor: pointer;
    font-family: 'Allerta Stencil', sans-serif;
}

#undo {
    position: fixed;
    top: 10px;
    right: 10px;
}

.popupWindow {
    padding: 0;
    margin: 0;
    width: 70vw;
    height: 70vw;
    display: block;
    color: orange;
    background-color: rgba(0, 0, 0, 0.81);
    border: 3px solid orange;
    z-index: 9999;
    max-height: 50vh;
    position: relative;
}

.popupContent {
    font-family: 'Allerta Stencil', sans-serif;
    color: orange;
    font-size: 150%;
    text-align: left;
    padding: 0;
    margin: 0;
    height: 100%;
    overflow: scroll;
}

/* turn off bullets on Wike pages*/

ul {
    list-style-type: none;
}

#root {
    background-color: rgb(0, 0, 0);
    font-family: 'Allerta Stencil', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* SEE MY CODE */

.previewCode {
    font-family: 'Allerta Stencil', sans-serif;
    background-color: black;
    color: orange;
    padding: 20px;
    font-size: 16px;
    border: 3px solid orange;
    cursor: pointer;
}

button {
    background: black;
    font-family: 'Allerta Stencil', sans-serif;
    color: orange;
    border: 3px solid orange;
    cursor: pointer;
}

.preview {
    position: absolute;
    right: 30px;
    bottom: 20px;
    margin: 0 auto;
    z-index: 999;
}

.previewContent {
    display: none;
    position: absolute;
    right: 80.5px;
    bottom: 67.5px;
    margin: 0 auto;
    z-index: 999;
    width: 60px;
}

.preview:hover {
    background-color: orange;
    color: black;
    border: 3px solid black;
}

.preview:hover .previewContent {
    display: block;
}

.preview:hover .previewCode {
    background-color: orange;
    color: black;
    border: 3px solid black;
}

.previewContent :hover {
    background-color: orange;
    color: black;
    border: 3px solid black;
}

.popIndex {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    height: 50vh;
    width: 60vw;
    border: 3px solid orange;
    background: black;
    color: orange;
    z-index: 9999;
}




/* SEE MY CODE */

.home {
    font-family: 'Allerta Stencil', sans-serif;
    position: absolute;
    bottom: 20px;
    left: 30px;
    border: 3px solid orange;
    color: orange;
    z-index: 99;
    background-color: black;
    font-size: 16px;
    padding: 14px;
    cursor: pointer;
    z-index: 999;
}

.home:hover {
    background-color: orange;
    color: black;
    border: 3px solid black;
}

#content {
    font-family: 'Allerta Stencil', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(255, 255, 255);
    font-size: 13vw;
    text-align: center;
    animation-name: fadeIn;
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-fill-mode: both;
    height: 100vh;
    width: 100vw;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

#container {
    text-decoration: line-through;
    animation-name: fadeIn2;
    animation-duration: 5s;
    animation-iteration-count: 1;
    animation-fill-mode: both;
}

@keyframes fadeIn2 {
    0% {
        text-decoration-color: rgba(0, 0, 0, 0);
    }
    50% {
        text-decoration-color: rgba(0, 0, 0, 0);
    }
    100% {
        text-decoration-color: rgb(255, 255, 255);
    }
}

#wikipedia {
    overflow: scroll;
    border: rgba(255, 1, 34, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    color: black;
    font-family: 'Allerta Stencil', sans-serif;
    font-size: 2vw;
    cursor: default;
    text-align: center;
    padding: 10px 10vw;
    box-sizing: border-box;
}

#rectangle {
    animation-delay: 1s;
    animation-name: recFadeIn;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: both;
}

@keyframes recFadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.wrapper {
    text-align: center;
}

#wikipedia.alternate-background {
    background-color: hotpink;
}

#wikipedia.backGroundPink {
    background-color: hotpink;
}


#wikipedia.backGroundGreen {
    background-color: green;
}

#wikipedia.backGroundBlue{
    background-color: blue;
}

#wikipedia.montyPython {
    
    background-color: red;
    animation-name: bgColorChange;
    animation-duration: 4s;
    animation-iteration-count: infinite;
}

@keyframes bgColorChange {
    15% {
        background-color: rgb(211, 41, 70);
    }
    30% {
        background-color: yellow;
    }
    45% {
        background-color: rgb(255, 102, 0);
    }
    60% {
        background-color: rgb(234, 192, 255);
    }
    75% {
        background-color: rgb(64, 255, 0);
    }
    100%{
        backgroun-color:  rgb(0, 251, 255); 
    }
}

.question {
    font-family: 'Allerta Stencil', sans-serif;
    position: absolute;
    font-size: 50px;
    color: orange;
    text-align: center;
    z-index: 999;
    cursor: pointer;
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
    margin: 0 auto;
}

.question:hover {
    color: rgb(0, 0, 0);
    display: block;
}

.answers {
    position: absolute;
    display: none;
    z-index: 999;
    color: orange;
    background: rgb(0, 0, 0);
    position: fixed;
    left: 50%;
    bottom: 1px;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    border: 3px solid orange;
    font-size: 16px;
    padding: 10px;
}

.question:hover .answers {
    display: block;
    position: absolute;
    cursor: pointer;
}

.answers :hover {
    display: block;
    cursor: pointer;
}

#wikipedia.TextColor {
    color: rgb(255, 0, 0);
}

#wikipedia.StrikeThrough {
    text-decoration: line-through;
}

#wikipedia.TextFont {
    font-family: 'Cedarville Cursive', cursive;
}

#wikipedia.RandomTextColor {
    background-color: red;
    color: rgb(238, 127, 127);
    animation-name: redWedding;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    
}

@keyframes redWedding {
    15% {
        color: rgb(237, 112, 112);
    }
    30% {
        color: rgb(242, 76, 76);
    }
    45% {
        color: rgb(240, 57, 57);
    }
    60% {
        color: rgb(242, 76, 76);
    }
    75% {
        color: rgb(237, 112, 112);
    }
    
}

#wikipedia.Brutalist1 p{
    color: green !important;
    background: black !important;
}

#wikipedia.Brutalist2 p{
    color: transparent !important;
    background: transparent !important;
    
}

#wikipedia.Brutalist3 p{
    color: transparent !important;
    background: transparent !important;
    text-decoration: line-through !important;
}

#wikipedia.Brutalist4 p h1 h2 h3{
    color: white !important;
    background: black !important;

}

/* Changing Font*/

.History {
    position: absolute;
    min-width: 200px;
    width: 30%;
    background-color: black;
    border: 3px solid orange;
    margin: auto;
    top: -50%;
    left: 15%;
    bottom: 0;
    right: 0;
    height: 4em;
    color: orange;
    font-size: 20px;
    cursor: pointer;
    text-transform: uppercase;
}

.History:hover {
    background-color: orange;
    color: black;
    border: 3px solid black;
}

.underErasure {
    position: absolute;
    min-width: 200px;
    width: 30%;
    background-color: black;
    border: 3px solid orange;
    margin: auto;
    top: -20%;
    left: 15%;
    bottom: 0;
    right: 0;
    height: 4em;
    color: orange;
    font-size: 20px;
    cursor: pointer;
    text-transform: uppercase;
}

.underErasure:hover {
    background-color: orange;
    color: black;
    border: 3px solid black;
}

.three {
    position: absolute;
    min-width: 200px;
    width: 30%;
    background-color: black;
    border: 3px solid orange;
    margin: auto;
    top: 10%;
    left: 15%;
    bottom: 0;
    right: 0;
    height: 4em;
    color: orange;
    font-size: 20px;
    cursor: pointer;
    text-transform: uppercase;
}

.three:hover {
    background-color: orange;
    color: black;
    border: 3px solid black;
}

.four {
    position: absolute;
    min-width: 200px;
    width: 30%;
    background-color: black;
    border: 3px solid orange;
    margin: auto;
    top: 40%;
    left: 15%;
    bottom: 0;
    right: 0;
    height: 4em;
    color: orange;
    font-size: 20px;
    cursor: pointer;
    text-transform: uppercase;
}

.four:hover {
    background-color: orange;
    color: black;
    border: 3px solid black;
}

.slider {
    width: 100vw;
    height: 100vh;
    transition: 1s;
    position: fixed;
    top: 0;
    cursor: pointer;
}

.slider>div {
    display: none;
}

.slider:hover>div, .slider:focus>div {
    display: block;
}

#rectangle .slider:nth-child(1) {
    left: -90vw;
    background: rgba(255, 230, 0, 0.3);
}

#rectangle .slider:nth-child(2) {
    left: -95vw;
    background: rgba(255, 1, 34, 0.3);
}

#rectangle .slider:nth-child(1):hover, #rectangle .slider:nth-child(2):hover {
    left: 0;
}

#rectangle .slider:nth-child(3) {
    right: -90vw;
    background: rgba(66, 187, 224, 0.3);
}

#rectangle .slider:nth-child(4) {
    right: -95vw;
    background: rgba(166, 255, 0, 0.3);
}

#rectangle .slider:nth-child(3):hover, #rectangle .slider:nth-child(4):hover {
    right: 0;
}
`;