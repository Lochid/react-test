import React from 'react';
import {
    Link
} from "react-router-dom";

interface Props {
    counter: number;
    increment: () => void;
}

export default class Page1 extends React.Component<Props> {
    render() {
        return (<div>
            <div>
                It's page1
            </div>
            <Link to="/page2">Page2</Link>
            <div>{this.props.counter}</div>
            <button onClick={this.props.increment}>Increment</button>
        </div>);
    }
}