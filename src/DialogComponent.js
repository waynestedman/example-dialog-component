import { html, css, LitElement } from 'lit'

import './DsButton';

const dialog = document.getElementById("dsDialog");
// console.log('dialog', dialog);


export class DialogComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        position: relative;
        display: block;
        border-radius: 10px;
        text-align: left;
        color: #333;
        background-color: #fff;
        padding: 0 1rem 2rem 1rem;
        margin: auto;
        box-shadow: 5px 7px 10px 0px rgba(0,0,0,0.3);
        max-width: 50ch;
      }

      h2 {
        display: inline-block;
      }
      .close {
        display: inline-block;
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
  closeDialog() {
    dialog.close();
    dialog.removeAttribute("open");
  };

  render() {
    return html`
        <h2>${this.dialogTitle}</h2>
        <button class="close" onclick="closeDialog()" type="button">X</button>
        <p>${this.dialogBody}</p>
        <button class="close" onclick="closeDialog()" type="button">Cancel</button>
        <button class="complete" onclick="alert('process completed!')" type="button">Complete process</button>
    `
  }
}

window.customElements.define('dialog-component', DialogComponent)


/* future refinements:
- add & remove this component from the DOM -> connectedCallback() & disconnectedCallback() lifecycle methods: https://lit.dev/docs/components/lifecycle/
- 
*/