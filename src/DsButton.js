import { html, css, LitElement } from 'lit'

export class DsButton extends LitElement {
  static styles = css`
    button {
      position: absolute;
      right: 1rem;
      bottom: 0;
      display: inline-block;
      margin: 1rem 0;
      padding: 0.5rem;
      text-align: center;
      background-color: blue;
      color: #333;
      border: unset;
      border-radius: 10px;
    };
    /* button:hover {
      color: var(--gray-02);
      background-color: var(--blue-03);
    }; */
  `;

  static get properties() {
    return {
      buttonText: { type: String },
    }
  }

  constructor() {
    super();
    this.buttonText = 'Click here';
  }

  render() {
    return html`
      <button @click=${this._onClick} type="button">
        ${this.buttonText}
      </button>
    `;
  }

  _onClick() {
    alert("You clicked that well!");
  }
}

customElements.define('ds-button', DsButton)
