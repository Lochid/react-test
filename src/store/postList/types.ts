export interface Action {
    type: string;
    payload?: Post[] | unknown
}

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}