let price = 5000;
let count = 10;
for (let i = 0; i < count; i++) {
    console.log(`${i/5 + 1} kg konfet narxi ${(i/5 + 1)*price} so'm`);
    if (i == 5) {
        break;
    }
}