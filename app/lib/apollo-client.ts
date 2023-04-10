import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const token = process.env.STRAPI_TOKEN;
const url = process.env.API_URL;

const getAuthHeaders = () => {
    return { authorization: `Bearer ${token}` }
}

const link = new HttpLink({
    uri: url,
    headers: getAuthHeaders()
})

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default client;