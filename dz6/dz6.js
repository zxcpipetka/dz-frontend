let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

for (let j = 2; j <= 20; j++) {
    if (j % 2 === 0) continue;
    console.log(j);
}

for (let k = 1; k <= 10; k++) {
    console.log(`7 x ${k} = ${7 * k}`);
}

let n = 15;
for (let m = 1; m < 100; m++) {
    if (m >= n) break;
    console.log(m);
}

let l = 1;
while (l <= 20) {
    if (l % 3 === 0) {
        l++;
        continue;
    }
    console.log(l);
    l++;
}