import { connect } from 'react-redux';
import { fetchPostList } from '../../store/postList';
import PostTable from './PostTable';
import { ThunkDispatch } from 'redux-thunk';
import { Post } from '../../store/postList/types';

interface State {
  postList: {
    loading: boolean;
    postList: Post[];
  };
}

const mapStateToProps = ({ postList }: State) => ({
  ...postList
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{ loading: true }, undefined, any>) => {
  return {
    fetchPostList: () => dispatch(fetchPostList()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostTable);