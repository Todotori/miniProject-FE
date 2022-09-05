import {useState} from "react";
import Modal from "../component/Modal/Modal";

const useModal = () => {
    const [message, setMessage] = useState("");
    const [visibility, setVisibility] = useState(false);
    const setModal = (modalMessage) => {
        setMessage(previousMessage => modalMessage);
        setVisibility(previousVisibility => true);
    }
    const clickHandler = () => {
        setVisibility(previousVisibility => false);
    }
    const modal = <div onClick={clickHandler}><Modal message={message} visibility={visibility}/></div>
    return [modal, setModal];
}

export default useModal;