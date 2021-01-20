process.env.test = true;
const translit = require("../translit");
let result = translit(`Умом — Россию не понять,
Аршином общим не измерить.
У ней особенная стать —
В Россию можно только верить.
Федор Тютчев
1866 г.`)
console.log(result);