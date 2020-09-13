const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('========================'.green);
    console.log('   tagbla de ${base}'.gray);
    console.log('========================'.green);

    let data = '';
    for (let i = 0; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }
    console.log(data);

}

let arr = [{ "a": "b" }, { "c": "d" }, { "e": "f" }];

let crearArchivo = (base, limite = 12) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('la Base no es un numero');
            return;

        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablas/trabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    arr,
    listarTabla
}