const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (isNaN(`${base}`)) {
            reject(`El valor base: "${base}" no es un numero`);
            return;
        }

        if (isNaN(`${limite}`)) {
            reject(`El valor limite: "${limite}" no es un numero`);
            return;
        }

        let resultado = '';

        for (let i = 1; i <= limite; i++) {
            resultado += `${base} x ${i} = ${base*i}\n`;
        }

        resolve(resultado);

    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}