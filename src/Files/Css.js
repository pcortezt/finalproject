export default `
body {
    background-color: rgb(0, 0, 0);
    position: fixed;
}

.popup {
    width: 50vw;
    height: 50vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    color: orange;
    background-color: black;
    border: 3px solid orange;
    z-index: 9999;
}

/* turn off bullets on Wike pages*/

ul {
    list-style-type: none;
}

#root {
    background-color: rgb(0, 0, 0);
    font-family: 'Allerta Stencil', sans-serif;
}

/* SEE MY CODE */

.dropbtn {
    font-family: 'Allerta Stencil', sans-serif;
    background-color: black;
    color: orange;
    padding: 14px;
    font-size: 16px;
    border: 3px solid orange;
    cursor: pointer;
}

.dropup {
    font-family: 'Allerta Stencil', sans-serif;
    position: absolute;
    bottom: 3%;
    right: 1%;
    color: black;
    z-index: 99;
    cursor: pointer;
}

.dropup-content {
    display: none;
    position: absolute;
    background-color: black;
    min-width: 16px;
    bottom: 100%;
    right: 0%;
    z-index: 99;
}

.dropup-content a {
    color: orange;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    min-width: 16px;
    border: 3px solid orange;
}

.dropup-content a:hover {
    background-color: orange;
    color: black;
    border: 3px solid black;
}

.dropup:hover .dropup-content {
    display: block;
}

.dropup:hover .dropbtn {
    background-color: orange;
    color: black;
    border: 3px solid black;
}

/* SEE MY CODE */

.goBack {
    font-family: 'Allerta Stencil', sans-serif;
    position: absolute;
    bottom: 3%;
    left: 1%;
    border: 3px solid orange;
    color: orange;
    z-index: 99;
    background-color: black;
    font-size: 16px;
    padding: 14px;
    cursor: pointer;
    z-index: 999;
}

.goBack:hover {
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

#wikipedia.foo {
    color: black;
    animation: foo 1s infinite;
}

@keyframes foo {
    15% {
        font-family: 'Libre Barcode 128 Text', cursive;
    }
    30% {
        font-family: 'Coiny', cursive;
    }
    45% {
        font-family: 'ZCOOL KuaiLe', cursive;
    }
    60% {
        font-family: 'Amatic SC', cursive;
    }
    75% {
        font-family: 'Monoton', cursive;
    }
}

#wikipedia.bar {
    color: black;
    animation: bar 1s infinite;
}

@keyframes bar {
    15% {
        color: rgb(255, 0, 234);
    }
    30% {
        color: rgb(255, 183, 0);
    }
    45% {
        color: rgb(130, 255, 5);
    }
    60% {
        color: rgb(0, 174, 255);
    }
    75% {
        color: black;
    }
}

.question {
    font-family: 'Allerta Stencil', sans-serif;
    position: absolute;
    bottom: 3%;
    font-size: 50px;
    color: orange;
    text-align: center;
    left: 0%;
    right: 0%;
    z-index: 99;
    cursor: pointer;
}

.question:hover {
    color: rgb(255, 0, 234);
}

#wikipedia.TextColor {
    color: rgb(255, 0, 0);
}

#wikipedia.StrikeThrough {
    color: rgb(255, 183, 0);
}

#wikipedia.TextFont {
    color: rgb(94, 255, 0);
}

#wikipedia.RandomTextColor {
    color: rgb(0, 255, 166);
}

#wikipedia.Brutalist1 {
    color: rgb(0, 51, 255);
}

#wikipedia.Brutalist2 {
    color: rgb(255, 247, 0);
}

#wikipedia.Brutalist3 {
    color: rgb(0, 238, 255);
}

#wikipedia.Brutalist4 {
    color: rgb(255, 0, 0);
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

.slider:hover>div {
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
}

`;