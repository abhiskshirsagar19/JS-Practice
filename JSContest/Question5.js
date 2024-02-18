function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    });
}

async function foo() {
    console.log('Start');

    await delay(1000);
    console.log('Middle');

    await delay(2000);
    console.log('End')
}

foo();
console.log('After foo');