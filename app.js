//const multiplicar = require("./multiplicar/multiplicar");
const { crearArchivo } = require("./multiplicar/multiplicar");

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;


let argv2 = process.argv;
console.log('Base', argv.base);
console.log('Limite', argv.limite);
//console.log(argv2);

//let base = 5;
//console.log(module);
//console.log(process);
//console.log(process.argv);

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(multiplicar);
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));