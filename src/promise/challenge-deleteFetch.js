import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData (urlApi){
    const response = fetch(urlApi, {
        method: 'DELETE',
    });
    return response;
};

const id = 249;

postData(`${API}/products/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));