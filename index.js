const API_URL = 'https://jsonplaceholder.typicode.com'

var xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) { //recibe una respuesta y un codigo de respuesta sirve para controlar 
        // 0 = UNSET, no se ha llamado al method open
        // 1 = OPENED, se ha llamado al method open
        // 2 = HEADER_RECEIVED, se esta llamando al method send()
        // 3 = LOADING, esta cargando, es decir, esta recibiendola respuesta
        // 4 = DONE, se ha completado la operacion
        
        const data = JSON.parse(this.response);
        console.log(data)
        const HTMLResponse = document.querySelector('#app')
        const template = data.map(user => `<li>${user.name} ----**mail**---- ${user.email}<li>`)
        HTMLResponse.innerHTML = `<ul>${template}<ul>`
        console.log('hola mundo');
    }
};

xhr.addEventListener('load', onRequestHandler); // llamamos a la function para que se ejecute a travez de un escuchador de eventos 'addEvenListenr'
xhr.open('GET', `${API_URL}/users`); // llamamos a la URL desde donde hacemos la peticion
xhr.send() // inicia la peticion