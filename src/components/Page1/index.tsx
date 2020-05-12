import React from 'react';
import {
    Link
} from "react-router-dom";

export class Page1 extends React.Component {
    render() {
        return (<div>
            It's page1
            <Link to="/page2">Page2</Link>
        </div>);
    }
}