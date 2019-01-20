import escapeHtml from 'escape-html';
export default escapeHtml(`
export default function Changes(){
    return \`
    <div class="changes">
        <button class="History">Green</button>
        <button class="underErasure">Blue</button>
        <button class="three">Pink</button>
        <button class="four">Monty Python</button>
    </div>
    \`;
}

`);