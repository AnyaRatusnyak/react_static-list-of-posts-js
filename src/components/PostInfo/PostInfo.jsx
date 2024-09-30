import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post, commentsForPost }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo userInfo={post.user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>
      <CommentList commentsForPost={commentsForPost} />
    </div>
  );
};
