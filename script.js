const display = document.getElementById('displayScreen');
const phraseText = document.getElementById('phrase');
let phrase = '';
let equalFlag = false;

function dgWrite(value) {
    if (equalFlag == true) {
        clearAll(); equalFlag = false;
    }
    if (display.value == '0')
        display.value = ''

    display.value += value;
}

function operator(value) {
    if (equalFlag == false)
        switch (value) {
            case '+':
                phrase = display.value + '+';
                phraseText.innerHTML += phrase;
                display.value = '';
                break;
            case '-':
                phrase = display.value + '-';
                phraseText.innerHTML += phrase;
                display.value = '';
                break;
            case ' ':
                phrase = display.value + '/';
                phraseText.innerHTML += phrase;
                display.value = '';
                break;
            case 'x':
                phrase = display.value + 'x';
                phraseText.innerHTML += phrase;
                display.value = '';
                break;
            default:
                break;
        }
}

function equal() {
    if (phraseText.innerHTML != '' && display.value != '') {
        equalFlag = true;
        phrase = phraseText.innerHTML;
        phrase += display.value;
        phraseText.innerHTML = phrase + '=';
        display.value = eval(phrase.replaceAll('x', '*'))
        phrase = '';
    }

}

function dot() {
    if (equalFlag == false && (display.value != ' ' || display.value != '.'))
        display.value += '.';
}

function ce() {
    if (equalFlag == false)
        display.value = display.value.substring(0, display.value.length - 1);
}

function percent() {
    if (equalFlag == false) {
        let val = Number(display.value);
        display.value = val / 100;
    }

}

function clearAll() {
    phrase = "";
    phraseText.innerHTML = '';
    display.value = 0;
}

