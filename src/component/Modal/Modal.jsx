import { ModalContainer, ModalBox } from "./styles";

const Modal = ({ message, visibility }) => {
    return <ModalContainer visibility={visibility}>
        <ModalBox>
            <p>{message}</p>
        </ModalBox>
    </ModalContainer>;
};

export default Modal;