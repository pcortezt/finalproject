export default function Chosen(state){
    if(state.content){
        return `
            <div id="wikipedia">
                ${state.content}
            </div>
        `;
    }
    
    return '';
}