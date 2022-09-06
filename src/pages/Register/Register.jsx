import {RegisterContainer, FormContainer, Logo, Form, FormField, LoginLink} from './styles';
import logo from '../../image/mainlogo.png';
import {Link, useNavigate} from 'react-router-dom';
import useInput from '../../hooks/useInput';
import useModal from "../../hooks/useModal";
import useEmailValidator from "../../hooks/useEmailValidator";
import {useDispatch} from "react-redux";
import {createUserThunk} from "../../redux/modules/createUserSlice";
import {checkEmailThunk} from "../../redux/modules/checkEmailSlice";
import {checkUsernameThunk} from "../../redux/modules/checkUsernameSlice";

const Register = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail, resetEmail] = useInput();
    const emailValidator = useEmailValidator();
    const [password, setPassword, resetPassword] = useInput();
    const [passwordConfirmation, setPasswordConfirmation, resetPasswordConfirmation] = useInput();
    const [username, setUsername, resetUsername] = useInput();
    const [introduction, setIntroduction, resetIntroduction] = useInput();
    const [modal, setModal] = useModal();
    const register = async () => {
        if (email.length === 0) {
            setModal("이메일을 입력해주세요.");
        } else if (!emailValidator(email)) {
            setModal("이메일 형식이 올바르지 않습니다.");
        } else if (password.length === 0) {
            setModal("비밀번호를 입력해주세요.")
        } else if (password !== passwordConfirmation) {
            setModal("비밀번호가 일치하지 않습니다.");
        } else if (username.length === 0) {
            setModal("이름을 입력해주세요.")
        } else {
            const checkEmailResponse = await dispatch(checkEmailThunk(email));
            const checkUsernameResponse = await dispatch(checkUsernameThunk(username));
            if (!checkEmailResponse.payload) {
                setModal("이미 사용 중인 이메일입니다.");
            } else if (!checkUsernameResponse.payload) {
                setModal("이미 사용 중인 닉네임입니다.");
            } else {
                const newUser = {
                    email,
                    nickname: username,
                    password,
                    passwordConfirm: passwordConfirmation,
                    introduction
                }
                const createUserResponse = await dispatch(createUserThunk(newUser));
                if (createUserResponse.error) {
                    const errorCode = createUserResponse.payload;
                    switch (errorCode) {
                        case "DUPLICATED_EMAIL":
                            setModal("이미 사용되고 있는 이메일입니다.");
                            break;
                        case "DUPLICATED_NICKNAME":
                            setModal("이미 사용되고 있는 닉네임입니다.");
                            break;
                        case "PASSWORDS_NOT_MATCHED":
                            setModal("비밀번호가 일치하지 않습니다.");
                            break;
                        default:
                            setModal("예기치 못한 오류가 발생하였습니다.");
                            break;
                    }
                } else {
                    const {token, userID} = createUserResponse.payload;
                    sessionStorage.setItem("access_token", token);
                    sessionStorage.setItem("user_id", userID);
                    resetAll();
                    navigator("/");
                }
            }
        }
    };
    const resetAll = () => {
        resetEmail();
        resetPassword();
        resetPasswordConfirmation();
        resetUsername();
        resetIntroduction();
    }
    const checkEmailHandler = async () => {
        if (email.length === 0) {
            setModal("이메일을 입력해주세요.");
        } else if (!emailValidator(email)) {
            setModal("이메일 형식이 올바르지 않습니다.");
        } else {
            const {payload} = await dispatch(checkEmailThunk(email));
            if (!payload) {
                setModal("이미 사용 중인 이메일입니다.");
            } else {
                setModal("사용 가능한 이메일입니다.");
            }
        }
    }
    const checkUsernameHandler = async () => {
        if (username.length === 0) {
            setModal("이름을 입력해주세요.");
        } else {
            const {payload} = await dispatch(checkUsernameThunk(username));
            if (!payload) {
                setModal("이미 사용 중인 닉네임입니다.");
            } else {
                setModal("사용 가능한 닉네임입니다.");
            }
        }
    }
    return (
        <RegisterContainer>
            <FormContainer>
                <Logo>
                    <img src={logo} alt='Logo'/>
                </Logo>
                <Form>
                    <FormField>
                        <input type='email' placeholder={'이메일'} required value={email} onChange={setEmail}/>
                        <button onClick={checkEmailHandler}>중복확인</button>
                    </FormField>
                    <FormField>
                        <input type='password' placeholder={'비밀번호'} required value={password} onChange={setPassword}/>
                    </FormField>
                    <FormField>
                        <input type='password' placeholder={'비밀번호 확인'} required value={passwordConfirmation}
                               onChange={setPasswordConfirmation}/>
                    </FormField>
                    <FormField>
                        <input type='text' placeholder={'이름'} required value={username} onChange={setUsername}/>
                        <button onClick={checkUsernameHandler}>중복확인</button>
                    </FormField>
                    <FormField>
                        <textarea placeholder={'자기소개'} value={introduction} onChange={setIntroduction}/>
                    </FormField>
                </Form>
                <LoginLink>
                    <Link to={'/login'}>
                        <p>이미 도토리이신가요?</p>
                    </Link>
                </LoginLink>
                <button onClick={register}>도토리되기</button>
            </FormContainer>
            {modal}
        </RegisterContainer>
    );
};

export default Register;
