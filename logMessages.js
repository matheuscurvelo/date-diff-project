import chalk from 'chalk';

const logMessages = {
    error(msg) {
        console.log(chalk.red(`ERRO: ${msg}`));
    },
    warn(msg) {
        console.log(chalk.yellow(`WARN: ${msg}`));
    },
    success(msg) {
        console.log(chalk.green(`SUCCESS: ${msg}`));
    },
    info(msg) {
        console.log(chalk.cyan(`${msg}`));
    },
}

// logMessages.error('Mensagem');
// logMessages.warn('Mensagem');
// logMessages.success('Mensagem');
// logMessages.info('Mensagem');

export default logMessages