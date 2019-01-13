export default function Chosen(state){
    if(state.content){
        return `
            <div id="wikipedia" class="${state.classes.join(' ')}" >
                ${state.content}
            </div>
        `;
    }
    
    return '';
}