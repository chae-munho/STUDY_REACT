import claesses from './Post.module.css';

function Post(props) {
    return (
        <li className={claesses.post}>
            <p className={claesses.author}>{props.author}</p>
            <p className={claesses.text}>{props.body}</p>
        </li>
    )

}
export default Post;