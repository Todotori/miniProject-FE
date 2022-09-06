import {useNavigate} from "react-router-dom";

const useLogout = () => {
    const navigator = useNavigate();
    return () => {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("user_id");
        navigator("/");
    }
}

