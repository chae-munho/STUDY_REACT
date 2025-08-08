import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostList.module.css';
import Modal from "./Modal";

function PostList({isPosting, onStopPosting}) {
    
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    
    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    // let modalContent;
    // if (modalIsVisible) {
    //     modalContent = <Modal onClose={hideModalHandler}>
    //             <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}></NewPost>
    //         </Modal>
    // }

    return (
        <>
            {isPosting && <Modal onClose={onStopPosting}>
                <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} onCancel={onStopPosting}></NewPost>
            </Modal>}
           
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody}></Post>
                <Post author="Manual" body="Check out the full course!"></Post>
            </ul>
         </>
    )
}
export default PostList;