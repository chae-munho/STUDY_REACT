import claesses from './Post.module.css';

function Post({author, body}) {
    return (
        <li className={claesses.post}>
            <p className={claesses.author}>{author}</p>
            <p className={claesses.text}>{body}</p>
        </li>
    )

}
export default Post;