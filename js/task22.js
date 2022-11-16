let n = 4;
let x = 3;
let s = 0;
let s1 = 1;
for (let i = 1; i <= n; i++) {
    s1 = 1;
    for (let j = 1; j <= i; j++) {
        s1 *= j;
    }
    s += (x ** i) / s1;
}
console.log(s);