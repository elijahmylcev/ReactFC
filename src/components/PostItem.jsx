import MyButton from './Ui/button/MyButton';

function PostItem(props) {
  const { post, number, remove } = props;
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}
          .
          {' '}
          {post.title}
        </strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className="post__btn">
        <MyButton type="button" onClick={() => remove(post)}>
          Delete post
        </MyButton>
      </div>
    </div>
  );
}

export default PostItem;
