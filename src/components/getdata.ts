import { LitElement } from "lit-element";

export class GetData extends LitElement{

    static get properties(){
        return{
            url: {type:String},
            method: {type:String}
        }
    }

    constructor(){
        super()
        console.log('GetData working!!');
    }
}

customElements.define('get-data',GetData )