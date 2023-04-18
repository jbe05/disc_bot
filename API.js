class API {
    baseURL = 'http://localhost:3000';

    constructor() {
        this.baseURL = 'http://localhost:3000';
    }

    get(path) {
        return fetch(this.baseURL + path, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    post(path, data) {
        return fetch(this.baseURL + path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    put(path, data) {
        return fetch(this.baseURL + path, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    delete(path) {
        return fetch(this.baseURL + path, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .catch(error => console.log(error));
    }
}