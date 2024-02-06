export const makeRequest = (httpMethod, contentType = 'application/json', bodyData) => {
    const requestConfig = {
        method: `${httpMethod}`,
        headers: {
            'Content-Type': contentType
        }
    };

    if (bodyData) {
        requestConfig.body = JSON.stringify(bodyData);
    }

    return requestConfig;
};
