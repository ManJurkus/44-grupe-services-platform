import { APIresponse, DataForHandlers } from "../lib/server.js";

export async function servisesAPI(data: DataForHandlers): Promise<APIresponse> {
    const httpMethod = data.httpMethod;
    const availableHttpMethods = ['post', 'get', 'put', 'delete'];
    if (availableHttpMethods.includes(httpMethod) && httpMethod in api) {
        return await api[httpMethod]!(data);
    }

    return {
        statusCode: 405,
        headers: {},
        body: `"${httpMethod}" HTTP method is not allowed.`,
    };
}

const api: Record<string, Function> = {};

api.post = async (data: DataForHandlers): Promise<APIresponse> => {
    const queryString = `INSERT INTO services (id, title, description, price, photo, isActive) VALUES (NULL, 'TITLE', 'DESCRIPTION', '5.53', '', '1');`

    try {
        
    } catch (error) {
        
    }

    await data.dbConnection.query(queryString);

    return {
        statusCode: 201,
        headers: {},
        body: 'Service created.',
    };
}

api.get = async (data: DataForHandlers): Promise<APIresponse> => {
    
    return {
        statusCode: 200,
        headers: {},
        body: 'Services list data',
    };
}

api.put = async (data: DataForHandlers): Promise<APIresponse> => {
    
    return {
        statusCode: 200,
        headers: {},
        body: 'Service updated.',
    };
}

api.delete = async (data: DataForHandlers): Promise<APIresponse> => {
    
    return {
        statusCode: 200,
        headers: {},
        body: 'Service delete.',
    };
}