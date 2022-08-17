import { obtenerChiste } from './http-provider'

const body = document.body;
let btnChistes, olChistes;
let num = 0;

const crearChistesHtml = () => {
    const html = `
        <h1 class="mt-5">Chistes</h1>
        <hr>

        <button class="btn btn-primary">Otro chiste</button>

        <ol class="mt-2 list-group">
        </ol>
    `;
    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    body.append(divChistes);
}

const eventos = () => {
    olChistes = document.querySelector('ol');
    btnChistes = document.querySelector('button');

    btnChistes.addEventListener( 'click', async () => {
        btnChistes.disabled = true;
        agregarChiste( await obtenerChiste() );
        btnChistes.disabled = false;
    });
}

// chiste -> id, value
// esta función construye un li con el chiste para insertar
const agregarChiste = ( chiste ) => {
    num++;
    const liChiste = document.createElement('li');
    liChiste.innerHTML = `${ num }.- <b>${ chiste.id }</b>: ${ chiste.value }`;
    liChiste.classList.add('list-group-item');
    olChistes.append(liChiste);
}

//función init para renderizar la página
export const init = () => {
    crearChistesHtml();
    eventos();
}