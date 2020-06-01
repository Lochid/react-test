import React, { useEffect } from 'react';
import {
    Link, useParams
} from "react-router-dom";
import { Post as PostType } from '../../store/postList/types';


interface Props {
    fetchPostList: () => void;
    getPostListById: (id: number) => PostType | undefined;
}

const Post = (props: Props) => {
    let { id } = useParams();

    useEffect(() => {
        if (!props.getPostListById(id))
            props.fetchPostList();
    });

    const post = props.getPostListById(id);

    return post ? (<div>
        <div>
            <span>Id:</span>
            <span>{post.id}</span>
        </div>
        <div>
            <span>Title:</span>
            <span>{post.userId}</span>
        </div>
        <div>
            <span>Title:</span>
            <span>{post.title}</span>
        </div>
        <div>
            <span>Body:</span>
            <span>{post.body}</span>
        </div>
        <Link to="/postTable">Back</Link>
    </div>) : (<div>loading</div>);
};

export default Post;