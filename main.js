const handleClick = (clickFunc) => {
    output = '';
    switch (clickFunc) {
        case 'btn-clear':
            return clearOutput();
        case 'btn-1':
            return displayTextOutput('1');
        case 'btn-2':
            return displayTextOutput('2');
        case 'btn-3':
            return displayTextOutput('3');
        case 'btn-4':
            return displayTextOutput('4');
        case 'btn-5':
            return displayTextOutput('5');
        case 'btn-6':
            return displayTextOutput('6');
        case 'btn-7':
            return displayTextOutput('7');
        case 'btn-8':
            return displayTextOutput('8');
        case 'btn-9':
            return displayTextOutput('9');
        case 'btn-0':
            return displayTextOutput('0');
        case 'btn-add':
            return returnOperator('+');
        case 'btn-subtract':
            return returnOperator('-');
        case 'btn-multiply':
            return returnOperator('*');
        case 'btn-divide':
            return returnOperator('/');
        case 'btn-del':
            return deleteText();
        case 'btn-equals':
            return operate();
    }
}

const displayTextOutput = (input) => {
    bottomDisplayText += input;
    bottomDisplay.textContent = bottomDisplayText;
}

const deleteText = () => {
    bottomDisplayText = bottomDisplayText.substring(0, bottomDisplayText.length - 1);
    bottomDisplay.textContent = bottomDisplayText;
}

const returnOperator = (input)  => {
    if (bottomDisplayText !== '') {
        if (operatorDisplayText !== '') {
            operate();
        }
        operatorDisplayText = input;
        operatorDisplay.textContent = operatorDisplayText;

        pastDisplayText = bottomDisplayText;
        pastDisplay.textContent = pastDisplayText;

        bottomDisplayText = '';
        bottomDisplay.textContent = bottomDisplayText;
    } 
}

const clearOutput = () => {
    bottomDisplayText = '';
    bottomDisplay.textContent = bottomDisplayText;

    operatorDisplayText = '';
    operatorDisplay.textContent = operatorDisplayText;

    pastDisplayText = '';
    pastDisplay.textContent = pastDisplayText;
}

const operate = () => {
    if (pastDisplayText !== '' && bottomDisplayText !== '') {
        switch (operatorDisplayText) {
            case '+':
                return giveAnswer(Number(pastDisplayText) + Number(bottomDisplayText));
            case '-':
                return giveAnswer(Number(pastDisplayText) - Number(bottomDisplayText));
            case '*':
                return giveAnswer(Number(pastDisplayText) * Number(bottomDisplayText));
            case '/':
                if (bottomDisplayText == 0) {
                    return 
                }
                return giveAnswer(Number(pastDisplayText) / Number(bottomDisplayText));
        }
    }
}

const deliverMsg = (msg) => {
    bottomDisplayText = msg;
    bottomDisplay.textContent = bottomDisplayText;
}

const giveAnswer = (input) => {
    operatorDisplayText = '';
    operatorDisplay.textContent = operatorDisplayText;

    pastDisplayText = '';
    pastDisplay.textContent = pastDisplayText;

    bottomDisplayText = '' + input;
    bottomDisplay.textContent = bottomDisplayText;
};

const btnsCalcQuery = document.getElementsByClassName('btn-calc');

const bottomDisplay = document.getElementById('bottom-display');
let bottomDisplayText = bottomDisplay.textContent;

const operatorDisplay = document.getElementById('operator-display');
let operatorDisplayText = operatorDisplay.textContent;

const pastDisplay = document.getElementById('past-display');
let pastDisplayText = pastDisplay.textContent;

let btnsCalc = [];
for (let btn of btnsCalcQuery) {
    typeof btn == 'undefined' ? console.log('Issue') : console.log(`Added ${btn.id}`);
    btnsCalc.push(btn);
}

btnsCalc.forEach((btn) => {
    btn.addEventListener('click', () => handleClick(btn.id));
    console.log(`Completed ${btn.id}`);
})