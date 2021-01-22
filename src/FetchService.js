const SERVER_URL = "http://localhost:8080/api"

const FetchService = {
    getCat(){
       return fetch(`${SERVER_URL}/cats`).then(cat => cat.json())
    }, 
    getDog(){
        return fetch(`${SERVER_URL}/dogs`).then(dog => dog.json())
    },
    postPerson(person){
        return fetch(`${SERVER_URL}/people`, {method: 'POST', headers: {"content-type": "application/json"}, body: JSON.stringify(review)}).then(person => person,json())
    }, 
    getPeople(){
        return fetch(`${SERVER_URL}/people`)
    }, 
    dqCat(){
        return fetch(`${SERVER_URL}/cats`, {method: 'DELETE', headers: {"content-type": "application/json"}}).then(person => person,json())
    }, 
    dqDog(){
        return fetch(`${SERVER_URL}/dogs`, {method: 'DELETE', headers: {"content-type": "application/json"}}).then(person => person,json())  
    }  
}

export default FetchService;