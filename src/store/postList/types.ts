export interface Action {
    type: string;
    payload?: Post[] | Post | unknown
}

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}