const fs = require('fs');

const nomeArq = process.argv[2];

const buff = fs.readFileSync(nomeArq);

const str = buff.toString();

let qtdEndLine = 0;

for(let i = 0; i < str.length; i++){
    if(str[i] === '\n') qtdEndLine++;
}

console.log(qtdEndLine);