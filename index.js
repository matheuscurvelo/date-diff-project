import {args} from "./args.js";
import logMessages from "./logMessages.js";
import moment from 'moment';

const keys = Object.keys(args.options);

if (!keys.includes('data1') || !keys.includes('data2') || keys.length == 0) {
    logMessages.info("node index.js data1=YYYY-MM-DD data2=YYYY-MM-DD")
    process.exit();
}

let dataMaior  = moment(args.options.data1);
let dataMenor  = moment(args.options.data2);
let msg = '';

if (dataMaior.diff(dataMenor) < 0) {
    let temp = dataMaior
    dataMaior = dataMenor
    dataMenor = temp
}

const anos = dataMaior.diff(dataMenor,'years');
dataMenor.add(anos,'years');
if (anos > 0) {
    msg += `${anos} ${anos > 1 ? 'anos' : 'ano'}, `
}

const meses = dataMaior.diff(dataMenor,'months');
dataMenor.add(meses,'months');
if (meses > 0) {
    msg += `${meses} ${meses > 1 ? 'meses' : 'mes'}, `
}

const semanas = dataMaior.diff(dataMenor,'weeks');
dataMenor.add(semanas,'weeks');
if (semanas > 0) {
    msg += `${semanas} ${semanas > 1 ? 'semanas' : 'semana'}, `
}

const dias = dataMaior.diff(dataMenor,'days');
if (dias > 0) {
    msg += `${dias} ${dias > 1 ? 'dias' : 'dia'} `
}

msg = msg.replace(/,([^,]*)$/, ' e$1')

logMessages.success(`Diferença de ${msg}`)