import { html, css, LitElement } from 'lit'

import './DsButton';

// const dialog = document.getElementById("myDialog");
// console.log('dialog', dialog);


export class DialogComponent extends LitElement {
  // function closeDialog() {
  //   dialog.close();
  // };
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
        margin: auto;
        box-shadow: 5px 7px 10px 0px rgba(0,0,0,0.3);
        max-width: 424px;
      }

      h2 {
        display: inline-block;
      }
      .close {
        display: inline-block;
        float: right;
      }
    `
  }
  
  static properties = {
    dialogTitle: {type: String},
    dialogBody: {type: String},
    // condition: {},
  };

  // constructor() {
  //   super();
  //   this.condition = true;
  // }

  render() {
    return html`
        <h2>${this.dialogTitle}</h2>
        <button class="close">X</button>
        <p>${this.dialogBody}</p>
        <button>Cancel</button>
        <button>Complete process</button>
    `
  }
}

window.customElements.define('dialog-component', DialogComponent)
