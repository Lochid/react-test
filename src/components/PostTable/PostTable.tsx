import React from 'react';
import { Post } from '../../store/postList/types';
import { Link } from 'react-router-dom';

interface Props {
    loading: boolean;
    postList?: Post[];
    fetchPostList: () => void;
}

export default class PostTable extends React.Component<Props> {

    componentDidMount() {
        if (!this.props.postList)
            this.props.fetchPostList();
    }

    getRow(post: Post) {
        return (<tbody key={post.id}>
            <tr>
                <td>
                    <Link to={`/post/${post.id}`}>
                        {post.id}
                    </Link>
                </td>
                <td>
                    {post.userId}
                </td>
                <td>
                    {post.title.substr(0, 64)}
                </td>
                <td>
                    {post.body.substr(0, 64)}
                </td>
            </tr>
        </tbody>);
    }


    getRowList(posts: Post[]) {
        return posts.map(post => this.getRow(post));
    }

    getTable() {
        if (this.props.postList == null)
            return null;

        return (<table>
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
            {this.getRowList(this.props.postList)}
        </table>);
    }

    render() {
        return (<div>
            {this.props.loading ? null : this.getTable()}
        </div>);
    }
}