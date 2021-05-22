//Helper para la peticion API REST que es como un mini axios (axios es una libreria para hacer peticiones ajax). 
//Tiene las 4 peticiones de tipo REST. 
//Podemos reutilizar este codigo en otros frameworks.

export const helpHttp = () => {

    //funcion de la peticion (retorna una promesa)
    const customFetch = (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json",
        }; //header default de la peticion.

        //-------PARA PODER CANCELAR MANUALMENTE LA PETICION ESTANCADA EN CASO DESCONOCIDO. -----//
        const controller = new AbortController(); //para abortar por si el servidor no responde
        options.signal = controller.signal; //nos permite controlar el estado del servidor por si no responde
        //---------------------------------------------------//
        options.method = options.method || "GET";
        options.headers = options.headers ? {...defaultHeader, ...options.headers} : defaultHeader;
        options.body = JSON.stringify(options.body) || false;

        if(!options.body) delete options.body; //no podemos mandar un body vacio o falso en una peticion fetch.

        console.log(options);

        setTimeout(() => controller.abort(), 3000) //si no recibo resupesta luego de 1 segundo, aborto la peticion.
                
        return fetch(endpoint, options).then(res => res.ok ? res.json() : Promise.reject({
            err: true,
            status: res.status || "00",
            statusText : res.statusText || "Ocurrio un error"
        })).catch(err => err)
    }

    const get = (url, option = {}) => customFetch(url, option)

    const post = (url, options = {}) => {
        options.method = "POST";
        return customFetch(url, options)
    }

    const put = (url, options = {}) => {
        options.method = "PUT";
        return customFetch(url, options)
    }

    const del = (url, options = {}) => {
        options.method = "DELETE";
        return customFetch(url, options)
    }

    return {
        get, post, put, del
    }
}

