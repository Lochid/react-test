import React from 'react';
import {
    Link
} from "react-router-dom";

interface Props {
    counter: number;
    increment: () => void;
}

export default class Page2 extends React.Component<Props> {
    render() {
        return (<div>
            <div>
                It's page2
            </div>
            <Link to="/page1">Page1</Link>
            <div>{this.props.counter}</div>
            <button onClick={this.props.increment}>Increment</button>
        </div>);
    }
}