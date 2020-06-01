import { connect } from 'react-redux';
import { fetchPostList } from '../../store/postList';
import Post from './Post';
import { ThunkDispatch } from 'redux-thunk';
import { Post as PostType } from '../../store/postList/types';
import { getPostListById } from '../../store/postList/selectors';


interface State {
  postList: {
    loading: boolean;
    postList: PostType[];
  };
}

const mapStateToProps = (state: State) => ({
  getPostListById: getPostListById(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{ loading: false }, undefined, any>) => {
  return {
    fetchPostList: () => dispatch(fetchPostList()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
