import "./Modal.css"
import ReactDOM from "react-dom";

// usamos el metodo de la libreria de ReactDOM para insertar el modal en otro nodo del DOM que no sea el root.
// xdddddddddddddddddddddd

const ModalPortal = ({children, isOpen, closeModal}) => {
    return ReactDOM.createPortal(
        <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
            <div className="modal-container">
                <button className="modal-close" onClick={closeModal}>X</button>
                {children}
            </div>
        </article>
    , document.getElementById("modal"))
}

export default ModalPortal