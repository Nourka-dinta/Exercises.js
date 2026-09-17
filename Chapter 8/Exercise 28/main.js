// Promise
function fetchUserData() {
    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            const success = false;

            if (success) {
                resolve("Successful")
            }else {
                reject("Failed")
            }
        }, 2000);
    })
}

// Using Async/Await with Promise

async function displayUserData() {
    try {
        const user = await fetchUserData();
        console.log(user);
    }catch (err){
        console.log(err);
    }
}

displayUserData();