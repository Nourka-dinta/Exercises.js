// Fetching JSON Data from a File
async function fetchData(){

    console.log("Start fetching data");

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();
    
    console.log("response: ", data);
}

fetchData();