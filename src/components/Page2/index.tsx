import React from 'react';
import {
    Link
} from "react-router-dom";

export class Page2 extends React.Component {

    render() {
        return (<div>
            It's page2
            <Link to="/page1">Page1</Link>
        </div>);
    }
}