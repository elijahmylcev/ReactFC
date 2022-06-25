import MyButton from './Ui/button/MyButton';

function PostItem(props) {
  const { id, title, body } = props.post;
  const { number } = props;
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}
          .
          {' '}
          {title}
        </strong>
        <div>
          {body}
        </div>
      </div>
      <div className="post__btn">
        <MyButton type="button">Delete post</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
