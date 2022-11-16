let n = 3;
let m = 0;
// for (let i = 1; i <= n; i++) {
//     m = 0;
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             m++;
//         } else {
//             m += 0;
//         }
//     }
//     if (m == 2) {
//         console.log(i + " tub son");
//     } else {
//         console.log(i + " tub son emas");
//     }
// }
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        m++;
    } else {
        m += 0;
    }
}
m == 2 ? console.log(n + " tub son") : console.log(n + " tub son emas");