// Promise
function fetchUserData() {
    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            const success = true;

            if (success) {
                resolve("Successful")
            }else {
                reject("Failed")
            }
        }, 2000);
    })
}

fetchUserData()
    .then((suc) => console.log(suc))
    .catch((err) => console.log(err))