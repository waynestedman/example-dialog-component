import { html, css, LitElement } from 'lit'

export class DialogTitle extends LitElement {
  static styles = css`
      h3 {
        display: block;
        margin: 0 -1rem;
        padding: 1rem;
        width: 100%;
        border-radius: 10px 10px 0 0;
      }
    `;

  render() {
    return html`
      <h2>Title for the Dialog</h2>
    `;
  }
}

customElements.define('dialog-title', DialogTitle)
