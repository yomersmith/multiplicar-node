// requireds
/* 
 HAY 3 TIPOS DE required
const fs = require('fs'); >> Propio de nodejs 
const fs = require('expres'); >> no es nativo  de node , paquete que se instala
const fs = require('./miarcchivo');  >> librerias qu nosotros mismos creamos*/

/*
Variable de entorno
- module
- process

*/


const { crearArchivo, arr, listarTabla } = require('./multiplicar/multiplica');
const { argv } = require('./config/yargs').argv;
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:  ${colors.red(archivo)} `))
            .catch(err => console.log(`Se genero un error: ${err}`));
        break;
    default:
        console.log('Comando no reconocido');

        break;
}


//console.log(argv2);


//[2].split('=')[1];