export default function CodePreview(state){
    if(state.code){
        return `
            <div class="popupWindow">
                <div class="close">x</div>
                <pre class="popupContent">
                    ${state.code}
                </pre>
            </div>
        `;
    }

    return '';
}