import Post from "./Post";
import classes from './PostList.module.css';
function PostList() {
    return (
        <ul className={classes.posts}>
            <Post author="Maximilian" body="React.js is awesome!!"></Post>
            <Post author="Manual" body="CHeck out the full course"></Post>
        </ul>
    )
}
export default PostList;