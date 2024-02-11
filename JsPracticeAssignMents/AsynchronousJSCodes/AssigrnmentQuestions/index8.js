function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Error'), 1000);
    })
}

async function logData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
logData();
console.log('End');