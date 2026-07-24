import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base'
  })
  .option ('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Limit for the multiplication table'
  })
  .option  ('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
  })
  .check((argv, options) => {
    
    if (isNaN(argv.b)) throw new Error('Error: La base tiene que ser un número');
    if (argv.b < 1) throw new Error('Error: Procura que el valor de la base sea mayor que 0');
    //evitar que nos jueguen chueco con el limite y no solo con el valor de la base
    if (isNaN(argv.l)) throw new Error('Error: El límite tiene que ser un número');
    if (argv.l < 1) throw new Error('Error: El límite debe ser mayor que 0');
    
    return true; 
  })
  .parseSync();