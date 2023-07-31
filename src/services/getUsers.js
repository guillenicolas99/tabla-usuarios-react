
export default function getUsers( page = '1' ){

    const apiURL = `https://randomuser.me/api/?page=${page}&results=20&seed=abc`

    return fetch(apiURL)
    .then( res => res.json())
    .then( res => res)
    .catch( err => {
        console.error( err )
    })
}