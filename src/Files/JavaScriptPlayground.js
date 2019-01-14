export default `
import * as Screens from './Screens';

export default function Playground(state){
    var Screen = Screens[state.active];

    return Screen();
}

`;