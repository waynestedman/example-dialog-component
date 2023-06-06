import { html, css, LitElement } from 'lit'

import './DsButton';

export class DialogComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        position: relative;
        display: block;
        /* border: solid 1px var(--color-base-gray-dark); */
        border-radius: 10px;
        text-align: left;
        color: #333;
        background-color: #fff;
        padding: 0 1rem 2rem 1rem;
        margin: 1rem auto;
        box-shadow: 5px 7px 10px 0px rgba(0,0,0,0.3);
        max-width: 424px;
      }
    `
  }

  render() {
    return html`
        <h2>Dialog Title</h2>
        <button>X</button>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </p>
        <button>Cancel</button>
        <button>Complete process</button>
    `
  }
}

window.customElements.define('dialog-component', DialogComponent)
