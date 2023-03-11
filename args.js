import { argv } from 'node:process';
import logMessages from "./logMessages.js";

export const args = {
    options : {},
}

for (let i = 2; i < argv.length; i++) {
    const element = argv[i];
    if (element.indexOf('=') !== -1) {
        args["options"][element.split('=')[0]] = element.split('=')[1]
    }
}