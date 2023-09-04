import { readFileSync } from 'fs';
import path from 'path';

export const criptos = JSON.parse(
    readFileSync(path.resolve(__dirname, 'api.json'), 'utf-8').toString()
);


export const monedas = [
    { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' }
];