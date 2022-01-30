const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = '';
    let letter = '';
    
    for (let i = 0; i <= expr.length; i += 2) {

        if (i !== 0 && !(i % 10) && MORSE_TABLE[letter]) {
            result += MORSE_TABLE[letter];
            letter = '';
        }

        if (expr[i] === '1') {
            (expr.slice(i, i + 2) === '11') ? letter += '-' : letter += '.';
        }

        if (expr[i] === '*') {
            result += ' ';
            i += 8;
        }
    }
    return result;
}

module.exports = {
    decode
}