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

const getMethod = async (method, dados) => {
    return {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    };
}

const postClient = async (url, dados) => {
    try {
        const data = await fetch(url, await getMethod('POST', dados));
        const response = await data.json();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const putClient = async (url, id, dados) => {
    try {
        const data = await fetch(`${url}/${id}`, await getMethod('PATCH', dados));
        const response = await data.text();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const deleteClient = async (url, id) => {
    try {
        const data = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        const response = await data.text();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
