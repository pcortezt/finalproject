export default function Chosen(state){
    if(state.content){
        return `
            <div class="${state.classes.join(' ')}" id="wikipedia">
                ${state.content}
            </div>

        `;
    }
    
    return '';
}