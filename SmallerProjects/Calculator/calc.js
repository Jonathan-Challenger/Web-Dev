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
        this.currentOp = this.currentOp.toString().slice(0, -1);
    }

    appendNumber(num) {
        if (num === '.' && this.currentOp.includes('.')) return;
        this.currentOp = this.currentOp.toString() + num.toString();
    }

    chooseOperation(operation) {
        if (this.currentOp === '') return;
        if (this.previousOp !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOp = this.currentOp;
        this.currentOp = '';
    }

    compute() {
        let comp;
        const prev = parseFloat(this.previousOp);
        const cur = parseFloat(this.currentOp);
        if (isNaN(prev) || isNaN(cur)) return;
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
            case '%':
                comp = prev % cur;
                break;
            default:
                return;
        }
        this.currentOp = comp;
        this.operation = undefined;
        this.previousOp = '';
        
    }

    getDisplayNumber(num) {
        const stringNum = num.toString();
        const integerDigits = parseFloat(stringNum.split('.')[0]);
        const decDigits = stringNum.split('.')[1];
        let intDisplay;
        if (isNaN(integerDigits)) {
            intDisplay = '';
        } else {
            intDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0
            });
        }
        if (decDigits != null) {
            return `${intDisplay}.${decDigits}`;
        } else {
            return intDisplay;
        }
    }

    updateDisplay() {
        this.currentOpTextElement.innerText = this.getDisplayNumber(this.currentOp);
        if (this.operation != null) {
            this.previousOpTextElement.innerText = 
                `${this.getDisplayNumber(this.previousOp)} ${this.operation}`;
        } else {
            this.previousOpTextElement.innerText = '';
        }
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

equalsButton.addEventListener('click', button => {
    calc.compute();
    calc.updateDisplay();
})

allClearButton.addEventListener('click', button => {
    calc.clear();
    calc.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calc.delete();
    calc.updateDisplay();
})


