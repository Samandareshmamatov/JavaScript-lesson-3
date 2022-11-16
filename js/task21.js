let n = 4;
let s = 1;
let total = 1;
for (let i = 0; i < n; i++) {
    s *= (i + 1);
    total += 1 / s;
}
console.log(`Yig'indi = ${total}`);