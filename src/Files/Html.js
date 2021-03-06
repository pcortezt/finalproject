import escapeHtml from 'escape-html';

export default escapeHtml(`
<!DOCTYPE html>
<html lang="en-us">

<head>


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Final Project</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allerta+Stencil">
    <link href="https://fonts.googleapis.com/css?family=Amatic+SC|Coiny|Homemade+Apple|Khmer|Libre+Barcode+128|Libre+Barcode+128+Text|Libre+Barcode+39+Text|Monofett|Monoton|Press+Start+2P|UnifrakturMaguntia|ZCOOL+KuaiLe|Zilla+Slab+Highlight"
        rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Cedarville+Cursive" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">

</head>

<body class="touch">
    <div onClick="window.location.reload()">
        <button class="home">Home</button>
    </div>
    <div>
        <div class="question">
            <i class="far fa-question-circle"></i>
            <div class="answers">Let me help! If you want to see
                something happen, move/touch the far left or
                right of our screen.</div>
        </div>
    </div>


    <div class="preview">
        <button class="previewCode">SeeMyCode</button>
        <div class="previewContent">
            <button class="popIndexHover">index.html</button>
            <button>style.css</button>
            <button>index.js</button>
            <button>srcSlider.js</button>
            <button>srcPlayground.js</button>
            <button>srcChosen.js</button>
            <button>Screensindex.js</button>
            <button>ScreensChoices.js</button>
            <button>ScreensChanges.js</button>
        </div>
    </div>



    <div id="content">
        <div id="container">

            <p>History is written by the victors</p>

        </div>
    </div>

    <div id="root"></div>
    <script src="index.js"></script>

</body>

</html>
`);