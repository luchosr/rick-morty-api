import { LitElement, html, css, property } from 'lit-element';
import './components/getdata'

export class RickMortyApi extends LitElement {
  @property({ type: String }) 

  render() {
    return html`
      <get-data></get-data>
    `;
  }
}
