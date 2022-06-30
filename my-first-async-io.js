const fs = require('fs');

const nomeArq = process.argv[2];

fs.readFile(nomeArq,'utf8',function(err,data){
    if(!err){
        const str = data.toString();

        let qtdEndLine = 0;

        for(let i = 0; i < str.length; i++){
            if(str[i] === '\n') qtdEndLine++;
        }

        console.log(qtdEndLine);
    }
});

