import { makeRequest } from "../utils.js";
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

const postClient = async (url, bodyData) => {
    try {
        const data = await fetch(url, makeRequest('POST', 'application/json', bodyData));
        const response = await data.json();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const putClient = async (url, id, bodyData) => {
    try {
        const data = await fetch(`${url}/${id}`, makeRequest('PATCH', 'application/json', bodyData));
        const response = await data.json();
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
