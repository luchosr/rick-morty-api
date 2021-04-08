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

    _sendData(data){
        this.dispatchEvent(new CustomEvent('ApiData',{
            detail:{data}, bubbles:true, composed:true
        }))
    }
    getData(){
        fetch(this.url,{method: this.method})
        .then(response =>{
            // quedaste en 8:40 https://www.youtube.com/watch?v=TbG7U16n4fY
        })
    }
}

customElements.define('get-data',GetData )