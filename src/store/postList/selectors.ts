import { Post } from '../../store/postList/types';

interface State {
    postList: {
        loading: boolean;
        postList: Post[];
    };
}

export const getPostListById = ({ postList }: State) => (id: number): Post | undefined => {
    return postList.postList ? postList.postList
        .filter(p => +p.id === +id)[0] : undefined;
}