let n = 5;
let x = 2;
let s = 1;
let s1 = 1;
for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        s1 = 1;
        for (let j = 1; j <= i; j++) {
            s1 *= j;
        }

        s += ((-1) ** i) * (x ** (2 * i + 1)) / s1;
    } else {
        s += 0;
    }
}
console.log(s);