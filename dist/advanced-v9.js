class UIElement {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Input extends UIElement {
    type;
    placeholder;
    constructor(id, type, placeholder) {
        super(id);
        this.type = type;
        this.placeholder = placeholder;
    }
    render() {
        return `<input id=${this.id} type="${this.type}" name="${this.id}" placeholder="${this.placeholder}"/>`;
    }
}
class Button extends UIElement {
    label;
    constructor(id, label) {
        super(id);
        this.label = label;
    }
    render() {
        return `<button id=${this.id}>${this.label}</button>`;
    }
}
class Form extends UIElement {
    // constructor(
    //     id:string,
    // ){
    //     super(id)
    // }
    children = [];
    appendChild(child) {
        this.children.push(child);
    }
    render() {
        const childrenHTML = this.children.map((child) => child.render()).join("\n ");
        console.log(childrenHTML);
        return `<form id=${this.id}>\n ${childrenHTML} \n</form>`;
    }
}
const emailInput = new Input("email", "email", "Enter your email");
const passwordInput = new Input("password", "password", "Enter your password");
const submitButton = new Button("submit-btn", "Submit");
const formElement = new Form("login-form");
formElement.appendChild(emailInput);
formElement.appendChild(passwordInput);
formElement.appendChild(submitButton);
console.log(formElement.render());
const rootElement = document.getElementById("root");
if (rootElement) {
    rootElement.innerHTML = formElement.render();
}
export {};
