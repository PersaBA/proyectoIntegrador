const contenedor = document.getElementById('contenedor');
const loader = `<div role="status"> Esta Cargando la pagina</div>`;

function ajax(url, metodo, callback, esJson, errorMsg, datos, onProgress) {
    const peticion = new XMLHttpRequest();
    peticion.open(metodo, url);    
    if (esJson) {
        peticion.responseType = 'json';
    }
    peticion.send(datos);
    peticion.addEventListener("progress",function(e){
        console.log('progress', e);
        if (onProgress) {
            onProgress(e);
        }
    });        
    peticion.addEventListener("load", function () {
        if (peticion.status == 200) {
            callback(peticion.response);                
        } else {
            alert(errorMsg);
        }
    });
}
function navegar(hash, isWindowLoad) {
    if (!isWindowLoad && history.state && history.state.prevUrl.includes(hash)) {
        console.log('ya estamos en la página a que intenta navegar', { prevUrl: history.state.prevUrl, url: hash });
        return;
    }
    contenedor.innerHTML = loader;
    if (!hash.includes('#') || hash.includes('bienvenida')) {
        ajax(
            'contenidos/bienvenida.html',
            'GET',
            function (contenido) {
                contenedor.innerHTML = contenido;

            }, 
            false, 
            'Ocurrió un error al cargar la página'
        );
    }
    if (hash.includes('formulario')) {
        ajax(
            'contenidos/formulario.html',
            'GET',
            function (contenido) {
                contenedor.innerHTML = contenido;
            }, 
            false, 
            'Ocurrió un error al cargar la página'
        );
    }
    if (hash.includes('plan')) {
        ajax(
            'contenidos/plan.html',
            'GET',
            function (contenido) {
                contenedor.innerHTML = contenido;
            }, 
            false, 
            'Ocurrió un error al cargar la página'
        );
    }
    if (hash.includes('pago')) {
        ajax(
            'contenidos/plan.html',
            'GET',
            function (contenido) {
                contenedor.innerHTML = contenido;
            }, 
            false, 
            'Ocurrió un error al cargar la página'
        );
    }

}
window.onpopstate = function (e) {
    navegar(location.hash);
}
 window.onload = function (e) {
    navegar(location.hash, true);
}

