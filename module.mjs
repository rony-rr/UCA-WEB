const API_URL = "https://swapi.info/api/films/3";

const res = await fetch(`${API_URL}`);
const resParsed = await res.json();

if(res.status === 200) console.log('Todo funcionó');
if(resParsed) console.log('Existen datos formateados en JSON');

const code = res.status;
switch(code) {
    case 200:
        console.log({ resParsed });
        break;
    case 404:
        console.log('Error de Not Found switch');
        break;
    case 500:
        console.log('Error de servidor switch');
        break;
}
