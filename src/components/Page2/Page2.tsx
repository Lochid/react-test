import React from 'react';
import {
    Link
} from "react-router-dom";
import RedBackground from '../../styles/RedBackground'


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
            <RedBackground>
                <button onClick={this.props.increment}>Increment</button>
            </RedBackground>
        </div>);
    }
}