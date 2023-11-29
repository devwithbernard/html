const API_KEY = "LDeQeDo3sV8QOQ89f48fYWIeoS6vL8yNLgAZnK0RseYGqqfNuXDfX9Rs";

import {createClient} from "pexels";

const client = createClient(API_KEY);

export async function getPhotos(query, page){
    return await client.photos.search({query, per_page: page});
}
