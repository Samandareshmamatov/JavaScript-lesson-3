let n = 11;
let s = 0;
for (let i = 0; i < n; i++) {
    s += ((i + 1) + 10) / 10 * ((-1) ** i);
}
console.log("Yig'indi : " + s);