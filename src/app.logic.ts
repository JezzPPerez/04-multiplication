import fs from 'fs';
import { yarg } from './config/plugins/args.plugins';

const {b:base, l:limit, s:showTable} = yarg;
let outputMesage = '';
const headerMessage = `
=========================
    Tabla del ${base}
=========================
`; 

for (let i = 1; i <= limit; i++) {
    outputMesage += `${base} x ${i} = ${base * i}\n`;
}

outputMesage = headerMessage + outputMesage;
if (showTable) {
    console.log(outputMesage);
}

const outputFile = `outputs`;


fs.mkdirSync(outputFile, { recursive: true });
fs.writeFileSync(`${outputFile}/tabla-${base}.txt`, outputMesage);

console.log('Archivo creado correctamente!!!!');