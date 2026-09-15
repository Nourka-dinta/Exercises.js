// Making HTTP GET Resquests

async function fetchData(){

    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if(!response.ok){
            throw new Error(`HTTP erro! status ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

    }catch (error){
        console.log(error);
    }
}

fetchData();