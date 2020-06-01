import React from 'react';

interface Props {
    createPost: (title: string, body: string) => void;
}

interface State {
    title: string;
    body: string;
}

export default class PostTable extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }
    }

    render() {
        return (<div>
            <div>
                <span>Title:</span>
                <input onChange={(e) => this.setState({ title: e.target.value })} value={this.state.title} />
            </div>
            <div>
                <span>Text:</span>
                <input onChange={(e) => this.setState({ body: e.target.value })} value={this.state.body} />
            </div>
            <button onClick={() => this.props.createPost(this.state.title, this.state.body)}>Send</button>
        </div>);
    }
}