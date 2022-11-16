let n = 2;
let x = 2;
let s = 0;
let s1 = 1;
for (let i = 0; i <= n; i++) {
    s1 = 1;
    for (let j = 0; j <= i; j++) {
        s1 *= (j + 1);
    }
    s += ((-1) ** i) * (x ** (2 * i + 1)) / s1;
}
console.log(s1);