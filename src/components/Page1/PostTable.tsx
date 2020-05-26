import React from 'react';
import {
    Link
} from "react-router-dom";
import { postList } from '../../api/postList';

interface Props {
    counter: number;
    increment: () => void;
}

export default class PostTable extends React.Component<Props> {
    render() {
        postList()
            .then(res => console.log(res));
        return (<div>
            <div>
                It's page1
            </div>
            <Link to="/page2">Page2</Link>
            <div>{this.props.counter}</div>
            <button onClick={this.props.increment}>Increment</button>

            <table>
                <thead>
                    <tr>
                        <td>
                            Id
                        </td>
                        <td>
                            User
                        </td>
                        <td>
                            Title
                        </td>
                        <td>
                            Text
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Id
                        </td>
                        <td>
                            User
                        </td>
                        <td>
                            Title
                        </td>
                        <td>
                            Text
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>);
    }
}