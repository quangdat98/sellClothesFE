export default {
    axios: {
        baseURL: process.env.API_URL,
        headers: {
            common: {
                'Content-Type': 'application/json'
            }
        },
        credentials: true,
        crossDomain: true
    },
}
