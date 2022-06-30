const fs = require('fs');

fs.readdir(process.argv[2],function(err,lista){
    if(!err){
        let extensao = process.argv[3];
        let ER = new RegExp("[A-Za-z0-9]{1,}."+extensao);
        for(itemlista of lista){
            if(itemlista.match(ER))
                console.log(itemlista)
        }
    }
});
