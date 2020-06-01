import { connect } from 'react-redux';
import { createPost } from '../../store/postList';
import CreatePost from './CreatePost';
import { ThunkDispatch } from 'redux-thunk';

const mapDispatchToProps = (dispatch: ThunkDispatch<{ loading: false }, undefined, any>) => {
  return {
    createPost: (title: string, body: string) => dispatch(createPost(title, body)),
  };
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(CreatePost);