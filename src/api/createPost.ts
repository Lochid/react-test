import route from "./route";

export const createPost = (title: string, body: string) => route.post('/posts', JSON.stringify({
    title,
    body,
    userId: 1
}));
