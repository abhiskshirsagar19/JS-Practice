function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data'), 1000);
    });
}

async function logData() {
    const rersult = await fetchData();
    console.log(rersult);
}

logData();
console.log('End');