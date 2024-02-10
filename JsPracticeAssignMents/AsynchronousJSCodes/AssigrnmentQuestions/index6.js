async function fetchData() {
    return Promise.reject('Error Occured');
}

fetchData().then((data) => console.log(data)).catch((error) => console.log(error));