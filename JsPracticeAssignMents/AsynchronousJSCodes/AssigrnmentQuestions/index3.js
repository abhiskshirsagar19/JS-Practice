async function fetchData() {
    throw new Error('Error Occured');
}
fetchData().catch((error) => console.log(error.message));