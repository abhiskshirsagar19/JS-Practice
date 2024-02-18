function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Done');
        }, ms)
    })
}

async function foo() {
    console.log('Start');
    await delay(2000);
    console.log('End')
}
foo();
console.log('After foo')