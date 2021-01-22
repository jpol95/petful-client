const SERVER_URL = "http://localhost:8000/api"

const FetchService = {
    getCat(){
       return fetch(`${SERVER_URL}/cats`).then(cat => cat.json())
    }, 
    getDog(){
        return fetch(`${SERVER_URL}/dogs`).then(dog => dog.json())
    },
    postPerson(person){
        return fetch(`${SERVER_URL}/people`, {method: 'POST', headers: {"content-type": "application/json"}, body: JSON.stringify(person)}).then(person => person.json())
    }, 
    getPeople(){
        return fetch(`${SERVER_URL}/people`).then(people => people.json())
    }, 
    dqCat(){
        return fetch(`${SERVER_URL}/cats`, {method: 'DELETE', headers: {"content-type": "application/json"}})
    }, 
    dqDog(){
        return fetch(`${SERVER_URL}/dogs`, {method: 'DELETE', headers: {"content-type": "application/json"}}) 
    }, 
    dqPerson(){
        return fetch(`${SERVER_URL}/people`, {method: 'DELETE', headers: {"content-type": "application/json"}})
    }
}

export default FetchService;