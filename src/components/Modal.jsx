import claesses from './Modal.module.css';

function Modal({children, onClose}) {   //NewPost 컴포넌트가 children 속성값으로 들어온다.
    return (
        <>
            <div className={claesses.backdrop} onClick={onClose}></div>
            <dialog open={true} className={claesses.modal}>
                {children}
            </dialog>  {/*open={true} 자동으로 모달창이 뜸 */}
        </>
    )
}
export default Modal;