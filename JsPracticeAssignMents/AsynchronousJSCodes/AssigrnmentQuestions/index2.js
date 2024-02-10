async function getData() {
    return await Promise.resolve('Hello');
}
console.log(getData());