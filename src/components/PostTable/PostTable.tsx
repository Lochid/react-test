import React from 'react';
import { Post } from '../../store/postList/types';
import { Link } from 'react-router-dom';
import { CreatePost } from '../CreatePost'
import styled, { ThemeProvider } from 'styled-components';
import BoldTable from '../../styles/BoldTable';

interface Props {
    loading: boolean;
    postList?: Post[];
    fetchPostList: () => void;
}

const Table = styled.table`
  border: ${props => props.theme.size}px solid ${props => props.theme.color};
`;


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

        return (<Table>
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
        </Table>);
    }

    render() {
        return (<div>
            <CreatePost />
            <ThemeProvider theme={BoldTable}>
                {this.props.loading ? null : this.getTable()}
            </ThemeProvider>
        </div>);
    }
}