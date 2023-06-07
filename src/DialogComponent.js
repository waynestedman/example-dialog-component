import { html, css, LitElement } from 'lit'

import './DsButton';

// const dialog = document.getElementById("dsDialog");

export class DialogComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        position: relative;
        display: block;
        border-radius: var(--corner-radius);
        text-align: left;
        color: var(--dark-gray);
        background-color: var(--white);
        padding: 1rem;
        box-shadow: var(--default-box-shadow);
        max-width: 50ch;
      }

      h2 {
        margin-block: 0;
      }

      .dialogHeader, .dialogFooter {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
/* TODO: 
      .dialogHeader {
        position: fixed;
      }
*/
      .dialogTitle {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
      }
      
      .btn {
        background-color: transparent;
        color: var(--dark-gray);
        border: var(--default-border);
        border-radius: var(--default-corner-radius);
        padding: 0.5rem;
        cursor: pointer;
        width: 26ch;

/* for accessibility - keyboard navigation 
TODO: fix this
*/
        :focus-visible {
          outline: 3px solid #333;
          padding: 0.4rem;
        }
      }
      
      .close {
        width: auto;
        background: none;
        color: var(--dark-gray);
        border: none;
        border-radius: 50rem;
        padding-inline: 0.8rem;
        font-size: var(--default-font-size);
        font-weight: var(--bold-font-weight);
      }

      p {
        width: calc(100% - 1rem);
      }

      .dialogFooter {
        justify-content: space-evenly;
      }

      .complete {
        background-color: var(--dark-blue);
        color: var(--white);
        border: none;

        &:hover {
          background-color: var(--spectrum-blue);
          color: var(--dark-gray);
          border: var(--default-border);
          box-shadow: none;
          height: 31px; /* TODO: actually compute this */
        }
      }
    `
  }
  
  static properties = {
    dialogTitle: {type: String},
    dialogBody: {type: String},
    // condition: {},
  };

  // closeDialog() {
  //   dialog.close();
  //   dialog.removeAttribute("open");
  // };

  render() {
    return html`
        <header class="dialogHeader">
          <span class="dialogTitle">
            <img class="icon" src="./src/assets/icon_info.svg" alt="info icon">
            <h2>${this.dialogTitle}</h2>
          </span>
          <button class="btn close" onclick="closeDialog()" type="button">X</button>
        </header>
        <p>${this.dialogBody}</p>
        <footer class="dialogFooter">
          <button class="btn" onclick="closeDialog()" type="button">Cancel</button>
          <button class="btn complete" onclick="alert('process completed!')" type="button">Complete the process</button>
        </footer>
    `
  }
}

window.customElements.define('dialog-component', DialogComponent)


/* future refinements:
  - make cancel or complete display a result on main page.
  - clicking outside the dialog should close it.
  - add & remove this component from the DOM -> connectedCallback() & disconnectedCallback() lifecycle methods: https://lit.dev/docs/components/lifecycle/
  - make close functionality reside inside the component.
*/