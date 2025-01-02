const fetch = require('node-fetch');
export async function handler(event, context){
    const url="https://example.com"+event.path;

try{
    const response = await fetch(url);
    const data = await response.text();
    return{
        statusCode: 200,
        body: data,
        headers:{
            'Content-Type': 'text/html',
        },

    };
} catch(error){
    return{
        statusCode: 500,
        body:'Error fetching the URL.',
    };
}
};

