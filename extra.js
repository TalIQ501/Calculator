const btnsCalcQuery = document.getElementsByClassName('btn-calc');
const currentDisplay = document.getElementById('current-display');
let currentDisplayText = currentDisplay.textContent;

let btnsCalc = [];
for (let i = 0; i < btnsCalcQuery.length; i++) {
    btnsCalc.push(btnsCalc[i]);
}

btnsCalc.forEach((btn) => {
    btn.addEventListener('click', `handleClick(${this.id})`)
})

const returnOutput = (input) => {
    currentDisplayText +=  input;
}

const handleClick = (clickFunc) => {
    console.log('Clicked');
    output = '';
    switch (clickFunc) {
        case 'btn-clear':
            return '';
        case 'btn-1':
            return returnOutput('1');
        case 'btn-2':
            return returnOutput('2');
        case 'btn-3':
            return returnOutput('3');
        case 'btn-4':
            return returnOutput('4');
        case 'btn-5':
            return returnOutput('5');
        case 'btn-6':
            return returnOutput('6');
        case 'btn-7':
            return returnOutput('7');
        case 'btn-8':
            return returnOutput('8');
        case 'btn-9':
            return returnOutput('9');
        case 'btn-0':
            return returnOutput('0');
        case 'btn-add':
            return returnOutput('+');
        case 'btn-subtract':
            return returnOutput('-');
        case 'btn-multiply':
            return returnOutput('*');
        case 'btn-divide':
            return returnOutput('/');
        case 'btn-parenthesis-begin':
            return returnOutput('(');
        case 'btn-parenthesis-end':
            return returnOutput('');
    }
}