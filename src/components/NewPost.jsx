import classes from './NewPost.module.css';

function NewPost({onBodyChange, onAuthorChange, onCancel}) {
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body' required rows={3} onChange={onBodyChange}></textarea>   {/*상태 올리기 NewPost에서 작성한 상태 데이터를 다른 컴포넌트로 사용하기 위함 onBodyChange는 변수임*/}
            </p>
            
            <p>
                <label htmlFor='name'>Your name</label>
                <input type='text' id='name' required onChange={onAuthorChange}></input>
            </p>

            <p className={classes.actions}>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    )
}
export default NewPost;
