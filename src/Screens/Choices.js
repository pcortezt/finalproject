export default function Choices(){
    return `
        <div class="choices">
            <button class="History">Histroy</button>
            <div id="iframeHolder"></div>
            <button class="underErasure">Under Erasure</button>
            <button class="three">third</button>
            <button class="four">fourth</button>
        </div>
    `;
}
/*
$(function(){
    $('.History').click(function(){ 
        if(!$('#iframe').length) {
                $('#iframeHolder').html('<iframe id="iframe" src="https://www.foxnews.com/" width="700" height="450"></iframe>');
        }
    });   
});