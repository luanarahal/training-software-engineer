const CLIENT_SERVICE_URL = 'http://localhost:3000/client';

const getAllClients = async (url) => {
    try {
        const data = await fetch(url);
        const response = await data.json();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const getClient = async (url, id) => {
    try {
        const data = await fetch(`${url}/${id}`);
        const response = await data.json();
        console.log(`Dados do id: ${id} -> `, response);
    } catch (error) {
        console.error(error);
    }
}

const makeRequest = (httpMethod, contentType, bodyData) => {
    if (contentType && bodyData) {
        return {
            method: `${httpMethod}`,
            headers: {
                'Content-Type': contentType
            },
            body: JSON.stringify(bodyData)
        };
    } else {
        return {
            method: `${httpMethod}`
        };
    }
}

const postClient = async (url, dados) => {
    try {
        const data = await fetch(url, makeRequest('POST', 'application/json', dados));
        const response = await data.json();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const putClient = async (url, id, dados) => {
    try {
        const data = await fetch(`${url}/${id}`, makeRequest('PATCH', 'application/json', dados));
        const response = await data.text();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const deleteClient = async (url, id) => {
    try {
        const data = await fetch(`${url}/${id}`, makeRequest('DELETE'));
        const response = await data.text();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
