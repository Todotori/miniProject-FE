import {LoginContainer, FormContainer, Logo, Form, FormField, LoginLink} from './styles';
import logo from '../../image/mainlogo.png';
import {Link} from 'react-router-dom';
import useInput from '../../hooks/useInput';
import useModal from "../../hooks/useModal";
import useEmailValidator from "../../hooks/useEmailValidator";
import axios from "axios";

const Login = () => {
    const [email, setEmail, resetEmail] = useInput();
    const emailValidator = useEmailValidator();
    const [password, setPassword, resetPassword] = useInput();
    const [modal, setModal] = useModal();
    const register = async () => {
        if (email.length === 0) {
            setModal("이메일을 입력해주세요.");
        } else if (!emailValidator(email)) {
            setModal("이메일 형식이 올바르지 않습니다.");
        } else if (password.length === 0) {
            setModal("비밀번호를 입력해주세요.")
        } else {
            const user = {
                email,
                password
            }
            const loginResponse = await axios.post("/api/login", user);
            // TODO: LOGIN.
            resetEmail();
            resetPassword();
        }
    };
    return (
        <LoginContainer>
            <FormContainer>
                <Logo>
                    <img src={logo} alt='Logo'/>
                </Logo>
                <Form>
                    <FormField>
                        <input type='email' placeholder={'이메일'} required value={email} onChange={setEmail}/>
                    </FormField>
                    <FormField>
                        <input type='password' placeholder={'비밀번호'} required value={password} onChange={setPassword}/>
                    </FormField>
                </Form>
                <LoginLink>
                    <Link to={'/register'}>
                        <p>아이디가 아직 없으신가요?</p>
                    </Link>
                </LoginLink>
                <button onClick={register}>일하러 가기</button>
            </FormContainer>
            {modal}
        </LoginContainer>
    );
};

export default Login;
