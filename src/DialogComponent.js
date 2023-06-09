import { html, css, LitElement } from 'lit'

import './DsButton';

// const dialog = document.getElementById("dsDialog");

export class DialogComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        position: relative;
        display: flex;
        flex-direction: column;
        border-radius: var(--corner-radius);
        text-align: left;
        color: var(--dark-gray);
        background-color: var(--white);
        margin-inline: auto;
        padding: 1rem 0.25rem;
        box-shadow: var(--default-box-shadow);
        width: calc(100vw - 0.5rem);
        height: 100vh;
        height: 100dvh; /* not supported by firefox yet */
        max-width: 600px;
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
        flex-direction: column;
        justify-content: space-evenly;
        gap: 1rem;
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

/* media queries for desktop styling */
      @media (min-width: 601px) {
        :host {
          padding: 1rem;
          width: 80%;
          height: auto;
          max-width: 1320px;
          max-height: 84%;
        }

        .dialogFooter {
          flex-direction: row;
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
          <button class="btn complete" onclick="successCloseDialog()" type="button">Complete the process</button>
        </footer>
    `
  }
}

window.customElements.define('dialog-component', DialogComponent)


/* future refinements:
  - make cancel or complete status be assigned from component variable.
    - make close functionality reside inside the component. https://lit.dev/docs/components/shadow-dom/
  - clicking outside the dialog should close it.
  - add & remove this component from the DOM -> connectedCallback() & disconnectedCallback() lifecycle methods: https://lit.dev/docs/components/lifecycle/
*/