import {useState} from "react";
import Modal from "../component/Modal/Modal";

const useModal = () => {
    const [message, setMessage] = useState("");
    const [visibility, setVisibility] = useState(false);
    const setModal = (modalMessage) => {
        setMessage(() => modalMessage);
        setVisibility(() => true);
    }
    const clickHandler = () => {
        setVisibility(() => false);
    }
    const modal = <div onClick={clickHandler}><Modal message={message} visibility={visibility}/></div>
    return [modal, setModal];
}

export default useModal;