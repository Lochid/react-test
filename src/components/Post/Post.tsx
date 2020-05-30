import React from 'react';
import {
    Link, useParams
} from "react-router-dom";
import RedBackground from '../../styles/RedBackground'


interface Props {
    counter: number;
    increment: () => void;
}

const Post = (props: Props) => {
    let { id } = useParams();

    return (<div>
        {id}
        <div>
            It's page2
            </div>
        <Link to="/postTable">Page1</Link>
        <div>{props.counter}</div>
        <RedBackground>
            <button onClick={props.increment}>Increment</button>
        </RedBackground>
    </div>);
};

export default Post;