class Calculator {
    constructor(previousOpTextElement, currentOpTextElement) {
        this.previousOpTextElement = previousOpTextElement;
        this.currentOpTextElement = currentOpTextElement;
        this.clear();
    }

    clear() {
        this.currentOp = "";
        this.operation = undefined;
        this.previousOp = "";
    }

    delete() {

    }

    appendNumber(num) {
        if (num == '.' && this.currentOp.includes('.')) return;
        this.currentOp = this.currentOp.toString() + num.toString();
    }

    chooseOperation(operation) {
        if (this.currentOp === '') return;
        if (this.previousOp !== '') {
            this.compute();
        }
        this.operation = operation;
        if (this.operation.toString() === '%') {
            if (this.currentOp.includes('%')) return;
            this.currentOp = this.currentOp + " " + this.operation.toString();
        } else {
            this.previousOp = this.currentOp + " " + this.operation.toString();
            this.currentOp = '';
        }
    }

    compute() {
        let comp;
        const prev = parseFloat(this.previousOp);
        const cur = parseFloat(this.currentOp);
        if (isNaN(prev) || isNan(cur)) return;
        switch (this.operation) {
            case '+':
                comp = prev + cur;
                break;
            case '-':
                comp = prev - cur;
                break;
            case '*':
                comp = prev * cur;
                break;
            case '/':
                comp = prev / cur;
                break;
        }
    }

    updateDisplay() {
        this.currentOpTextElement.innerText = this.currentOp;
        this.previousOpTextElement.innerText = this.previousOp;
    }
}



// Creating constant variables for all different buttons
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-allclear]');
const equalsButton = document.querySelector('[data-equals]');
const previousTextElement = document.querySelector('[data-previous]');
const currentTextElement = document.querySelector('[data-current]');

const calc = new Calculator(previousTextElement, currentTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.appendNumber(button.innerText);
        calc.updateDisplay();
    });
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.chooseOperation(button.innerText);
        calc.updateDisplay();
    });
})

equalsButton.addEventListener('click', () => {
    calc.compute();
    calc.updateDisplay();
})

