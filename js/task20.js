let n = 4;
let s = 1;
let total = 0;
for (let i = 0; i < n; i++) {
    s *= (i + 1);
    total += s;
}
console.log(`Yig'indi = ${total}`);