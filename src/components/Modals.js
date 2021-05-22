import Modal from "./Modal";
import { useModal } from "../hooks/useModal"
import ContactForm from "./ContactForm";
import SongSearch from "./SongSearch";
import ModalPortal from "./ModalPortal";

function Modals() {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)
    const [isOpenModalContact, openModalContact, closeModalContact] = useModal(false)
    const [isOpenModalSong, openModalSong, closeModalSong] = useModal(false)

    // Modal Portal
    const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false)

    return (
        <div>
            <h2>Modales</h2>    
            <button onClick={openModal1}>Modal 1 </button>
            {/* al definir el componente con doble tag etamos aumtomaticaente designando la propiedad children*/}
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h4>Modal 1</h4>
                <p>Este es mi modal 1</p>
                <img src="https://placeimg.com/100/100/arch" alt="animals"/>
            </Modal>
            <button onClick={openModal2}>Modal 2 </button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>                
                <h4>Modal 2</h4>
                <p>Este es mi modal 2</p>
                <img src="https://placeimg.com/100/100/tech" alt="animals"/>
            </Modal>
            <button onClick={openModalContact}>Modal Contacto</button>
            <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>                
             <ContactForm />
            </Modal>
            <button onClick={openModalSong}>Modal Song Search</button>
            <Modal isOpen={isOpenModalSong} closeModal={closeModalSong}>                
             <SongSearch/>
            </Modal>

            {/* MODAL PORTAL A OTRO NODO DEL DOM*/}
            <button onClick={openModalPortal}>Modal Song Search</button>
            <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>                
                <h4>Modal porta</h4>
                <p>Este es un contenido modal que carga en otro nodo del DOM diferente a donde carga nuestra app de React, gracias a los Portales</p>
                <img src="https://placeimg.com/100/100/arch" alt="animals"/>
            </ModalPortal>
        </div>

    )
}


export default Modals
