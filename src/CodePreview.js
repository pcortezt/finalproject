export default function CodePreview(state){
    if(state.code){
        return `
            <div class="popupWindow">
                <button class="close">x</button>
                <pre class="popupContent">
                    ${state.code}
                </pre>
            </div>
        `;
    }

    return '';
}