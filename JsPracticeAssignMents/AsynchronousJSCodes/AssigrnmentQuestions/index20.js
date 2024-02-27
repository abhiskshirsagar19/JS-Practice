const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
 }

 const result = fetchData();
 console.log(result); 