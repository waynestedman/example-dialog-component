import { html, css, LitElement } from 'lit'

export class DialogBody extends LitElement {
  static styles = css`
      p {
        display: inline-block;
        margin: 0 -1rem 1rem -1rem;
        padding: 1rem;
        width: 100%;
      }
    `;

  render() {
    return html`
      <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    `;
  }
}

customElements.define('dialog-body', DialogBody)
