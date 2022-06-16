const API_URL = 'https://jsonplaceholder.typicode.com'

var xhr = new XMLHttpRequest();

function onRequestHandler() {
    const CODE_STATUS = {
        UNSET: 0,
        OPENED: 1,
        HEADER_RECEIVED: 2,
        LOADING: 3,
        DONE: 4
    };
    
    if (this.readyState === CODE_STATUS.DONE && this.status === 200) { //recibe una respuesta y un codigo de respuesta sirve para controlar 
        const data = JSON.parse(this.response);
        console.log(data)
        const HTMLResponse = document.querySelector('#app')
        const template = data.map(user => `<li>${user.name} ----**mail**---- ${user.email}<li>`)
        HTMLResponse.innerHTML = `<ul>${template}<ul>`
    }
};

xhr.addEventListener('load', onRequestHandler); // llamamos a la function para que se ejecute a travez de un escuchador de eventos 'addEvenListenr'
xhr.open('GET', `${API_URL}/users`); // llamamos a la URL desde donde hacemos la peticion
xhr.send() // inicia la peticion
