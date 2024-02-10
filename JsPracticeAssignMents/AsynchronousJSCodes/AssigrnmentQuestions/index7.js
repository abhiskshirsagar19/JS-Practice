async function fetchData() {
    return Promise.resolve('Data');
}

fetchData().then((data) => console.log(data));
console.log('End');