const fetchData = async (page) => {
    const response = await fetch(`https://api.example.com/data?page=${page}`);
    const data = await response.json();
    return data;
 }

 const result = fetchData(1);