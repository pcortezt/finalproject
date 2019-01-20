import escapeHtml from 'escape-html';
export default escapeHtml(
    `

import Playground from './Playground';

export default function Slider(state){
    return \`
        <div class="slider">
            <div>
                \${Playground(state)}
            </div>
        </div>
    \`;
}
 `);