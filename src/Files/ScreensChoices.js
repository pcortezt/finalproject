import escapeHtml from 'escape-html';
export default escapeHtml(`
export default function Choices(){
    return \`
        <div class="choices">
            <button class="History">History of the Internet</button>
            <button class="underErasure">Under Erasure</button>
            <button class="three">Who Writes History</button>
            <button class="four">Brutalist</button>
        </div>
    \`;
}
`);