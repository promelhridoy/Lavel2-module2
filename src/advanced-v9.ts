abstract class UIElement {
    constructor(protected id: string) {}
    abstract render(): string;
}

class Input extends UIElement {
    constructor(
        id: string, 
        private type: string, 
        private placeholder: string,
    ) {
        super(id);
    }

    render() {
        return `<input id=${this.id} type="${this.type}" name="${this.id}" placeholder="${this.placeholder}"/>`
    }
}

class Button extends UIElement {
    constructor(
        id: string,
        private label: string,
    ){
        super(id)
    }
    render() {
        return `<button id=${this.id}>${this.label}</button>`
    }
}


class Form extends UIElement {

    // constructor(
    //     id:string,
    // ){
    //     super(id)
    // }
    private children: UIElement[] = [];
    appendChild(child: UIElement) {
        this.children.push(child)
    }

    render() {
        const childrenHTML = this.children.map((child) => child.render()).join("\n ");
        
        console.log(childrenHTML);
        

        return `<form id=${this.id}>\n ${childrenHTML} \n</form>`
    }
}

const emailInput = new Input("email", "email", "Enter your email");
const passwordInput = new Input("password", "password", "Enter your password");

const submitButton = new Button("submit-btn", "Submit")

const formElement = new Form("login-form")

formElement.appendChild(emailInput);
formElement.appendChild(passwordInput);
formElement.appendChild(submitButton);

console.log(formElement.render());

const rootElement = document.getElementById("root");

if(rootElement) {
    rootElement.innerHTML = formElement.render();
}




