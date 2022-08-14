import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData (urlApi){
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credential: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
};

const data = {
  "title": "JS ES MT",
  "price": 5511,
};
const id = 249;

postData(`${API}/products/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));